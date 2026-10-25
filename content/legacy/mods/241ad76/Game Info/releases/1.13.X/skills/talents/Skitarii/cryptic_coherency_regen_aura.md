# 復甦（基礎光環）(Resurgence)：原始碼依據

[English](en/cryptic_coherency_regen_aura.md)

[返回基礎效果](BASE_EFFECTS.md#cryptic_coherency_regen_aura)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`cryptic_coherency_regen_aura`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎天賦 cryptic_coherency_regen_aura 掛載協同模板 cryptic_coherency_regen_aura，數值將 min_toughness_coherency_regen_rate_modifier 設為0.25。韌性擴充在戰鬥中檢查協同恢復修正，並以 max(該最小倍率減1, 0) 算出最低倍率；一般協同恢復速率乘0.25，再乘武器、站姿、其他韌性倍率等修正。仍要求有韌性缺額、恢復延遲已結束且沒有停用韌性恢復。協同系統建立 daisy-chain 時明確先加入自身單位；更新時把鏈內新增單位逐一送入 on_coherency_enter，而 UnitCoherencyExtension 會把傳入單位放入 in_coherence_units，再從該集合搜尋並啟用協同光環。因此施放者本身也在接收集合內，基礎光環會作用於自身和協同鏈內其他有效玩家。此節點的 coherency_id 與改良版相同，改良版 priority=1 高於基礎版 priority=2，兩者同時存在時每個接收者只會啟用優先級較高者。
- 本機Steam Build25606770：描述鍵 `loc_talent_cryptic_coherency_regen_aura_desc`、同源中英hash `f34842d1` 已精確配對。同鍵中英均明確包括自己與協同隊友。固定程式的25%是一般協同恢復速率倍率，仍受恢復延遲與協同條件限制；沒有把省略計算判成誤譯。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1016-L1033)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L32-L34)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L252-L269)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L888-L888)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L116-L149)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)

## 算例與待確認事項

- 靜態算例：若你或協同鏈內隊友在一般協同狀態每秒恢復10點，且其他因素不變，戰鬥中的最低速率為10×0.25=2.5點/秒；4秒最多恢復10點，韌性缺額不足時只恢復到上限。
- 25%是一般協同韌性恢復速率的最低倍率，不是每秒恢復最大韌性的25%，也不是一次恢復25點。
- 恢復仍受一般韌性恢復延遲、停用條件、武器與移動倍率、其他韌性恢復屬性及最大韌性影響。
- 基礎和改良光環使用相同 coherency_id；同一接收者同時在兩種光環鏈內時，改良版 priority=1 會取代基礎版 priority=2。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
