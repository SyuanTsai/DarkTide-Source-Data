# 猛攻(Onslaught)：原始碼依據

[English](en/veteran_continous_hits_apply_rending.md)

[返回玩家說明](README.md#veteran_continous_hits_apply_rending)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_continous_hits_apply_rending`；名稱鍵：`loc_talent_veteran_continous_hits_apply_rending`；描述鍵：`loc_talent_veteran_continous_hits_apply_rending_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L546-L575)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1136-L1179)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦引用 server proc buff；on_shoot／on_sweep_start 重新開放該次攻擊的首次命中處理，對新目標的首次命中只設定 current_unit，不加撕裂；後續該目標命中才加 rending_debuff。共用 debuff 每層 .025、max=16、duration=5、refresh_duration_on_stack；16 層對應 +40% stat 值，實際護甲傷害另受傷害公式／上限影響。[天賦引用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1136-L1179) → [同一目標連續命中處理](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2518-L2566) → [每層撕裂值與上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)。

此增益附著在被攻擊者，進target_stat_buffs的撕裂合併，因此按詞表以「脆弱」表達隊伍可共享的減益。每次新增不獨立倒數5秒，而是所有層共用重新計時；持續傷害is_buff_damage被排除，射空僅重開new_shot，不清除current_unit。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1136–1179 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1136-L1179)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2518–2566 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2518-L2566)
- [scripts/settings/buff/weapon_buff_templates.lua，第 366–376 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua，第 629–660 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua，第 69–87 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L87)
- [scripts/settings/damage/armor_settings.lua，第 8–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/extension_systems/buff/buffs/buff.lua，第 29–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–457 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)

## 百分比與實際傷害增幅

- **程式推導**：目標端brittleness與攻擊者撕裂共同參與護甲倍率修正。玩家例固定非暴擊、非弱點、super_armor、護甲前傷害100、ADM=.5、無其他撕裂或後續倍率：四層.10使下一擊50→60（20%）；十六層.40使下一擊50→90（80%）。
- 這不是把當次附加層數追溯加到造成該層的傷害上；例子明定為層數已存在後的下一擊。隊友使用不同武器或攻擊相同敵人的不同護甲部位，實際增幅不一定相同。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2518–2566 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2518-L2566)
- [scripts/settings/buff/weapon_buff_templates.lua，第 366–376 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua，第 629–660 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua，第 69–95 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 實際增傷不會對所有敵人等比例增加；撕裂 stat 參與護甲傷害計算，且受目標與其他修正影響。
- talent ID 本身拼作 continous；保留該固定 ID。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_continous_hits_apply_rending.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396)

圖片僅供技能辨識，不作機制證據。

