# 凋零烈焰(Withering Fire)：原始碼依據

[English](en/veteran_increased_ranged_cleave.md)

[返回玩家說明](README.md#veteran_increased_ranged_cleave)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_ranged_cleave`；名稱鍵：`loc_talent_veteran_increased_ranged_cleave`；描述鍵：`loc_talent_veteran_increased_ranged_cleave_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L804-L831)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3136-L3151)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

talent_settings.cleave=.5，buff 將 .5 加至以 1 為基底的 ranged_max_hit_mass_attack_modifier，因此遠程攻擊 modifier=1.5。damage_profile.max_hit_mass 對遠程 attack mass 使用該 modifier；示例假設原預算6，6×1.5=9。[天賦與 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3136-L3151) → [設定值與套用欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L61-L63) → [ranged hit-mass 計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80)；stat 類型以 additive multiplier 為基底。[stat 型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L951-L957)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 3136–3151 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3136-L3151)
- [scripts/settings/talent/talent_settings_veteran.lua，第 61–63 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L61-L63)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3522–3528 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3522-L3528)
- [scripts/utilities/attack/damage_profile.lua，第 36–80 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80)
- [scripts/settings/buff/buff_settings.lua，第 951–957 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L951-L957)
- [scripts/settings/buff/buff_settings.lua，第 1048–1058 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 6→9 是用假設基礎 hit-mass budget 展示倍率的算例；固定版本沒有所有武器共用的 6 點基礎值。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_ranged_cleave.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7)

圖片僅供技能辨識，不作機制證據。

