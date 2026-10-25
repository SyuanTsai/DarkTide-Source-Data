# 蓄力打擊(Charged Strike)：原始碼依據

[English](en/psyker_chain_lightning_heavy_attacks.md)

[返回玩家說明](README.md#psyker_chain_lightning_heavy_attacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_chain_lightning_heavy_attacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_chain_lightning_heavy_attacks`；名稱鍵：`loc_talent_psyker_chain_lightning_heavy_attacks`；描述鍵：`loc_talent_psyker_chain_lightning_damage_heavy_attacks_desc`。
- 節點：`node_d958faa6-e3ea-4c79-bc84-3477063b09f7`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定原始碼 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。此天賦掛載命中觸發效果，並以 CheckProcFunctions.on_heavy_hit 篩選重擊。觸發後，命中目標被加上 psyker_heavy_swings_shock；若同時擁有衰弱詛咒，則改用 psyker_heavy_swings_shock_improved。兩者由短暫電擊效果模板複製而來，duration=2，max_stacks=1，並以 psyker_heavy_swings_shock 傷害設定造成電擊期間的持續傷害。此天賦本身不提供固定的近戰傷害加成。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1949–1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1949-L1971)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2519–2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2519-L2529)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3518–3537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3518-L3537)
- [scripts/settings/buff/weapon_buff_templates.lua：1088–1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1132)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2519–2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2519-L2529)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1949–1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1949-L1971)

## 算例條件與待確認事項

- **搭配衰弱詛咒**：這 2 秒電擊也會使目標受到的傷害增加 10%。只比較該承傷倍率，原本 100 點傷害變成 100 × 1.1 = 110 點。
- 若同時選取衰弱詛咒，目標會改用強化電擊版本並承受該天賦的全來源增傷；未選取時只有電擊與持續傷害。
- 目標電擊效果的最大疊層為 1；傷害量仍依目標、攻擊狀態與傷害設定變動，原始碼片段未給可套用所有敵人的固定數值。
- 文字與程式來源皆為1.13.1；實際表現待遊戲內核對；未做遊戲內測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e84d2a21`。
- 本地繁中說明列出近戰重擊電擊並造成傷害，與固定原始碼的重擊命中觸發及兩秒持續傷害效果相符。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_chain_lightning_heavy_attacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e)

圖片僅供技能辨識，不作機制證據。

