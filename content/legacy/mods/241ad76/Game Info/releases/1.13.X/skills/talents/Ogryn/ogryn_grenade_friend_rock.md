# 投石問路(Big Friendly Rock)：原始碼依據

[English](en/ogryn_grenade_friend_rock.md)

[返回玩家說明](README.md#ogryn_grenade_friend_rock)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_grenade_friend_rock)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_grenade_friend_rock`；名稱鍵：`loc_ability_ogryn_friend_rock`；描述鍵：`loc_ability_ogryn_friend_rock_desc`。
- 節點：`node_e90b57a5-4f0f-461d-bc9c-c373fcd55243`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力設定為 45 秒週期、最多 4 顆、每顆消耗 45 資源且資源每秒恢復 1 點。
- 岩石投射物碰撞後刪除，直接使用友善岩石命中傷害設定；投射物沒有爆炸設定。攻擊分配為 1200；標準威力 500 對應基本輸出倍率 1，甲殼護甲近距離攻擊倍率為 0.25。
- 直接命中為一般遠程攻擊，會按傷害設定的距離範圍與護甲修正結算；算例只列近距離、無甲與甲殼兩種情況。
- 補充效果在投射物結束時檢查；命中敵人但沒有命中弱點時拒絕觸發，命中弱點或沒有命中敵人時恢復 1 次能力充能。冷卻為 5 秒，能力充能仍受 4 顆上限約束。
- 命中傷害設定含特殊敵人即死旗標與明列的敵人種類覆寫；這些條件不應改寫成所有敵人都固定承受 1200 點傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：210–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L210-L254)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：164–177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L164-L177)
- [scripts/settings/projectile/player_projectile_templates.lua：499–514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L499-L514)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua：464–539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L464-L539)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：537–563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L537-L563)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2630–2679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2630-L2679)
- [scripts/settings/talent/talent_settings_ogryn.lua：182–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L182-L184)
- [scripts/utilities/attack/attack.lua：249–268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L249-L268)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua：544–564](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L544-L564)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：210–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L210-L254)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1445–1472](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1445-L1472)

## 算例條件與待確認事項

- **直接命中算例**：按標準威力 500、一般近距離命中且沒有其他修正計算，無甲目標為 1200 × 1 = 1200 點；甲殼護甲為 1200 × 0.25 = 300 點。
- **特殊敵人**：岩石可直接擊殺專家敵人，並對特定敵人另有必殺設定；這些情況不以一般傷害算例決定是否擊殺。
- 180 秒依能力資源設定推導；其他充能修正可能改變時間。
- 對不屈目標的完整傷害仍依距離與傷害設定的護甲插值處理；本稿沒有把描述文字轉成未經逐條驗證的固定傷害倍率。
- 特殊敵人的即死旗標和覆寫清單會影響個別命中，不能一律套用 1200 點算例。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`45cf696a`。
- 同 hash 45cf696a 的繁中與英文都描述單一目標投擲、對甲殼與不屈敵人效果較弱、每 45 秒取得一顆且最多持有 4 顆；能力設定直接確認 45 秒與 4 顆上限，投射物則使用直接命中傷害。未列出傷害公式屬省略，不據此判為翻譯錯誤。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical/ogryn_grenade_friend_rock.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776)

圖片僅供技能辨識，不作機制證據。

