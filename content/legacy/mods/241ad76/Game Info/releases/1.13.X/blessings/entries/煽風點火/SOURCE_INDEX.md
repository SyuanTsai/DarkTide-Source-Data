# 煽風點火：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and localized-value formatter | [Own tiers and localized-value formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L182-L239) |
| Custom action and held-slot wrapper | [Custom action and held-slot wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L26-L50) |
| Held-slot predicate | [Held-slot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Target burning keyword predicate | [Target burning keyword predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L88-L92) |
| Stagger receives attacker stats and target burning | [Stagger receives attacker stats and target burning](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger.lua#L58-L69) |
| Stagger reduction and threshold result | [Stagger reduction and threshold result](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L15-L38) |
| Impact power mapping and count scaling | [Impact power mapping and count scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L92) |
| Native stagger-reduction branches | [Native stagger-reduction branches](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L95-L123) |
| Impact and burning modifier gates | [Impact and burning modifier gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L212) |
| Stat aggregation types | [Stat aggregation types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L945-L982) |
| Actual unbraced and braced fire actions | [Actual unbraced and braced fire actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L221-L365) |
| Actual special push action | [Actual special push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L445-L504) |
| Sustained flamer gas action type and ordering | [Sustained flamer gas action type and ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L100-L113) |
| Burst flamer action type and dispatcher | [Burst flamer action type and dispatcher](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L73-L83) |
| Burst direct hit then burn application | [Burst direct hit then burn application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L260-L329) |
| Flamer direct attack uses ranged damage path | [Flamer direct attack uses ranged damage path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/flamer_action.lua#L14-L58) |
| Burning interval buff attack type | [Burning interval buff attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78) |
| Burning interval damage profile impact | [Burning interval damage profile impact](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L318) |
| Percentage formatter value manipulation | [Percentage formatter value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20) |
| Percentage number formatting | [Percentage number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L203) |
| Trait import | [Trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| Trait list append | [Trait list append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 燃燒tick持有者與攻擊類型 | [燃燒tick持有者與攻擊類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78) |
| Server攻擊接入命中反應 | [Server攻擊接入命中反應](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L380) |
| 小怪命中反應分派 | [小怪命中反應分派](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_reaction.lua#L29-L35) |
| 可踉蹌門檻後接入計算 | [可踉蹌門檻後接入計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_reaction.lua#L113-L119) |
| 當下攻擊者數值與燃燒判定 | [當下攻擊者數值與燃燒判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger.lua#L58-L69) |
| 同鍵條件數值階級覆寫 | [同鍵條件數值階級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 這是本體武器範本 `weapon_trait_bespoke_flamer_p1_negate_stagger_reduction_with_primary_on_burning` 自己定義的四階數值。wrapper 並非複製通用模板：它只允許 `action_shoot`，還會檢查 trait 所在欄位目前是否持用；兩個 tier stat key 取代 wrapper 中同鍵的條件預設值。
- 實際 `flamer_p1_m1` 的未架槍 `action_shoot` 對應 `flamer_gas_burst`；架槍持續射擊是不同 action name `action_shoot_braced`，特殊動作是 `push`。兩者都不符合 wrapper 的 action gate，即使架槍攻擊本身仍是遠程攻擊類型。
- 直接火焰命中經 `FlamerAction.damage_target` 走遠程攻擊路徑。踉蹌計算讀取攻擊者 stat，並在命中當下查目標是否帶有 burning keyword；它只查狀態，不查燃燒由誰施加。若目標原先已燃燒，這次符合條件；burst 解析中先結算直接傷害，再走獨立 burning stack 加入/刷新，因此該次命中不會靠稍後施加的燃燒追溯符合條件。後續命中需等燃燒 keyword 實際生效。
- `ranged_impact_modifier` 只在 ranged attack 的踉蹌計算中使用，與燃燒狀態無關；它先乘到 `stagger_power_level`，再轉成踉蹌強度。`stagger_burning_reduction_modifier` 只在 `is_burning` 為真時乘到可適用的原生踉蹌減免。若 profile 已忽略踉蹌減免，原生 R 為零；若弱點命中走 breed 專屬 weakspot reduction 早退分支，該值不會套本項減免修正。一般 finesse 先把原生減免減半，再乘本項燃燒修正。
- 最後踉蹌仍由轉換後踉蹌強度、既有／衰減踉蹌池、半數有效減免、護甲修正及敵人門檻共同決定，並可能受 no-stagger tag 等分支影響。這不是生命傷害加成。
- `flamer_assault` 的週期傷害以 `attack_type=buff` 執行，且其燃燒傷害 profile 的 impact 為 0，因此不會得到本項遠程 Impact 加成。燃燒減免 stat 本身沒有 attack-type gate；週期 tick 是否能讀到它，仍取決於 tick 結算時攻擊者是否持有本項有效 stat cache 且目標燃燒。週期 tick 與主要命中分別結算，並非另一發主要遠程攻擊。

設 `p` 為本項 `ranged_impact_modifier`，`m` 為 `stagger_burning_reduction_modifier`，`P` 為曲線映射前的 Impact input，`R` 為通過既有 early-return／finesse 處理後、乘本項前的有效原生踉蹌減免。持用且目前 action 是 `action_shoot` 時：

- Impact 輸入在無其他 Impact stat 時為 `P×(1+p)`；它接著經 power-level percentage 與 min/max curve 轉為踉蹌強度。若同 stat 已有 q，則為 `P×(1+q+p)`。
- 目標已有 burning keyword 時，減免為 `R×m`；未燃燒時，本項不改變 R。Tier I–IV 的 m 為 .60/.50/.40/.30，p 為 .30/.35/.40/.45。
- 之後計算會比較 R 與踉蹌強度及池；最終 threshold score 依序使用護甲修正後的踉蹌強度、pool 及 `−0.5×R`。不應直接將 p 當成最終踉蹌強度的同比增幅。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_162`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_162.png)｜[Issue附件](https://github.com/user-attachments/assets/0d297dab-50af-49f0-8303-46347b9ab040)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L182-L239) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L26-L50) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
