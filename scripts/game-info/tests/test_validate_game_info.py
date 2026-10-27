import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / "validate_game_info.py"

class RecordLinkValidationTests(unittest.TestCase):
    # Scenario: A historical local snapshot contains obsolete links, while current docs are valid.
    # Purpose: Skip explicitly excluded history without hiding a broken current knowledge link.
    def test_UnitT10_excluded_history_does_not_hide_current_errors(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / "local").mkdir()
            (root / "local" / "snapshot.md").write_text("[old](missing.md)", encoding="utf-8")
            (root / "README.md").write_text("# Current", encoding="utf-8")
            command = [sys.executable, str(SCRIPT), "--root", str(root), "--exclude-dir", "local"]
            result = subprocess.run(command, capture_output=True, text=True, encoding="utf-8")
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(json.loads(result.stdout)["markdown_files"], 1)
            (root / "README.md").write_text("[broken](missing.md)", encoding="utf-8")
            result = subprocess.run(command, capture_output=True, text=True, encoding="utf-8")
            self.assertEqual(result.returncode, 1)
            self.assertEqual(len(json.loads(result.stdout)["errors"]), 1)

    # Scenario: Include ignored sources while explicitly excluding local record snapshots.
    # Purpose: Ensure the source switch never overrides the requested directory exclusions.
    def test_UnitT20_source_inclusion_preserves_explicit_exclusions(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            for name in ["local", "vendor"]:
                (root / name).mkdir()
                (root / name / "README.md").write_text("[broken](missing.md)", encoding="utf-8")
            result = subprocess.run(
                [sys.executable, str(SCRIPT), "--root", str(root),
                 "--include-local-source", "--exclude-dir", "local"],
                capture_output=True, text=True, encoding="utf-8")
            self.assertEqual(result.returncode, 1, result.stderr)
            report = json.loads(result.stdout)
            self.assertEqual(report["markdown_files"], 1)
            self.assertEqual(report["errors"][0]["file"], "vendor/README.md")

if __name__ == "__main__":
    unittest.main()
