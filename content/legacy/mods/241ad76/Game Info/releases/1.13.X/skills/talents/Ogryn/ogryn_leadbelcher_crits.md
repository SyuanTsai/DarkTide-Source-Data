# 好槍法(Good Shootin')：原始碼依據

[English](en/ogryn_leadbelcher_crits.md)

[返回玩家說明](README.md#ogryn_leadbelcher_crits)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_crits)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_leadbelcher_crits`；名稱鍵：`loc_talent_ogryn_critical_leadbelcher`；描述鍵：`loc_talent_ogryn_critical_leadbelcher_desc`。
- 節點：`node_8e2afd01-7306-4800-a570-5691d70e939c`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent special rule `ogryn_leadbelcher_auto_crit` 在 ActionShoot 判定到 `_leadbelcher_shot` 時傳入 `_check_for_critical_strike(..., true)`；自動射擊路徑也在幸運子彈觸發後設定 auto crit。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：451–466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L451-L466)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：132–157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L132-L157)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：997–1045](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1045)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：451–466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L451-L466)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：835–858](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L835-L858)

## 算例條件與待確認事項

- **傷害算例**：假設同一武器、護甲與部位下，普通傷害 100、暴擊額外傷害 50，幸運子彈命中時為 100 + 50 = 150 點。暴擊倍率依武器而異，並非一律兩倍；沒有命中就不造成傷害。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 這個節點只處理幸運子彈射擊的暴擊結果；它不保證射擊命中。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c346583c`。
- 繁中寫「觸發幸運子彈（且命中）的射擊必定暴擊」，英文寫「The shot that triggers Lucky Bullet is a guaranteed Critical (if it Hits)」；兩者都要求該次射擊命中才形成暴擊命中。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_leadbelcher_crits.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8)

圖片僅供技能辨識，不作機制證據。

