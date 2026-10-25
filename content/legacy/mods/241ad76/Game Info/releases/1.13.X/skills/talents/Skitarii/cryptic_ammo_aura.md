# 彈藥存放(Ammunition Deposit)：原始碼依據

[English](en/cryptic_ammo_aura.md)

[返回玩家說明](README.md#cryptic_ammo_aura)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ammo_aura)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ammo_aura`；名稱鍵：`loc_talent_cryptic_ammo_aura`；描述鍵：`loc_talent_cryptic_ammo_aura_toughness_desc`。
- 節點：`node_4d9ce721-2e3e-4c09-8fa2-345ff9c390bc`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦加入 cryptic_coherency_empty 協同標記並對施放者掛載 cryptic_ammo_aura 被動，後者提供 toughness=25。該被動的 start_func 由伺服器列舉 Managers.player:human_players()，逐一給每位有存活玩家單位的玩家 cryptic_ammo_aura_effect；沒有檢查 coherency、距離或隊伍鏈。效果模板的每一階增加 ammo_reserve_capacity=0.15，stat buff 為 additive_multiplier。PlayerUnitWeaponExtension 將總倍率乘到各武器的目前及最大儲備用彈藥藥，因此基礎倍率1加0.15後為1.15；例如101 × 1.15 = 116.15，向下取整為116發。後續加入任務的人類玩家也會由 player_spawned_func 接收效果。結束時程式移除曾給出的效果。現有本地天賦字串說「你與協同中的盟友」，但固定來源的彈藥效果分發是任務玩家範圍而非協同檢查；版本對應為1.13.1。 stepped_stat_buff 的 min_max_step_func回傳0,1，且各階表值均0.15，因此多來源仍只取單階15%，不是多名隊友各加15%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1090–1115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1090-L1115)
- [scripts/settings/talent/talent_settings_cryptic.lua：39–42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L39-L42)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：117–197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L117-L197)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：198–224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L198-L224)
- [scripts/settings/buff/buff_settings.lua：694–694](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L694-L694)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1324–1337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1324-L1337)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1408–1424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1408-L1424)
- [scripts/extension_systems/buff/buffs/stepped_stat_buff.lua：10–66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L66)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1090–1115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1090-L1115)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：63–93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L63-L93)

## 算例條件與待確認事項

- 儲備容量101發時，floor(101 × 1.15)=116發；分數發數不保留。避免用浮點乘法正好接近整數邊界的案例推斷遊戲顯示，精確顯示仍需遊戲內核對。
- 來源實作直接對所有人類玩家發放彈藥容量效果，沒有按協同距離或協同鏈排除遠處隊友。
- +25點韌性是施放者的個人被動；彈藥容量效果則在來源程式中發給任務玩家。
- 本機繁中說明所寫的協同條件與固定來源分發範圍不同；本機 Build 25606770 是否使用相同實作尚待確認，不據此判定翻譯錯誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cc394399`。
- 繁中描述列出自身韌性及自己與協同隊友的儲備用彈藥藥增加。固定原始碼確認自身獲得25點韌性，且 ammo_reserve_capacity +15% 會發給全部人類玩家而無協同判斷；Build 25606770 版本對應為1.13.1，先記錄實作範圍差異，不判為錯譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_ammo_aura.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef)

圖片僅供技能辨識，不作機制證據。

