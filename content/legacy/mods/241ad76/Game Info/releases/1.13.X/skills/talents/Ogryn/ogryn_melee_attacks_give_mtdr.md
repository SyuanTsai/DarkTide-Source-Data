# 專注鬥士(Focused Fighter)：原始碼依據

[English](en/ogryn_melee_attacks_give_mtdr.md)

[返回玩家說明](README.md#ogryn_melee_attacks_give_mtdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_melee_attacks_give_mtdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_melee_attacks_give_mtdr`；名稱鍵：`loc_talent_ogryn_melee_attacks_give_mtdr_name`；描述鍵：`loc_talent_ogryn_melee_attacks_give_mtdr_desc`。
- 節點：`node_bbd8f036-4fd4-4438-bc14-bb08632c7b09`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish num_hit_units>0加1；child max5，melee_damage_taken_multiplier=.96（multiplicative）無duration。
- 移除事件on_damage_taken只有on_melee_hit，未檢查attacked_unit==self；Damage.lua對全隊valid_player_units派發，因此固定實作中隊友受到近戰傷害也會清除。未進行遊戲內驗證。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2746–2785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2746-L2785)
- [scripts/settings/talent/talent_settings_ogryn.lua：49–52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L49-L52)
- [scripts/settings/buff/buff_settings.lua：872–885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L872-L885)
- [scripts/utilities/attack/damage.lua：154–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua：202–229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1956–1978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1956-L1978)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1621–1647](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1621-L1647)

## 算例條件與待確認事項

- **減傷算例**：每層乘上 0.96，5 層時為 100 × 0.96⁵ ≈ 81.54 點，合計約減少 18.46%，不是直接減少 20%。
- 公開實作的全隊清除條件與原文的一般受傷說法有落差；兩來源版本對應為1.13.1，不列繁中誤譯。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ced0743`。
- 同源中英都描述受到近戰傷害後清層；固定公開實作使用全隊傷害事件且沒有本人篩選，隊友受傷亦會清除。兩來源版本對應為1.13.1，不列繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_attacks_give_mtdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca)

圖片僅供技能辨識，不作機制證據。

