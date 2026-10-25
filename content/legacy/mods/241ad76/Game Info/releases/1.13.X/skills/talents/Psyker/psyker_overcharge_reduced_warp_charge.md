# 現實錨點(Reality Anchor)：原始碼依據

[English](en/psyker_overcharge_reduced_warp_charge.md)

[返回玩家說明](README.md#psyker_overcharge_reduced_warp_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_overcharge_reduced_warp_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_overcharge_reduced_warp_charge`；名稱鍵：`loc_ability_psyker_overcharge_reduced_warp_charge`；描述鍵：`loc_ability_psyker_overcharge_reduced_warp_charge_vent_speed_description`。
- 節點：`node_79ffb5f6-b82f-47c0-8eeb-5e28dcb2766a`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 被動模板在 psyker_overcharge 關鍵字有效時啟用兩個欄位：warp_charge_amount=0.8，反噬生成量乘0.8；vent_warp_charge_speed=0.7。WarpCharge.start_venting 與 update_venting 將此0.7乘到 vent_interval 及 vent_duration，因此相應時間值縮短30%。若固定要移除相同反噬量、忽略平息級距、取消和其它修正，時間0.7倍等效於每秒平息速率1/0.7≈1.429倍（約快42.9%）；遊戲文字的+30%欄位是基於係數縮短時間表述，不能直接當每秒速率+30%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：489–520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L489-L520)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1200–1217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1200-L1217)
- [scripts/utilities/warp_charge.lua：251–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L251-L275)
- [scripts/utilities/warp_charge.lua：277–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L277-L315)
- [scripts/settings/talent/talent_settings_psyker.lua：331–332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L331-L332)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：489–520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L489-L520)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：801–826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L801-L826)

## 算例條件與待確認事項

- 占卜者注視啟動；某次平息原本需10秒，沒有其它修正且忽略離散tick/取消。 10秒×0.7=7秒；相同反噬減少量的平均每秒速率倍率為10/7≈1.429。 平息時間約縮短3秒；等效每秒速率約增加42.9%。
- 某次亞空間攻擊原本增加10個反噬百分點，注視啟動且沒有其它修正。 10×0.8=8個百分點。 生成量減少2個百分點，即比原值低20%。
- 平息時間算例忽略反噬減少的離散級距、動作中斷、武器個別修正和其它速度效果；具體實戰時間仍會變動。
- 兩項條件只在占卜者的注視關鍵狀態啟用，不包含離場後10秒傷害增益。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`93f0b5f7`。
- 「降低已生成的反噬」把生成量減少寫成扣除現有反噬；同源英文與實作指注視期間新產生的反噬變少。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_reduced_warp_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f)

圖片僅供技能辨識，不作機制證據。

