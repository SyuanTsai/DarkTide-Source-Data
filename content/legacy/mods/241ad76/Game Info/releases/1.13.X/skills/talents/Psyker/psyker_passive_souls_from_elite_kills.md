# 亞空間虹吸(Warp Siphon)：原始碼依據

[English](en/psyker_passive_souls_from_elite_kills.md)

[返回玩家說明](README.md#psyker_passive_souls_from_elite_kills)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_passive_souls_from_elite_kills)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_passive_souls_from_elite_kills`；名稱鍵：`loc_talent_psyker_souls`；描述鍵：`loc_talent_psyker_souls_new_desc`。
- 節點：`node_25c8ee81-d16b-4d5b-b0fa-fc1e7b40c26f`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 擊殺處理器只檢查 params.tags.elite 或 params.tags.special；通過時加入 1 層。若其他天賦啟用 psyker_increased_soul_generation，來源改為每次加入 2 層。
- 基礎靈魂堆疊上限為 4、持續 25 秒；亞空間電池分支將堆疊上限提高到 6。堆疊事件重設持續時間；堆疊到上限時仍重設倒數。到期移除一層後會重新開始剩餘堆疊的倒數，因此不是所有層在同一刻全數消失。
- 傷害 buff 以 current_resource / max_resource 做線性插值；max_resource 在初始化時固定為 max_souls_talent=6。設定最大傷害為 0.24，所以每層是 0.24 / 6 = 0.04（4 個百分點）。
- 戰鬥技能事件讀取當下靈魂數 N，恢復 0.075 × N 的單次能力充能資源；完成能力事件後移除全部靈魂。這是資源比例，不是固定秒數。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：410–460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L410-L460)
- [scripts/settings/talent/talent_settings_psyker.lua：180–186](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L180-L186)
- [scripts/settings/talent/talent_settings_psyker.lua：241–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L255)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：115–121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L115-L121)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：141–160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L141-L160)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：189–215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L189-L215)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：217–228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L217-L228)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：297–361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L297-L361)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1528–1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1528-L1548)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua：635–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：410–460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L410-L460)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1235–1265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1235-L1265)

## 算例條件與待確認事項

- **傷害算例**：每層增加 4% 傷害。不計其他加成，4 層時 100 × (1 + 4% × 4) = 116 點；搭配亞空間電池達 6 層時則為 124 點。
- **冷卻算例**：施放戰鬥技能會消耗全部充能，每層恢復該能力一次使用所需冷卻的 7.5%。以 30 秒冷卻、4 層計算，立即縮短 30 × 7.5% × 4 = 9 秒，剩約 21 秒。
- 「每層 +4%」是一般傷害加成；實際傷害仍受武器、目標護甲、攻擊類型與其他加成影響。
- 冷卻秒數換算假設該技能每格充能冷卻時間固定為指定值；程式實際恢復單次充能的能力資源比例。
- 每次擊殺增加 2 層是其他天賦效果，不屬於本鑰石的基礎觸發。
- 來源 SHA 與本機 Build 25606770 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9ea525d4`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_passive_souls_from_elite_kills.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e)

圖片僅供技能辨識，不作機制證據。

