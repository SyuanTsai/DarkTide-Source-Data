# 震懾：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Ogryn own I-IV and formatter | [Ogryn own I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L250-L306) |
| Ogryn exact custom wrapper | [Ogryn exact custom wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua#L86-L99) |
| Saw own I-IV and formatter | [Saw own I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L423-L479) |
| Saw exact custom wrapper | [Saw exact custom wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L52-L65) |
| Thunderhammer own I-IV and formatter | [Thunderhammer own I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L10-L66) |
| Thunderhammer exact custom wrapper | [Thunderhammer exact custom wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L13-L26) |
| Percentage formatter | [Percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20) |
| Value lookup and prefix order | [Value lookup and prefix order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L117) |
| Number formatter | [Number formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L202) |
| Hit-mass stat classification | [Hit-mass stat classification](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L747-L753) |
| Wielded-slot gate | [Wielded-slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Died check | [Died check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L60-L66) |
| Attacking item match | [Attacking item match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Timed ProcBuff active window | [Timed ProcBuff active window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L105) |
| ProcBuff without cooldown | [ProcBuff without cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff stat gate and refresh | [ProcBuff stat gate and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L355) |
| Proc event enqueue | [Proc event enqueue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L991) |
| Proc event processing | [Proc event processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L272) |
| Player buff fixed-update order | [Player buff fixed-update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L150) |
| on_hit packet and guards | [on_hit packet and guards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L579-L621) |
| Separate on_kill queue | [Separate on_kill queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Target hit-mass consumer | [Target hit-mass consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L62) |
| Sweep mass budget before damage | [Sweep mass budget before damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1354-L1404) |
| Sweep to Attack.execute | [Sweep to Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1488-L1503) |
| Pure push dispatch | [Pure push dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L80-L102) |
| Push attack route | [Push attack route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L99) |
| Light push profile | [Light push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L118) |
| Default push profile | [Default push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L119-L159) |
| Ogryn push profile | [Ogryn push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L306-L343) |
| Attack and impact channels | [Attack and impact channels](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L137) |
| Cruncher M1 action table | [Cruncher M1 action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_hammers_2h/ogryn_hammer_2h_p1_m1.lua#L365-L1618) |
| Saw Chirurgeon M1 action table | [Saw Chirurgeon M1 action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L166-L1461) |
| Crucis M1 action table | [Crucis M1 action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L59-L1404) |
| Ironhelm M2 action table | [Ironhelm M2 action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L61-L1424) |
| Saw sticky heavy profile selection | [Saw sticky heavy profile selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L377-L456) |
| Saw normal sticky package | [Saw normal sticky package](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L85-L124) |
| Saw active sticky package | [Saw active sticky package](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L125-L152) |
| Saw rip profiles skip on_hit | [Saw rip profiles skip on_hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/settings_templates/saw_damage_profile_templates.lua#L984-L1093) |
| Saw delayed sticky Attack.execute | [Saw delayed sticky Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L720-L809) |
| Sweep sticky setup | [Sweep sticky setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1121-L1125) |
| 本項觸發、生命週期、質量消耗或實際招式 | [本項觸發、生命週期、質量消耗或實際招式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L254) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

三個 trait wrapper 各以單一 ProcBuff 訂閱 on_hit。傷害類型須允許 on-hit proc、profile 不可設 skip_on_hit_proc、同一攻擊不可重複送出該事件；Attack 封包帶 attack_result 和 attacking_item。wrapper 再檢查 attacking_item 與祝福 item 相符、attack_result=died，及祝福 item slot 等於目前持握欄位；沒有 breed、elite 或敵人種類條件。純推擊另走 on_push_hit；四 Mark pure-push profile attack power=0，只有 impact/stagger，不能造成通過 died check 的生命擊殺。

Sweep 先以 HitMass 算出目標質量並累加 amount_of_mass_hit，再按質量上限、護甲和敵人規則選擇是否中止，最後才執行傷害與排事件。on_hit 封包排入玩家 BuffExtension 佇列；固定更新處理事件後才重建 stat cache，所以擊殺該次命中已用舊質量計算，效果要待 cache 更新後影響後續質量計算。

每個 wrapper active_duration=3 秒、allow_proc_while_active=true，且無 cooldown/max_stacks。成功觸發設定或刷新單一 active_start_time；從最後一次成功 proc 起滿 3 秒時 ProcBuff 到期並停止提供 modifier，不累加層數。持握 gate 同時控制 stat-buff：切出時不加入質量修正，計時不暫停；到期前切回且 cache 更新後，恢復剩餘時間效果。

四個實際 Mark 的輕擊、重擊、連段推擊後續與特殊 sweep 都接入 sweep。骨鋸塗層切換改選 AP sweep profile，本身不是命中；初次重擊 sweep 與 delayed rip 是不同 Attack，兩個 rip profile 都設 skip_on_hit_proc=true，故 rip 擊殺不發出本祝福所需 on_hit。綁定 action table 無投擲/projectile，亦未連出摔落傷害封包。任何其他獨立傷害須實際送出符合同一 wrapper 的 on_hit/died 封包才可觸發。

只看 consumed_hit_mass_modifier 時，受影響目標的命中質量計入值 = 原本 HitMass.target_hit_mass × I／II／III／IV 對應的 0.70／0.60／0.50／0.40；消耗量相對減少 = (1 − multiplier) × 100% = 30%／40%／50%／60%。HitMass consumer 將這個 stat 乘在 target_hit_mass 上，沒有 attack_type 門檻；弱點與遠程相關質量修正是另外因素。這是質量乘法修正，不是百分點、相對傷害增幅或最終傷害倍率。

Sweep 將修正後質量加到 amount_of_mass_hit，再按招式質量上限、護甲和敵人規則判定中止。減少質量消耗可能讓後續目標仍在掃擊預算內，但不能推出固定增加相同比例目標數或無限順劈；它不在傷害公式中。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_100`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_100.png)｜[Issue附件](https://github.com/user-attachments/assets/9277a78a-f4a2-4639-9fcb-cbbfbf82b3c7)；圖示只作辨識。


- **Ogryn Hammer and Thunder Hammer**：item.icon `content/ui/textures/icons/traits/weapon_trait_100`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_100.png)｜[Issue附件](https://github.com/user-attachments/assets/9277a78a-f4a2-4639-9fcb-cbbfbf82b3c7)。

- **Saw**：item.icon `content/ui/textures/icons/traits/weapon_trait_246`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_246.png)｜[Issue附件](https://github.com/user-attachments/assets/6c1e408b-d8d7-4ce3-9782-198b9e3b0970)。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 碎骨者等級覆寫 | [碎骨者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L250-L306) |
| 碎骨者Buff接入 | [碎骨者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua#L86-L99) |
| UI 碎骨者 | [UI 碎骨者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L405) |
| 碎骨者 克魯克 Mk IIa匯入 | [碎骨者 克魯克 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_hammers_2h/ogryn_hammer_2h_p1_m1.lua#L15) |
| 碎骨者 克魯克 Mk IIa接入 | [碎骨者 克魯克 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_hammers_2h/ogryn_hammer_2h_p1_m1.lua#L1973-L1975) |
| 骨鋸等級覆寫 | [骨鋸等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L423-L479) |
| 骨鋸Buff接入 | [骨鋸Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L52-L65) |
| UI 骨鋸 | [UI 骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L565) |
| 骨鋸 外科醫師 型號4匯入 | [骨鋸 外科醫師 型號4匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L14) |
| 骨鋸 外科醫師 型號4接入 | [骨鋸 外科醫師 型號4接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |
| 雷鎚等級覆寫 | [雷鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L10-L66) |
| 雷鎚Buff接入 | [雷鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L13-L26) |
| UI 雷鎚 | [UI 雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L578) |
| 雷鎚 十字星 Mk II匯入 | [雷鎚 十字星 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L16) |
| 雷鎚 十字星 Mk II接入 | [雷鎚 十字星 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L1778-L1780) |
| 雷鎚 鐵盔 Mk IV匯入 | [雷鎚 鐵盔 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L17) |
| 雷鎚 鐵盔 Mk IV接入 | [雷鎚 鐵盔 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L1809-L1811) |
