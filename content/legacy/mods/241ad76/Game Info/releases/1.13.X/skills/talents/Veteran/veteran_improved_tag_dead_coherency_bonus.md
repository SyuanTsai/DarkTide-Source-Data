# 轉移火力！(Redirect Fire!)：原始碼依據

[English](en/veteran_improved_tag_dead_coherency_bonus.md)

[返回玩家說明](README.md#veteran_improved_tag_dead_coherency_bonus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_improved_tag_dead_coherency_bonus`；名稱鍵：`loc_talent_veteran_improved_tag_dead_coherency_bonus`；描述鍵：`loc_talent_veteran_improved_tag_dead_coherency_bonus_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1970-L1992)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3041-L3074)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 發放、疊層與合併

- tag 死亡事件依 stacks_applied，對每名 in_coherence_units 成員加入對應數量的 allied_buff；CoherencySystem 的集合包含 owner，所以本人也能受益。
- 基礎 template duration=10、max_stacks=4、refresh_duration_on_stack=true、damage=.025。另選集中火力改用 max_stacks=6 的複製模板，單層值仍為 .025。
- 既有同名 buff 會增加層數並 set_start_time(t)，stat_buff_stacking_count 把有效層數限制於 max_stacks。再次擊倒標記目標是累加至上限，不是以新目標的較少層數覆蓋舊效果。
- damage 是 additive_multiplier，N 層增加 .025N，與同階段一般、近戰／遠程等增傷相加。100×(1+.25+.025×4)=135；不能把原有125再乘1.10。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 3041–3074 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3041-L3074)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3311–3321 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3311-L3321)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3487–3504 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3487-L3504)
- [scripts/settings/buff/buff_settings.lua，第 763–763 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua，第 200–205 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L205)
- [scripts/extension_systems/coherency/coherency_system.lua，第 188–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255)
- [scripts/extension_systems/buff/buffs/buff.lua，第 404–410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/extension_systems/buff/buffs/buff.lua，第 689–747 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–457 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)
- [scripts/utilities/attack/damage_calculation.lua，第 232–242 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_improved_tag_dead_coherency_bonus_description`；hash：`df1f9c55`；繁中entry_index：`14467`；英文entry_index：`14468`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「減傷{damage:%s}」；同版英文對照片段：`grant {damage:%s} Damage`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。效果方向錯譯：同版英文為grant Damage，實作寫入damage=.025；不是damage_taken或toughness_damage_taken。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第3487–3504行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3487-L3504)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_dead_coherency_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5)

圖片僅供技能辨識，不作機制證據。

