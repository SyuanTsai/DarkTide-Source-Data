# 聚能爆發：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and RAW formatter | [Own tiers and RAW formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L390-L441) |
| Own wrapper | [Own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L159) |
| Plasmagun category import | [Plasmagun category import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| Plasmagun trait registration | [Plasmagun trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| Plasmagun template inputs | [Plasmagun template inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L31-L94) |
| Plasmagun action hierarchy | [Plasmagun action hierarchy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L133-L182) |
| Primary direct charge | [Primary direct charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L239-L317) |
| Primary ordinary shot | [Primary ordinary shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L384) |
| Alternate/braced shot | [Alternate/braced shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L385-L447) |
| Alternate/braced charge | [Alternate/braced charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L448-L534) |
| Vent action | [Vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L535-L579) |
| Overheat vent override | [Overheat vent override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L581-L630) |
| Reload and overload action | [Reload and overload action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L632-L679) |
| Overload config | [Overload config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L869-L875) |
| Charge template | [Charge template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L34-L78) |
| Immediate shot handling | [Immediate shot handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L271-L280) |
| ActionCharge implementation | [ActionCharge implementation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L26-L88) |
| ChargeActionModule | [ChargeActionModule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L16-L74) |
| ChargeActionModule full charge | [ChargeActionModule full charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L90-L128) |
| ActionHandler chain window | [ActionHandler chain window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L865-L894) |
| Weapon extension initial charge | [Weapon extension initial charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L267-L272) |
| ActionShoot start/critical | [ActionShoot start/critical](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L100-L174) |
| ActionShoot fire configuration | [ActionShoot fire configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L244-L304) |
| ActionShoot charge capture/reset | [ActionShoot charge capture/reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L375-L425) |
| Ranged attack critical caller | [Ranged attack critical caller](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| Critical chance and conversion | [Critical chance and conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L39) |
| Stacking charge trait base | [Stacking charge trait base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2391-L2415) |
| Buff cache rebuild | [Buff cache rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Buff extension stat getter | [Buff extension stat getter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| Stepped stat calculation | [Stepped stat calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51) |
| Stepped stat effective values | [Stepped stat effective values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79) |
| Effective stack count | [Effective stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| Conditional stat override | [Conditional stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Hitscan shot result | [Hitscan shot result](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L220) |
| Overload explosion critical flag | [Overload explosion critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L103-L118) |
| Chance-to-damage conversion stat | [Chance-to-damage conversion stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L253-L262) |
| Percentage formatter | [Percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| Trait override formatter lookup | [Trait override formatter lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Description formatter caller | [Description formatter caller](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L111) |
| Number precision | [Number precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| Critical pool exact receipt range | [Critical pool exact receipt range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| ActionShoot critical-before-fire exact receipt range | [ActionShoot critical-before-fire exact receipt range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L173) |
| ActionShoot charge-capture exact receipt range | [ActionShoot charge-capture exact receipt range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L388-L399) |
| Mk II ordinary-fire exact receipt range | [Mk II ordinary-fire exact receipt range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L336) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

實際 I–IV trait 將 `conditional_stat_buffs.critical_strike_chance` 設為 0.02／0.03／0.04／0.05；自己的 Buff wrapper 直接複製 `stacking_buff_on_charge_level`。共通模板要求持握對應武器欄位，並按當前 charge component 的 `floor(charge_level / 0.2)` 提供 0–5 階。這是一個普通 conditional stat key，不是另一張逐階 stat table；本項沒有 optional `stepped_stat_buffs` 額外表。Buff 結算時 trait 對同名 key 的階級值取代 wrapper 備用值，不會把兩份值相加。

Mk II 普通點射動作使用 hitscan/`immediate_single_shot`，並有彈藥檢查。合法未蓄力射擊的 charge_level 初始為 0；ActionShoot 在射擊開始先抽取爆擊，再準備射擊設定與更新/清除本發 charge 狀態。因此該射擊可實際發出但本祝福為 0 階，RAW 的 2／3／4／5%「最低值」構成明確差異。直接蓄力動作最大 0.525，滿蓄最多 2 階；架槍／替代蓄力可達 1.0，才可能到 5 階。中斷射擊按抽取時 cache 的充能階數，而非僅按模式名稱推定滿蓄。

爆擊機率 consumer 將角色基礎值、通用與遠程爆擊值及 weapon handling 相加、限制在 0–1，再依配置的機率轉傷害效果調整，最後以兩位小數供 PRD 抽取。這把槍的 `immediate_single_shot` handling 另加 5 個百分點；此值與本祝福分開。機率轉傷害是另外一個可配置條件，不能把本祝福寫成整次傷害增幅。過熱爆炸 action 明確傳入 `is_critical_strike=false`；換氣／裝填也不執行射擊爆擊抽取。

令 t 為所選階級每一充能階的機率增量（I–IV 為 0.02／0.03／0.04／0.05），c 為爆擊判定時 cache 所反映的 normalized charge_level；n=clamp(floor(c/0.2),0,5)。本祝福加入機率池的增量為 n×t（0–1 的機率單位），換算成百分點為 100×n×t。射擊理論輸入為 clamp(base + 通用 + 遠程 + weapon handling + n×t, 0, 1)；其後另有可配置的 chance-to-damage conversion 與 PRD。不能將 n×t 稱為傷害百分比、保證爆擊結果或最終機率（未列出其他加成時亦需說明假設）。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_158`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_158.png)｜[Issue附件](https://github.com/user-attachments/assets/4a53a4b2-051a-4e71-8098-1e15c55f0db8)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L390-L444) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L159-L161) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
