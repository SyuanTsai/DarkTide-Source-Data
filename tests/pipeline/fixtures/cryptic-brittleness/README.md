Pinned source: Darktide Source-Code e46b8926cfa3fa35503e4b80b15aab7a804314e4.

The arc module is preserved in full. The cryptic buff fixture retains the exact
electrocution passive table and its original import/alias declarations. The talent
fixture retains the two original talent tables and adds one unrelated control.
The test builds the remaining dependency data in memory; no Lua is executed.

Production fingerprints cover the entire arc module and the original passive
table, ignoring comments and whitespace. The tests deliberately mutate their
references and captured bindings to verify refusal. Updating a fingerprint needs
a new review of the application chain and corresponding negative cases.
