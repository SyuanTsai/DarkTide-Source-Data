# 克魯錫安輪盤：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| base ammo-left buff | [base ammo-left buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2814-L2850) |
| active clip ammo helper | [active clip ammo helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L180-L242) |
| autogun magazine capacities | [autogun magazine capacities](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L154-L189) |
| phosphor magazine capacity | [phosphor magazine capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L427-L438) |
| stub magazine capacity | [stub magazine capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L595-L618) |
| conditional stat override | [conditional stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| stepped stat count | [stepped stat count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51) |
| stack offset | [stack offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| generic crit sum/clamp | [generic crit sum/clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| critical chance rounding before PRD | [critical chance rounding before PRD](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| 禁止或強制爆擊分支 | [禁止或強制爆擊分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L183) |
| 實際射擊後記錄時間與動作 | [實際射擊後記錄時間與動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L306-L328) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個變體格式值讀取各自 I–IV buff 的 conditional critical_strike_chance；三個 wrapper 都只複製共用基底，沒有額外覆寫。

- 共用模板以持用武器槽為條件，讀取該槽彈藥元件的目前彈匣與上限；helper 加總使用中的彈匣元件，不計備用彈。換彈中與完全打空時回傳 0；其他狀態回傳缺彈數，步數限制為 0–100。

- 基底原有 5% 遠程爆擊表會被 trait tier 提供的整張 conditional stat 表取代，不是額外疊加。因此 trait 提供通用 critical_strike_chance，也能進入槍托敲擊和近戰推擊爆擊判定。

- 通用爆擊 consumer 將通用、遠程/近戰類型爆擊與操控修正相加，再限制到0–1。磷光手槍背向爆破明確標記為非爆擊；直接射擊仍走一般爆擊流程。

- 依即時彈匣狀態計算，沒有獨立計時、累積層數或冷卻；切換到其他槽時持用條件立即失效。

- 設 `M` 為當時使用中彈匣的上限總和、`A`為目前彈數總和；不計備用彈。

- 只有持用該武器、沒有換彈且 `A>0` 時，`n=clamp(M−A,0,100)`；滿彈時 n=0，換彈或完全空匣時加成也為0。

- 加成 `b=n×r`。自動槍I–IV的r為0.0045／0.005／0.0055／0.006；兩種手槍為0.045／0.05／0.055／0.06。每份小數乘100轉成百分點。

- 機率池先將基礎、通用（含本祝福）、相應遠程或近戰、操控修正加總並限制0–1；一般分支之後按其他效果套用爆擊率轉傷害修正。

- 最終一般機率在偽隨機判定前四捨五入到兩位小數，強制／禁止爆擊及連射沿用狀態按各攻擊規則處理。逐發原始增量不等於每次擲骰門檻都有同樣小數變化。

- trait整張conditional stat表取代預設遠程5%，不再額外加該5%；磷光背向爆破呼叫固定is_critical_strike=false，不使用增加後的機率池。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_114`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_114.png)｜[Issue附件](https://github.com/user-attachments/assets/590356c8-aa5c-40dc-8cf5-ee127c7925ab)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 機動自動槍等級覆寫 | [機動自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L10-L49) |
| 機動自動槍Buff接入 | [機動自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L8) |
| UI 機動自動槍 | [UI 機動自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L694) |
| 機動自動槍 哥倫努 Mk III匯入 | [機動自動槍 哥倫努 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L17) |
| 機動自動槍 哥倫努 Mk III接入 | [機動自動槍 哥倫努 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L1031-L1033) |
| 機動自動槍 格拉亞 Mk VII匯入 | [機動自動槍 格拉亞 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L17) |
| 機動自動槍 格拉亞 Mk VII接入 | [機動自動槍 格拉亞 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L1094-L1096) |
| 機動自動槍 阿格里皮娜 Mk IX匯入 | [機動自動槍 阿格里皮娜 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L17) |
| 機動自動槍 阿格里皮娜 Mk IX接入 | [機動自動槍 阿格里皮娜 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L1039-L1041) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L10-L49) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L16) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
| 快拔左輪手槍等級覆寫 | [快拔左輪手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L248-L287) |
| 快拔左輪手槍Buff接入 | [快拔左輪手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L22) |
| UI 快拔左輪手槍 | [UI 快拔左輪手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1216) |
| 快拔左輪手槍 紮羅娜 Mk IIa匯入 | [快拔左輪手槍 紮羅娜 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L16) |
| 快拔左輪手槍 紮羅娜 Mk IIa接入 | [快拔左輪手槍 紮羅娜 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L982-L984) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV匯入 | [快拔左輪手槍 阿格里皮娜 Mk XIV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L15) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV接入 | [快拔左輪手槍 阿格里皮娜 Mk XIV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L885-L887) |
