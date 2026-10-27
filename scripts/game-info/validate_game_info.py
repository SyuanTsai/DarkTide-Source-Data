"""Check local Markdown links, images and fragment anchors for any Game Info root."""
import argparse
import html
import json
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import unquote, urlsplit


def content_without_fences(text):
    return re.sub(r"(?m)^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$", "", text)


def anchors(path):
    text = content_without_fences(path.read_text(encoding="utf-8-sig"))
    found = set(re.findall(r'<[^>]+\b(?:id|name)=["\']([^"\']+)["\']', text))
    occurrences = {}
    for heading in re.findall(r"(?m)^#{1,6}\s+(.+?)\s*#*\s*$", text):
        heading = re.sub(r"\[([^]]+)\]\([^)]*\)", r"\1", heading)
        heading = html.unescape(re.sub(r"<[^>]*>", "", heading)).replace("`", "").lower()
        slug = "".join(c for c in heading if c in " -_" or unicodedata.category(c)[0] in "LN").replace(" ", "-")
        repeat = occurrences.get(slug, 0)
        occurrences[slug] = repeat + 1
        found.add(slug + (f"-{repeat}" if repeat else ""))
    return found


def destinations(text):
    text = content_without_fences(text)
    text = re.sub(r"(`+)([^`]|(?!\1)`)*?\1", "", text)
    # Handles the encoded URLs and angle-bracket paths used in this repository.
    for match in re.finditer(r"\]\((<[^>]+>|[^\n)]+)\)", text):
        value = match[1]
        if value.startswith("<"):
            yield value[1:value.index(">")]
        else:
            yield re.split(r'\s+["\']', value, maxsplit=1)[0]
    yield from re.findall(r'<(?:img|a)\b[^>]*\b(?:src|href)=["\']([^"\']+)["\']', text)
    yield from re.findall(r"(?m)^\[[^]]+\]:\s*(\S+)", text)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, required=True, help="Game Info directory")
    parser.add_argument("--include-local-source", action="store_true", help="Also check ignored source/vendor READMEs")
    parser.add_argument("--exclude-dir", action="append", default=[], help="Directory component to skip; repeat as needed")
    args = parser.parse_args()
    root = args.root.resolve()
    if not root.is_dir():
        parser.error("--root must be an existing directory")
    excluded = set(args.exclude_dir)
    if not args.include_local_source:
        excluded.update({"Extracted Text", "extracted-text", "vendor"})
    files = sorted(p for p in root.rglob("*.md") if not (excluded & set(p.relative_to(root).parts)))
    errors, cache, local_count, remote_count = [], {}, 0, 0
    for path in files:
        for dest in destinations(path.read_text(encoding="utf-8-sig")):
            parsed = urlsplit(dest)
            if parsed.scheme or parsed.netloc:
                remote_count += 1
                continue
            target = (path.parent / unquote(parsed.path)).resolve() if parsed.path else path
            local_count += 1
            if not target.exists():
                errors.append({"file": path.relative_to(root).as_posix(), "target": dest, "reason": "missing file"})
            elif parsed.fragment and target.suffix.lower() == ".md":
                if target not in cache:
                    cache[target] = anchors(target)
                if unquote(parsed.fragment) not in cache[target]:
                    errors.append({"file": path.relative_to(root).as_posix(), "target": dest, "reason": "missing anchor"})
    print(json.dumps({"markdown_files": len(files), "local_references": local_count, "remote_references": remote_count, "errors": errors}, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
