# 踐踏(Trample)：原始碼依據

[English](en/ogryn_charge_trample.md)

[返回玩家說明](README.md#ogryn_charge_trample)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_charge_trample)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_charge_trample`；名稱鍵：`loc_talent_ogryn_ability_charge_trample`；描述鍵：`loc_talent_ogryn_ability_charge_trample_desc`。
- 節點：`node_b3d3d2eb-a57e-4c0e-bc45-5d0c41b94135`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- ogryn_charge_trample proc 僅以 damage_type=ogryn_lunge 的 on_hit 觸發，每次事件加入一層 ogryn_charge_trample_buff。buff duration=10、max_stacks與max_stacks_cap=20、refresh_duration_on_stack=true，stat_buffs.damage=0.025。
- 命中事件處理沒有 attacked_unit 去重集合；疊層以每次有效衝鋒命中事件計算。到20層後，buff extension 的上限重新計時路徑重設持續時間。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1455–1502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1455-L1502)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：954–986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L954-L986)
- [scripts/extension_systems/buff/buff_extension_base.lua：580–605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L580-L605)
- [scripts/settings/talent/talent_settings_ogryn.lua：284–294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L284-L294)
- [scripts/utilities/attack/damage_calculation.lua：287–305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L287-L305)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1455–1502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1455-L1502)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1525–1547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1525-L1547)

## 算例條件與待確認事項

- **傷害算例**：4 次命中提供 10%，基礎 100 點變成 100 × (1 + 4 × 2.5%) = 110 點；滿 20 層為 150 點。若同階段另有 20% 增傷，滿層為 170 點。
- 疊層由有效衝鋒命中事件觸發；若一次衝鋒對同一敵人產生多個命中事件，程式沒有額外目標去重。
- 傷害加成套用於基礎傷害；最終傷害仍受武器、護甲與其他傷害修正影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fd34bb5c`。
- 繁中原文「命中的每個敵人都會使你獲得一層」與英文原文「for each enemy hit gain a stack」都按衝鋒命中敵人取得一層；兩種原文同樣列出每層傷害、10秒與20層上限，公式算例是將其轉成實際倍率，未發現明確矛盾。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_trample.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e)

圖片僅供技能辨識，不作機制證據。

