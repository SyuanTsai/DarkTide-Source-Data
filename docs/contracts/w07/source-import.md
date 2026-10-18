# W07 Source weapon import candidate

Status: pending human review. Publication eligibility is false and no review receipts are included.

The bundle extends the fixed W06 Source contract and imports the complete selected W01 chainaxe P1 closure: 2 weapons, 76 claims, 12 evidence records, and the original 2 stat definitions with their 2 curves.

The current-code snapshot is the independently fixed 37-file manifest at commit ba6c148f3c2768ca3ce20d846a12e56e2f433f3e. It is an expanded selected-input snapshot, not a claim that all game code was imported. Steam build remains UNVERIFIED.

The curated bundle contains 19 damage profiles, 26 referenced alias tables, 16 action-specific attack profiles, all declared continuation rows, six local sticky definitions, and seven explicitly empty source tables.

The pinned movement code subtracts sticky start time from elapsed time and compares the result with each movement-curve t coordinate, so t is seconds while modifiers are ratios ([movement update, lines 30–40](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/weapon/weapon_action_movement.lua#L30-L40), [sticky start-time setup, lines 15–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/weapon/weapon_action_movement_shared.lua#L15-L29)). These links document unit interpretation; the selected 37-file snapshot remains a bounded input set, not all source code.

Raw action and profile tables remain source descriptions. The mapper does not execute Lua conditions or profile overrides and does not calculate final damage. Enemy-specific hit-zone and critical/weakspot joint mappings are NOT_IMPORTED; secondary push/dodge runtime resolution is also NOT_IMPORTED.

The exact selected rows and locator paths are retained in the JSON contract and source import manifest. All new records are pending review; no human approval is asserted.
