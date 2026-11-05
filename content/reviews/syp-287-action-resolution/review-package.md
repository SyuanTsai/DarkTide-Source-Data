# Action resolution 核准審查包

- 前置量測：140 把武器、952 個 attack profile、904 個缺少 actionResolution；origin／row 不符 0。
- 補上的 profile：904；修補記錄：914；無法解析：0。
- 修補後：缺少 actionResolution 0；origin／row 不符 0；其他 action 綁定不符 0。
- 待審查目標：9308；依賴重審：124 筆記錄／1328 個目標。
- 記錄狀態：pending 0；stale 1038；publicationEligible=false。新增的 actionResolution 目標沒有 approved receipt。
- Package digest：`a1ea74aa17534f8b22f882ee9fabd36d64ace7e92fe6b6fea56d9c5e729cc972`（沿用 generic weapon approval 的 canonicalJsonBytes + SHA-256）。
- 補 sourceBindings 的 profile：12。使用同一 pinned parser，僅綁定既有 damageProfileRefs 中 profileKey 相同的 damage-profile；branchBindings 非空且等於 sourceBindings。

## 武器家族

| 家族 | 修補 profile 數 |
| --- | ---: |
| arc_rifle_p1 | 3 |
| autogun_p1 | 6 |
| autogun_p2 | 9 |
| autogun_p3 | 12 |
| autopistol_p1 | 2 |
| bolter_p1 | 6 |
| boltpistol_p1 | 6 |
| chainsword_2h_p1 | 16 |
| chainsword_p1 | 19 |
| combataxe_p1 | 26 |
| combataxe_p2 | 28 |
| combataxe_p3 | 28 |
| combatknife_p1 | 21 |
| combatsword_p1 | 26 |
| combatsword_p2 | 31 |
| combatsword_p3 | 28 |
| crowbar_p1 | 5 |
| dual_autopistols_p1 | 3 |
| dual_shivs_p1 | 21 |
| dual_stubpistols_p1 | 4 |
| flamer_p1 | 1 |
| forcestaff_p1 | 4 |
| forcestaff_p2 | 4 |
| forcestaff_p3 | 5 |
| forcestaff_p4 | 4 |
| forcesword_2h_p1 | 30 |
| forcesword_p1 | 24 |
| galvanic_rifle_p1 | 3 |
| lasgun_p1 | 6 |
| lasgun_p2 | 11 |
| lasgun_p3 | 6 |
| laspistol_p1 | 8 |
| needlepistol_p1 | 4 |
| ogryn_club_p1 | 29 |
| ogryn_club_p2 | 33 |
| ogryn_combatblade_p1 | 26 |
| ogryn_gauntlet_p1 | 7 |
| ogryn_hammer_2h_p1 | 10 |
| ogryn_heavystubber_p1 | 9 |
| ogryn_heavystubber_p2 | 6 |
| ogryn_pickaxe_2h_p1 | 32 |
| ogryn_powermaul_p1 | 31 |
| ogryn_powermaul_slabshield_p1 | 18 |
| ogryn_rippergun_p1 | 9 |
| ogryn_thumper_p1 | 4 |
| ogryn_thumper_p2 | 3 |
| ogryn_thumper_p3 | 4 |
| phosphor_pistol_p1 | 6 |
| plasmagun_p1 | 6 |
| powermaul_2h_p1 | 17 |
| powermaul_p1 | 19 |
| powermaul_p2 | 13 |
| powermaul_p3 | 11 |
| powermaul_shield_p1 | 21 |
| powersword_2h_p1 | 22 |
| powersword_p1 | 16 |
| powersword_p2 | 17 |
| powersword_p3 | 18 |
| saw_p1 | 10 |
| shotgun_p1 | 9 |
| shotgun_p2 | 8 |
| shotgun_p3 | 3 |
| shotgun_p4 | 6 |
| shotpistol_shield_p1 | 5 |
| stubrevolver_p1 | 8 |
| thunderhammer_2h_p1 | 18 |
| transonic_knife_p1 | 10 |
| transonic_sword_p1 | 9 |
| transonic_sword_transonic_knife_p1 | 21 |

## 補 sourceBindings 的 12 個 profile

- `darktide:attack-profile:autogun:p1:autogun_p1_m1:action_shoot_hip`
- `darktide:attack-profile:autogun:p1:autogun_p1_m1:action_shoot_zoomed`
- `darktide:attack-profile:autogun:p1:autogun_p1_m2:action_shoot_hip`
- `darktide:attack-profile:autogun:p1:autogun_p1_m3:action_shoot_hip`
- `darktide:attack-profile:autogun:p2:autogun_p2_m1:action_shoot_hip`
- `darktide:attack-profile:autogun:p2:autogun_p2_m2:action_shoot_hip`
- `darktide:attack-profile:autogun:p2:autogun_p2_m3:action_shoot_hip`
- `darktide:attack-profile:autogun:p3:autogun_p3_m1:action_shoot_hip`
- `darktide:attack-profile:autogun:p3:autogun_p3_m2:action_shoot_hip`
- `darktide:attack-profile:autogun:p3:autogun_p3_m3:action_shoot_hip`
- `darktide:attack-profile:lasgun:p1:lasgun_p1_m1:action_shoot_hip`
- `darktide:attack-profile:lasgun:p1:lasgun_p1_m1:action_shoot_zoomed`

## 閉包計數改變的 10 把武器

- `darktide:weapon:autogun:p1-m1:e46`
- `darktide:weapon:autogun:p1-m2:e46`
- `darktide:weapon:autogun:p1-m3:e46`
- `darktide:weapon:autogun:p2-m1:e46`
- `darktide:weapon:autogun:p2-m2:e46`
- `darktide:weapon:autogun:p2-m3:e46`
- `darktide:weapon:autogun:p3-m1:e46`
- `darktide:weapon:autogun:p3-m2:e46`
- `darktide:weapon:autogun:p3-m3:e46`
- `darktide:weapon:lasgun:p1-m1`

## 無法解析清單

- 無（0 筆）。

## 重現方式

`node scripts/content/imports/generic-action-resolution-approval.mjs --prepare --base ee4c300`

本包僅供人工審查，未套用核准；既有 receipts 原樣保留，依賴變動依驗證器規則標示 stale。
