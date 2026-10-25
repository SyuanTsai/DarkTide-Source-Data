# 針鋒相對(Targeted Brutality)：原始碼依據

[English](en/adamant_charge_cooldown_reduction.md)

[返回玩家說明](README.md#adamant_charge_cooldown_reduction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_charge_cooldown_reduction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_charge_cooldown_reduction`；名稱鍵：`loc_talent_adamant_charge_cooldown_name`；描述鍵：`loc_talent_adamant_charge_cooldown_alt_description`。
- 節點：`node_ed72b6e9-1213-4760-bd1c-28c0f93c1f55`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級在衝鋒時監聽能力造成的有效命中，只接受衝鋒命中傷害；一般目標每次累積 0.5 秒，帶精英、專家或巨獸標記的命中累積 1 秒。
- 衝鋒結束時將累積量限制在 5 秒，再透過戰鬥技能資源恢復流程返還冷卻；不在每次命中時立即重置能力。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：126–148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L126-L148)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：141–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L141-L178)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：43–58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L43-L58)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1154)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：126–148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L126-L148)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1302–1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1302-L1324)

## 算例條件與待確認事項

- 6 次一般命中×0.5 秒 + 3 次高階目標命中×1 秒=6 秒；受 5 秒上限限制，最多返還 5 秒。
- 計算只取衝鋒造成的有效命中，並在衝鋒結束時一次返還；單次返還上限固定為 5 秒。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`775c291d`。
- 繁中「每次擊中敵人」與英文「for each hit」相同；精英、專家或巨獸提高返還量、以及 5 秒最高值亦一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_charge_cooldown_reduction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d)

圖片僅供技能辨識，不作機制證據。

