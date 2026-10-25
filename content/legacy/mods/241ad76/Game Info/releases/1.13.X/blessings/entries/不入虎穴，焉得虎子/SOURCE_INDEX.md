# 不入虎穴，焉得虎子：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| I–IV tiers and formatter | [I–IV tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L417-L472) |
| own wrapper | [own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L22-L24) |
| base proc gates and regen callback | [base proc gates and regen callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1216-L1240) |
| special hit condition | [special hit condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| elite target tag condition | [elite target tag condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L614-L620) |
| same weapon item condition | [same weapon item condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| special slap damage profile | [special slap damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L668-L690) |
| ActionSweep melee type and actual weapon item | [ActionSweep melee type and actual weapon item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| damage resolution precedes on_hit handling | [damage resolution precedes on_hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L383) |
| on_hit event gate and payload | [on_hit event gate and payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| toughness rate consumer | [toughness rate consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L116-L184) |
| regen timestamp reset and later damage timer | [regen timestamp reset and later damage timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L356-L393) |
| AI slot users and target-relative slots | [AI slot users and target-relative slots](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/slot/slot_system.lua#L80-L116) |
| occupied AI combat positions count | [occupied AI combat positions count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/slot/slot_system.lua#L675-L707) |
| spatial slot generation | [spatial slot generation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/slot/utilities/slot.lua#L42-L74) |
| held condition also gates active stats | [held condition also gates active stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300) |
| three mark action coverage | [three mark action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L840-L1156) |
| three mark action coverage | [three mark action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L852-L1309) |
| three mark action coverage | [three mark action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L804-L1391) |
| ogryn_club_p2_m1 action coverage | [ogryn_club_p2_m1 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L123-L291) |
| ogryn_club_p2_m1 action coverage | [ogryn_club_p2_m1 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L345-L514) |
| ogryn_club_p2_m1 action coverage | [ogryn_club_p2_m1 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L840-L1156) |
| ogryn_club_p2_m2 action coverage | [ogryn_club_p2_m2 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L123-L290) |
| ogryn_club_p2_m2 action coverage | [ogryn_club_p2_m2 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L346-L514) |
| ogryn_club_p2_m2 action coverage | [ogryn_club_p2_m2 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L569-L801) |
| ogryn_club_p2_m2 action coverage | [ogryn_club_p2_m2 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L852-L1309) |
| ogryn_club_p2_m3 action coverage | [ogryn_club_p2_m3 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L123-L429) |
| ogryn_club_p2_m3 action coverage | [ogryn_club_p2_m3 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L483-L748) |
| ogryn_club_p2_m3 action coverage | [ogryn_club_p2_m3 action coverage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L804-L1391) |
| ProcBuff duration | [ProcBuff duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| ProcBuff no cooldown gate | [ProcBuff no cooldown gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff held stat gate | [ProcBuff held stat gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L254) |
| ProcBuff refresh on event | [ProcBuff refresh on event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| player special profile trigger coverage M1 | [player special profile trigger coverage M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L123-L1156) |
| player special profile trigger coverage M2 | [player special profile trigger coverage M2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L123-L1309) |
| player special profile trigger coverage M3 | [player special profile trigger coverage M3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L123-L1391) |
| M1 Ogryn default toughness equip | [M1 Ogryn default toughness equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1467-L1475) |
| M2 Ogryn default toughness equip | [M2 Ogryn default toughness equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1689-L1697) |
| M3 Ogryn default toughness equip | [M3 Ogryn default toughness equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1783-L1791) |
| regen timestamp setter | [regen timestamp setter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L356-L360) |
| damage resets normal regen timer | [damage resets normal regen timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L387-L393) |
| regen down/depletion gates | [regen down/depletion gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L475) |
| Ogryn base toughness | [Ogryn base toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/toughness/archetype_toughness_templates.lua#L69-L89) |
| default weapon toughness multiplier | [default weapon toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/toughness/weapon_toughness_templates.lua#L9-L31) |
| on_equip trait target resolution | [on_equip trait target resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| install equipment buffs | [install equipment buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| unwield separate from on_equip removal | [unwield separate from on_equip removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| held predicate | [held predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| server buff event delivery | [server buff event delivery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

三個已綁定型號都將左右掌擊特殊掃掠接到 `ogryn_club_special`；該 profile 帶 `weapon_special=true`，ActionSweep 以 melee attack type 並傳入當前棍棒 item。祝福的 base check 要求同一 item、目標 elite tag、特殊 melee attack，另由持用條件控制 proc 與 active stat。普通、推擊、推後追擊與另外的普通拳擊掃掠不符合 special 條件。

Attack 先完成命中傷害與 HitReaction，然後才處理 `on_hit`。符合條件的事件將單一 ProcBuff 活動起點設為事件更新時間；無 cooldown 時後續合格命中可刷新起點。持續時間採 own tier 覆寫的 2／3／4／5 秒。伺服器 callback 呼叫 `set_toughness_regen_delay()`，把韌性恢復時間戳設為當下；事件本身不直接增加韌性。

韌性消費端把本項 0.5 加進協同恢復率修正，再套用協同、武器及其他速率倍率。一般分支須有韌性缺損，更新時間嚴格晚於 regen delay，恢復未被停用，並符合「沒有 AI 佔用角色周圍近戰位置」或「明確 all-times coherency 解鎖」條件；其後以實際缺損封頂。角色受傷可再推遲原生恢復時間。因此加成是速率輸入，不是即時恢復、最大韌性百分比或無條件的最終速率增幅。

祝福由 on_equip 安裝；持用條件只關閉切槽時的觸發與屬性，不移除祝福也不暫停時限。真正卸裝才移除 on_equip buff。

令 `e=0.5` 為活躍 tier 加進韌性協同率修正的值，`B` 為 Ogryn 基礎速率，`W`、`R` 為武器與其他速率倍率，`M` 為協同倍率。符合原生恢復分支（無 AI 佔用角色周圍近戰位置，或有明確 all-times coherency 解鎖）時，祝福帶來的額外速率為 `Δregen = B × W × R × e × M`；既有協同修正仍保留。之後另算 `toughness_regen_percent × max_toughness`，實際恢復量再受 `toughness_damage` 缺損封頂。

**前提算例**：`B=5/s, W=1, R=1, M=1, e=.5`；原生恢復分支可用、延遲已過、無停用或額外百分比恢復、缺損至少 2.5。此時 `Δregen=2.5/s`。這是速率額外輸入；tier formatter 的 +50% 不是最大韌性的 50%，也不是不受條件限制的最終恢復率。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_212`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_212.png)｜[Issue附件](https://github.com/user-attachments/assets/0f9d8b8f-e684-4a43-8301-20f9a41a3b10)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 惡霸棍棒等級覆寫 | [惡霸棍棒等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L417-L472) |
| 惡霸棍棒Buff接入 | [惡霸棍棒Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L22-L24) |
| UI 惡霸棍棒 | [UI 惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L308) |
| 惡霸棍棒 「布倫特專用」 Mk I匯入 | [惡霸棍棒 「布倫特專用」 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L15) |
| 惡霸棍棒 「布倫特專用」 Mk I接入 | [惡霸棍棒 「布倫特專用」 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1380-L1382) |
| 惡霸棍棒 「布倫特得意之作」 Mk II匯入 | [惡霸棍棒 「布倫特得意之作」 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L15) |
| 惡霸棍棒 「布倫特得意之作」 Mk II接入 | [惡霸棍棒 「布倫特得意之作」 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1601-L1603) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L15) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb接入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1695-L1697) |
