# W14 legacy input archives

This directory records the exact Extension Git inputs declared by the frozen W03 scope manifest. The input inventory lists each source commit, path, Git blob ID, raw SHA-256, byte length, and line-ending treatment. The compressed files under [`content/legacy/w14/extension-inputs/`](../../../content/legacy/w14/extension-inputs/) decompress to those exact Git blob bytes.

This is a preservation archive only. It is not current Source data, does not grant current approval, and does not turn historical review records into W14 approvals. Five paths also had protected local review overlays in the original worktree; this archive uses only their exact pinned Git commit blobs. No original dirty worktree body was read.

The archive is read-only historical material. Current technical and localized owners remain Source and Web respectively. The exact W03 scope and current migration outcomes remain tracked in the Web W14 overlay.

To reproduce the archive from the fixed Extension object store:

```powershell
node scripts/content/w14-archive-extension.mjs --extension-git-root <clean-extension-clone> --output <new-output-directory>
```

Use a new output directory that does not already exist; the command does not overwrite an archive. It reads only commits and paths listed in [`extension-source-inventory.json`](extension-source-inventory.json), validates the Git blob identity and SHA-256 before archiving, writes a deterministic gzip package, then verifies the package by reading it back.

## M01: public Mods analysis, historical only

The human-readable files under [`content/legacy/mods/241ad76/Game Info/`](../../../content/legacy/mods/241ad76/Game%20Info/) preserve the 3,071 raw Git blobs listed in the adjacent [`m01-manifest.json`](../../../content/legacy/mods/241ad76/m01-manifest.json). The manifest binds each original path to the public Mods repository at commit `241ad76ce62330472aa423055a5b85db59bb6c0d`, its Git blob ID, byte length, raw SHA-256, and a fixed GitHub source URL. It also binds the 107,060 W03 M01 mapping rows to ledger digest `90d1d27ed7673db16ff3c5b82640f2af7847466fc5a7a4fcd7d1f9795ee9af16`.

This is a byte-preservation archive, not a current game-data package or approval. Its version status is explicitly `unverified`, its current approval is `not-current-approved`, and readers should use it only to trace historical source material. Current Source and Web ownership is unchanged.

The exact public-safe inventory used by the archive command is included here as [`m01-source-inventory.json`](m01-source-inventory.json). Its raw SHA-256 is `ee841b36463248003cf490344979170fb67b860ea39b70295dcc4c65a8de3307`; the original line endings are preserved. This is source-location/hash metadata only, not private content or a current approval.

To reproduce from this repository's fixed inventory and a local clone of the public Mods Git object database:

```powershell
node scripts/content/contract-w14-m01-archive.mjs --inventory-file docs/legacy/w14/m01-source-inventory.json --source-repository <local-mods-git-clone>
node scripts/content/contract-w14-m01-archive.mjs --verify
```

The archive command accepts only the fixed inventory SHA-256, checks the fixed repository origin and commit, reads blobs with `git cat-file` (not checkout/worktree files), and verifies every output byte before reporting success. The archive root is fixed to `content/legacy/mods/241ad76/`; the existing Extension-specific `psyker/` archive is preserved.

## W03 extension-additional-data preservation

The separate [`extension-additional-source-inventory.json`](extension-additional-source-inventory.json) pins nine additional Extension Git blobs listed by W03 `extension-additional-data` at commit `b18f5ee2d7c9886b1d9ecb56f7ece8fca5d32c9a`. They account for 100,477 W03 rows and 8,075,596 raw bytes. Their compressed byte-preservation archive is under [`content/legacy/w14/extension-additional-inputs/`](../../../content/legacy/w14/extension-additional-inputs/). The inventory binds each file to its full Git blob ID, raw SHA-256, size, and W03 row count. These are pinned historical inputs, not current approval; no game release is inferred from their filenames. This batch is separate from the original 26-file archive and M01 archive.

Rebuild this batch from the pinned Extension Git object database with:

```powershell
node scripts/content/w14-archive-extension.mjs --extension-git-root <clean-extension-clone> --inventory docs/legacy/w14/extension-additional-source-inventory.json --output <new-output-directory>
```

Use a new output directory that does not already exist. Compare its manifest SHA-256 and raw file pins with the committed archive rather than overwriting the archive.
