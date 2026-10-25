# 亞空間突破(Warp Unbound)：原始碼依據

[English](en/psyker_overcharge_stance_infinite_casting.md)

[返回玩家說明](README.md#psyker_overcharge_stance_infinite_casting)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_overcharge_stance_infinite_casting)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_overcharge_stance_infinite_casting`；名稱鍵：`loc_talent_psyker_overcharge_infinite_casting`；描述鍵：`loc_talent_psyker_overcharge_infinite_casting_desc`。
- 節點：`node_012fb3aa-bcfb-429b-8bd9-376cd7ad7915`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦以 psyker_overcharge_stance_infinite_casting 特殊規則標記注視buff。buff停止時依此規則施加 psyker_overcharge_stance_infinite_casting，而非一般 cool_off。持續時間明定為 post_stance_duration 10秒 + cooloff_duration 1.5秒=11.5秒，且帶有 psychic_fortress keyword，這是反噬超載防護。主動注視本身仍以warp_charge_component.current_percentage達100%作為停止條件；防護在stop後套用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：521–536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L521-L536)
- [scripts/settings/talent/talent_settings_psyker.lua：5–15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1073–1082](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1073-L1082)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1128–1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1128-L1168)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1219–1226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1219-L1226)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：521–536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L521-L536)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1710–1733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1710-L1733)

## 算例條件與待確認事項

- 注視因反噬達100%而結束，且此天賦已選取；不計延長/重新計時。 離場防護時間=10秒離場增益時間+1.5秒平息緩衝時間=11.5秒。 接下來11.5秒可繼續使用靈能能力而不因反噬超載；反噬值仍會照常累積。
- 本天賦不阻止注視期間反噬上升，也不改變100%反噬結束注視的條件。
- 此保護時間是停止注視後的11.5秒，不是啟動期間再多11.5秒。
- 超載防護之外的技能/攻擊效果未由本source片段證明，不延伸描述。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`10334171`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。 詳細持續時間／觸發範圍以固定來源推導，仍須同版遊戲核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_stance_infinite_casting.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8)

圖片僅供技能辨識，不作機制證據。

