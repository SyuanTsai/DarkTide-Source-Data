# W14 legacy input archive

This directory records the exact Extension Git inputs declared by the frozen W03 scope manifest. The input inventory lists each source commit, path, Git blob ID, raw SHA-256, byte length, and line-ending treatment. The compressed files under [`content/legacy/w14/extension-inputs/`](../../../content/legacy/w14/extension-inputs/) decompress to those exact Git blob bytes.

This is a preservation archive only. It is not current Source data, does not grant current approval, and does not turn historical review records into W14 approvals. Five paths also had protected local review overlays in the original worktree; this archive uses only their exact pinned Git commit blobs. No original dirty worktree body was read.

The archive is read-only historical material. Current technical and localized owners remain Source and Web respectively. The exact W03 scope and current migration outcomes remain tracked in the Web W14 overlay.

To reproduce the archive from the fixed Extension object store:

```powershell
node scripts/content/w14-archive-extension.mjs --extension-git-root <clean-extension-clone>
```

The command reads only commits and paths listed in [`extension-source-inventory.json`](extension-source-inventory.json), validates the Git blob identity and SHA-256 before archiving, writes a deterministic gzip package, then verifies the package by reading it back.
