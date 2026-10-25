# 遊擊者(Skirmisher)：原始碼依據

[English](en/veteran_increase_damage_after_sprinting.md)

[返回玩家說明](README.md#veteran_increase_damage_after_sprinting)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increase_damage_after_sprinting`；名稱鍵：`loc_talent_veteran_damage_damage_after_sprinting`；描述鍵：`loc_talent_veteran_damage_damage_after_sprinting_or_sliding_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L212-L241)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L943-L986)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

buff 每累積約 1 秒的 sprinting 或 sliding time 便加一層內部 damage buff；每層 damage = 0.0625，max stacks=4，duration=10，refresh on stack。以加算 damage multiplier 計算，四層為 1 + 4×.0625 = 1.25。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L943-L986) → [累積衝刺／滑行時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L744-L780) → [層數與傷害值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814)。

非衝刺／滑行時累積器被設為 0.5，因此通常重新開始後約半秒即可取得第一層；初始化累積器為0。所有層共用重新計時，沒有逐層獨立10秒倒數。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 943–986 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L943-L986)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 744–780 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L744-L780)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 799–814 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814)
- [scripts/settings/buff/buff_settings.lua，第 763–763 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/extension_systems/buff/buffs/buff.lua，第 29–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–457 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 635–670 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L670)
- [scripts/utilities/attack/damage_calculation.lua，第 232–242 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 首次疊層時間受 buff 計時起點影響；主文以持續動作時約每秒一層描述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increase_damage_after_sprinting.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234)

圖片僅供技能辨識，不作機制證據。

