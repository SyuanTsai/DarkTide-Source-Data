# 處決者姿態(Executioner's Stance)：原始碼依據

[English](en/veteran_combat_ability_elite_and_special_outlines.md)

[返回玩家說明](README.md#veteran_combat_ability_elite_and_special_outlines)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_elite_and_special_outlines`；名稱鍵：`loc_talent_veteran_combat_ability_elite_and_special_outlines`；描述鍵：`loc_talent_veteran_ranged_stance_toughness_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L721-L754)：`ability`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L290-L352)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

改良節點安裝差值buff：ranged_damage=.25-.15=.10、ranged_weakspot_damage=.10、impact=1-.5=.5；與仍存在的基礎buff相加，總加成.25／.25／1。每秒按最大韌性恢復.1，受恢復修正與上限。

主buff的擊殺檢查使用_can_show_outline的breed分類，不查實際畫面是否已描邊，也沒有重查距離；因此主文以「符合輪廓種類」描述。未選ogryn規則時，ogryn／monster／captain／cultist_captain先排除。輪廓建立時專家豁免50公尺限制，一般精英需distance_squared<2500；重新計時會重建候選列表。姿態和輪廓各有計時，不保證所有視覺更新同一幀。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 290–352 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L290-L352)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 65–72 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L65-L72)
- [scripts/settings/talent/talent_settings_veteran.lua，第 73–100 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 85–221 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L221)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 296–340 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L340)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 369–465 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L369-L465)
- [scripts/utilities/attack/damage_calculation.lua，第 284–320 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320)
- [scripts/utilities/attack/damage_calculation.lua，第 715–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L782)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua，第 826–869 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869)

## 百分比與實際傷害增幅

- **原始碼確認**：升級模板寫入 combat_ability 與 combat_ability_base 的差值，各項傷害加成為 .25−.15=.10；總值為.25，不能將.15與.25相加成.40。
- **程式推導**：玩家例分別隔離遠程傷害與弱點額外傷害的升級。前者115→125，增幅約8.70%；後者固定B=100、F=40、無其他finesse加成及暴擊，146→150，增幅約2.74%。兩者都不是能力總增幅，不可直接把兩個相對百分比相加；完整攻擊須沿damage_calculation順序重算。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 296–341 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L341)
- [scripts/settings/talent/talent_settings_veteran.lua，第 72–99 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L72-L99)
- [scripts/utilities/attack/damage_calculation.lua，第 60–95 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L95)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_ranged_stance_toughness_description`；hash：`38234496`；繁中entry_index：`3638`；英文entry_index：`3638`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「延長{refresh_duration:%s}秒」；同版英文對照片段：`refreshes the duration`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。時間操作錯譯：同資源英文是refreshes，繁中譯為延長指定秒數，會把重設剩餘時間誤讀為在現有剩餘時間上加秒。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第85–96行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L96)
- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第141–170行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L170)
- [公開依據：scripts/extension_systems/buff/buff_extension_base.lua，第439–457行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_combat_ability_elite_and_special_outlines.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba)

圖片僅供技能辨識，不作機制證據。

