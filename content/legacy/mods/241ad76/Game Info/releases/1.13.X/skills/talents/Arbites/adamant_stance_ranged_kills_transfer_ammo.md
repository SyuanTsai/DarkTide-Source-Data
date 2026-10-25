# 蒙福軍武(Blessed Armament)：原始碼依據

[English](en/adamant_stance_ranged_kills_transfer_ammo.md)

[返回玩家說明](README.md#adamant_stance_ranged_kills_transfer_ammo)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stance_ranged_kills_transfer_ammo)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stance_ranged_kills_transfer_ammo`；名稱鍵：`loc_talent_adamant_stance_ranged_kills_transfer_ammo`；描述鍵：`loc_talent_adamant_stance_ranged_kills_transfer_ammo_no_cd_desc`。
- 節點：`node_c7200201-5541-4b79-bb97-f866d4859bd7`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 姿態增益啟動時檢查是否選取此升級，並只在遠程擊殺成立時進入補彈流程。
- 需求量為彈匣容量×10%後無條件進位，再以彈匣缺彈數取較小值，從備用彈藥移入彈匣並重設換彈狀態。
- 設定檔留有 1.5 秒間隔數值，但目前消費流程以兩次觸發的遊戲時間戳是否不同作判斷；需再核對該數值是否是舊設或未使用欄位。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：320–342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L320-L342)
- [scripts/settings/talent/talent_settings_adamant.lua：35–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：735–784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L735-L784)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：320–342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L320-L342)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1157–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1157-L1179)

## 算例條件與待確認事項

- 彈匣容量 30 發時 10%×30=3 發；若只缺 1 發，實際轉入 1 發，且仍受備用彈藥量限制。
- 升級只在姿態內觸發；補彈量受目前空缺與備用彈藥量限制。
- 描述寫「每次攻擊僅能觸發一次」；程式目前以不同遊戲時間戳節流，另有 1.5 秒設定值未被此流程讀取，實際觸發間隔待遊戲內確認。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`263d1e30`。
- 繁中「遠程擊殺」「彈匣上限的…彈藥（無條件進位至整數）」對應英文「ranged kills」「total Ammo in your Clip…rounded up」；兩文都寫明每次攻擊僅觸發一次。實作的時間戳節流與設定檔間隔欄位需核對同版行為。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_ranged_kills_transfer_ammo.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25)

圖片僅供技能辨識，不作機制證據。

