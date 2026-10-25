# 投彈完畢！(Bombs Away!)：原始碼依據

[English](en/ogryn_box_explodes.md)

[返回玩家說明](README.md#ogryn_box_explodes)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_box_explodes)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_box_explodes`；名稱鍵：`loc_talent_bonebreaker_grenade_super_armor_explosion`；描述鍵：`loc_talent_bonebreaker_grenade_super_armor_explosion_desc`。
- 節點：`node_3e19fd5d-9d22-4e5c-8981-be97b1de8854`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 手雷箱天賦指向集束手雷能力；能力設定上限為 3 次充能並只消耗充能。
- 箱體碰撞採用集束手雷箱體傷害設定，其父設定的攻擊分配為 1850；標準威力 500 對應輸出倍率 1，近距離甲殼護甲倍率為 0.15，故直接碰撞算例為 277.5。
- 命中生成的集束手雷基數為 6，並讀取 +3 修改器；每顆引信覆寫值為 0.8 + 0.4×序號至 0.8 + 0.8×序號秒，因此第 1 顆是 1.2–1.6 秒，第 6 顆是 3.2–5.6 秒，第 9 顆是 4.4–8.0 秒。
- 一般散出手雷使用半徑 8 公尺、近距離 2 公尺的爆炸設定；「驚喜箱」關鍵字生效時，集束生成程式可改用清單中的穿甲、火焰、破片、煙霧或電擊投射物。
- 一般cluster close profile attack10，unarmored1/superarmor.2；箱體1850與子手雷10分開。生成迴圈一次建立所有子投射物，序號只改引信，不是依序延遲生成。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1174–1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1174-L1198)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：152–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L152-L163)
- [scripts/settings/projectile/player_projectile_templates.lua：973–1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L973-L1028)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：736–803](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L736-L803)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua：103–203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L103-L203)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：464–510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L464-L510)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：336–348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L336-L348)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1174–1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1174-L1198)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：330–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L330-L357)

## 算例條件與待確認事項

- **直接命中算例**：按標準威力 500、近距離、沒有其他修正計算，手雷箱直接撞擊甲殼護甲的傷害為 1850 × 0.15 = 277.5 點；這只計箱子碰撞，不含散出手雷的爆炸。
- **子手雷算例**：一般子手雷爆炸半徑 8 公尺、中心 2 公尺；不計其他修正，中心對無甲目標每顆造成 10 × 1 = 10 點，甲殼為 10 × 0.2 = 2 點。6 顆全部在中心命中同一無甲目標時為 60 點，並不把箱體的 1850 點傷害複製到每顆手雷。
- 直接命中算例只計箱體碰撞，未計爆炸手雷；總傷害會受散布、各自爆炸距離、護甲、命中部位與目標狀態影響。
- 引信時間是來源設定與生成程式的靜態推導；伺服器更新時序及特殊投射物類型會影響遊戲中的實際呈現。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a06fe566`。
- 同 hash a06fe566 的中英文都描述手雷箱擊中敵人後破開、在目標周圍散出手雷，且是基礎手雷箱的強化版；程式將基礎數量設為 6，數量修改器另加 3。傷害與引信數值是來源補充，不是原文逐字列出的內容。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical/ogryn_box_explodes.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf)

圖片僅供技能辨識，不作機制證據。

