# 痛楚爆發(Pained Outburst)：原始碼依據

[English](en/ogryn_carapace_armor_trigger_on_zero_stacks.md)

[返回玩家說明](README.md#ogryn_carapace_armor_trigger_on_zero_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_trigger_on_zero_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_carapace_armor_trigger_on_zero_stacks`；名稱鍵：`loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks`；描述鍵：`loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks_new_desc`。
- 節點：`node_a919d7de-281e-485f-aabb-5d7c18d3aa4c`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 父 buff 的 `on_stacks_removed_func` 只在子層移除回呼中檢查門檻；`ogryn_carapace_explosion.stacks=5`。唯一 buff `duration=30`，並以 `has_unique_buff_id` 防止冷卻期間重複建立。
- 效果起始時若角色存活且未倒地，呼叫 `Toughness.replenish_percentage(unit, 0.5, false, ...)`；`false` 表示不略過 stat buffs。接著以 `ogryn_carapace_armor_explosion`、`radius=2.5`、`ogryn_charge_finish` profile 建立爆炸。
- `stack_offset=-1` 使玩家可見層數=內部子層數−1；回呼直接檢查原始 `num_child_stacks<=5`，因此依此來源實際在可見 4 層或更低才符合條件，較兩種語言描述的「5 層以下」少一層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1693–1727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1693-L1727)
- [scripts/settings/talent/talent_settings_ogryn.lua：97–99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L97-L99)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：683–760](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L683-L760)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：170–191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L170-L191)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：113–129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L113-L129)
- [scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua：95–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua#L95-L125)
- [scripts/utilities/toughness/toughness.lua：16–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L275)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1693–1727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1693-L1727)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：740–762](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L740-L762)

## 算例條件與待確認事項

- **算例**：失層後剩 4 層、未選「最堅韌！」時，基本恢復量為最大韌性的 50% × (1 + 4 × 3%) = 56%，再受缺少韌性限制。 例如最大韌性 100 且缺額足夠，可恢復 100 × 56% = 56 點；倒地時不提供這筆恢復。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 程式檢查內部子層數而非扣除 stack offset 後的可見層數。角色倒地時仍建立爆炸，但起始函式略過韌性恢復。30 秒是唯一 buff 的存續時間；冷卻過後仍須再有一次子層移除才會觸發。
- 中英文字都寫 5 層或以下；固定來源在失層回呼時檢查的數值換算成玩家可見層數是 4 層或更低。文字與程式來源皆為1.13.1；這項差異待遊戲內核對。固定來源使用的爆發設定對護甲的直接傷害倍率皆為 0，效果是擊退而非造成傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d03260f0`。
- 繁中寫「當…層數達…層以下時」，英文寫「reaches … stacks or below」，兩種本機文字都表示 5 層或以下。固定公開來源在失去一層後檢查內部層數，換算為玩家可見 4 層或更低；文字與程式來源皆為1.13.1；實際表現待遊戲內核對，不單憑此判定翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_trigger_on_zero_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c)

圖片僅供技能辨識，不作機制證據。

