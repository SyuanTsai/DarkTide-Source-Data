# 麻木(Feel No Pain)：原始碼依據

[English](en/ogryn_carapace_armor.md)

[返回玩家說明](README.md#ogryn_carapace_armor)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_carapace_armor`；名稱鍵：`loc_talent_ogryn_carapace_armor`；描述鍵：`loc_talent_ogryn_carapace_armor_any_damage_desc`。
- 節點：`node_916ca2ec-b1d0-41c4-807b-a250950f9d5b`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 子 buff 每層給 `toughness_replenish_modifier=0.03` 與 `toughness_damage_taken_multiplier=0.97`；「最堅韌！」以條件 stat buff 每層再給 0.025 韌性恢復修正。
- 父 buff 以 `start_at_max=true` 啟動。每次合格受擊只移除 1 個子 buff，`internal_cd_t=t+1`；恢復條件要求距離最近移除至少 2 秒，且距上次新增也超過 2 秒。倒地時父 buff 會將子層降至 1 個。
- 子 buff 使用 `stack_offset=-1`：內部可有 11 個子 buff，但玩家顯示及 stat 疊層是 10 層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1618–1676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1618-L1676)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：600–624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L600-L624)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：626–719](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L626-L719)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：25–47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L25-L47)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：63–139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L63-L139)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：144–191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L144-L191)
- [scripts/extension_systems/buff/buffs/buff.lua：397–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429)
- [scripts/settings/buff/buff_settings.lua：1000–1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1012)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：218–250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L218-L250)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1618–1676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1618-L1676)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：625–655](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L625-L655)

## 算例條件與待確認事項

- **滿層算例**：10 層時，韌性恢復倍率為 1 + 10 × 3% = 1.30；搭配「最堅韌！」為 1.55。韌性傷害為 0.97^10 ≈ 0.737；原本 100 點韌性傷害約變成 73.7 點。 原本恢復 20 點時，滿層為 20 × 1.3 = 26 點；搭配最堅韌！則為 31 點，仍受缺額限制。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 倒地會把麻木子層降到 1 個；恢復節奏重新計時，之後每次只補 1 層。韌性減傷只改動 toughness damage multiplier。
- 本機繁中與英文都泛稱「減傷／Damage Reduction」；固定公開來源只降低韌性傷害；文字與實際行為的差異待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cae1c616`。
- 繁中寫「每層獲得…韌性恢復和…減傷」，英文寫「Each Stack grants … Toughness Replenishment and … Damage Reduction」；兩種文字都使用未指明傷害種類的減傷措辭。固定公開來源只降低韌性所受傷害，不降低生命值所受傷害；文字與程式來源皆為1.13.1；這項範圍差異待遊戲內核對，不單憑此判定翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone/ogryn_carapace_armor.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1)

圖片僅供技能辨識，不作機制證據。

