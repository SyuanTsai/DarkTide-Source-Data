# Historical Psyker Brain Rupture analysis archive

This directory preserves the English and Traditional Chinese Brain Rupture analysis files from the fixed Mods Git commit `241ad76ce62330472aa423055a5b85db59bb6c0d` as historical source material. Both Markdown files were copied from raw Git blob bytes without editing: [English](en/psyker_brain_burst_improved.md) and [Traditional Chinese](psyker_brain_burst_improved.md). Their exact source paths, blob IDs, byte lengths, SHA-256 digests, and the bounded source comparison are recorded in [provenance.json](provenance.json). Only these two files are archived; the complete original Mods directory is not mirrored.

The source-analysis text targets release 1.13.1 and upstream code commit `7e662fcda16219d775b84af50322be2e9cd9d62e`. Comparing the 28 cited line ranges across its 15 unique source files with release 1.13.2 commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e` found the same Git blob ID for each cited file. This is limited to those 15 files. It does not establish equivalence of the full game, repository, Steam build, runtime behavior, or localized presentation.

The archived byte hashes use Git's fixed blob bytes (LF). The two archive paths have scoped `-text` attributes so Windows checkout settings do not rewrite their line endings. Prior working-tree hashes may differ when Git checks out CRLF; the Mods repository was not modified.

The complete analysis remains GitHub-only legacy archive material. The shared Source candidate contains only concise, pending claim-support summaries that point back to this archive; it does not copy the full analysis paragraphs into the shared player-data package.

The archived Markdown retains relative links to related files from the original Mods directory. Those linked README, source-index, and localization files were not archived here; use their fixed-commit URLs below. The broader original directory can be browsed at the [fixed Psyker folder snapshot](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/tree/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker).

- [Traditional Chinese README](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/README.md)
- [English README](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/en/README.md)
- [Traditional Chinese source index](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/SOURCE_INDEX.md)
- [English source index](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/en/SOURCE_INDEX.md)
- [Traditional Chinese localization comparison](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/LOCALIZATION_COMPARISON.md)
- [English localization comparison](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/Game%20Info/releases/1.13.X/skills/talents/Psyker/en/LOCALIZATION_COMPARISON.md)

The archive remains bilingual historical material, not a second current technical-data owner. Current Source technical records are maintained in DarkTide-Source-Data; DarkTide-Web remains the localized presentation owner. These records remain pending review, with no human review receipt or formal publication. No Mods files were deleted, retired, or cleaned up.