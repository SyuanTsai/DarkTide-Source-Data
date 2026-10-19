# W07 Source weapon import candidate

Status: pending human review. Publication eligibility is false and no review receipts are included. This is a static-source import candidate, not an official game update or publication.

The bundle extends the fixed W06 Source contract and retains the selected W01 chainaxe P1 closure: 2 weapons, 76 claims, 12 evidence records, 2 stat definitions, and 2 stat curves.

Source inputs are pinned to public-code commit ba6c148f3c2768ca3ce20d846a12e56e2f433f3e. The prior selected-code snapshot contains 37 files; the W07 static supplement contains 103 files. These are bounded, reviewable source closures, not a claim that all game code was imported. Steam build remains UNVERIFIED.

Static combat coverage includes 59 registry entries, 52 minion hit schemas, 7 explicitly excluded non-minion entries, 624 hit zones, and 1232 zone actor entries. The candidate includes 8 armor identities (7 used by the selected minion schemas), 10 fixed Havoc armor override entries, 3 static combat-relation records, and 52 target profiles. Target applicability describes the fixed registry schemas; it does not establish spawn availability or player attainability.

Action/profile coverage includes 16 selected attack profiles and preserves each mark’s static action/input relationships. m1: 36 literal profile assignments (including local sticky tables), 58 literal continuation edges; m2: 24 literal profile assignments (including local sticky tables), 32 literal continuation edges. Raw conditions, parent/override relationships, and generator definitions remain source descriptions; the pipeline does not execute Lua or resolve runtime conditions.

The four selected profile curves retain their raw endpoints and source order. The imported mapping separates the raw normalized profile axis, the trait parameter, and the outer item-stat value. The boost table records its five-point piecewise-linear source mapping and the selected caller bound. Client preview rules are documented separately from player-obtainable ranges.

Server-generated and player-obtainable stat ranges remain unknown because the fixed public client sources checked here do not define that server-side range. Checked source paths: `scripts/backend/master_data.lua`, `scripts/backend/gear.lua`, `scripts/backend/crafting.lua`, `scripts/backend/master_items.lua`, `scripts/backend/store.lua`, `scripts/managers/data_service/services/crafting_service.lua`, `scripts/managers/data_service/services/store_service.lua`, `scripts/settings/equipment/local_items_loader.lua`, `scripts/settings/item/crafting_settings.lua`, `scripts/settings/item/rank_settings.lua`, `scripts/settings/item/rarity_settings.lua`, `scripts/utilities/offer.lua`. No player-attainable rating interval is asserted; server-provided item state can include generated values, and this snapshot does not establish which values a player can obtain.

Execution boundaries: final damage arithmetic, Lua condition execution, runtime override execution, and secondary push/dodge runtime resolution are excluded. Static enemy hit-zone, armor, weakspot, multiplier, and action/profile relationships are imported and source-linked.

The exact source rows, digests, and locators are retained in the JSON contract and import manifest. New records remain pending review; no human approval is asserted.
