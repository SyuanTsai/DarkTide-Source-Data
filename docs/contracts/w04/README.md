# W04 bounded source candidate

This generated Source v2 candidate records only the provenance of four allowlisted official UI excerpts for Steam build 25681127 / game 1.13.2. It contains one pending `official-document` evidence record and no gameplay claims, technical values, official text, review approvals, or game changes. Its complete coverage applies only to those four excerpts, not to the game or the W03 migration inventory.

The new batch re-extracts the same installed build. Its four raw hashes match the prior valid batch; it is not an official game update. The source dictionary is pinned to ba6c148f3c2768ca3ce20d846a12e56e2f433f3e; this does not assert whole-build code equivalence.

Fixed inputs:
- Private decoder: 56bd70c9cea12546fca45f055713fe9200c797d4; the existing decoder/verifier/restorer are unchanged.
- Private bounded exporter: 194e8b043f18f9f3c877ed6790118add47401a5e; exporter SHA-256 c927804f7845ae8c888c59aa14cc9e3c5156bbb5032f188104f72d0944fa49d5.
- Batch snapshot: w04-25681127-20261018-9449f844838349d381c159226c56333b.
- Archive SHA-256: 7177d8867837acbffa119f91b7462a19785e6654743d158d282a437a2e22851c; 58,587,504 bytes.
- Restoration manifest SHA-256: 057d37afcfb8612e957062cd0fd4de42999094a8049941ee9ada875af47d9a20.
- Content SHA-256: 528161275c49c339853f3f6dd3a6f8c7dcc6894f8248654e4a202b1e92919174, computed from sorted UTF-8 lines `raw/<basename><TAB><lowercase raw SHA-256><LF>`, including the final LF.
- This candidate SHA-256: 0bcc8d04961b2fa2d65b270d20315ebba7d32de09120ca40c0b1fecd2f06964c.

The bounded Private exporter produces both candidates outside Git. After review, this Source-owned evidence file and the Web-owned official excerpts are copied unchanged into their respective candidate paths. These are generated handoff snapshots, not additional editable authoring inputs. The raw files, complete locales, dictionaries, code and private proof remain outside public repositories.

The existing Source v2 validator accepts this candidate with publicationEligible=false. The four Web excerpts match both the verified new batch and the existing W01 official text byte for byte. The pending candidate does not change the W01 build inputs, approved claims, active release, or isolated preview. W05 claim analysis/import has not started.

W01 P01-P10 and the accepted W02/W03 evidence remain valid where inputs did not change. This candidate is not evidence that the new Google archive has been retrieved or restored; the separate real I/O acceptance and any outstanding blocker are tracked in [SYP-336](https://syuantsai.atlassian.net/browse/SYP-336). W04 remains subject to the user's review. No W05, full migration, merge, formal release or Mods cleanup is authorized by this artifact.

Rollback only this W04 candidate commit/reference; preserve the previous batch and active W01 combination. Do not delete the private archive or alter sharing to roll back.
