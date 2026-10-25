# Weapons Specialist: source evidence

[繁體中文](../veteran_weapon_switch_passive.md) | [Player description](README.md#veteran_weapon_switch_passive) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_passive)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Keystone `veteran_weapon_switch_passive`; installs veteran_weapon_switch_passive_buff. [One-point Keystone node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1811-L1839); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2717-L2826).
- Exact English name key `loc_talent_veteran_weapon_switch`, hash `d7bf1156`: **Weapons Specialist**. Description key `loc_talent_veteran_weapon_switch_new_description`, hash `4ead394a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- on_kill reads the current inventory_component.wielded_slot and does not test params.attack_type. Kills while holding slot_primary store ranged_stacks up to 10; kills while holding slot_secondary store melee_stacks up to 1. A damage-over-time or earlier-thrown-grenade kill follows the slot held at death, rather than necessarily the attack source. [Stored stacks and weapon-switch activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L3045).
- The matching on_wield activation creates the corresponding buff using all stored stacks, then clears that storage. With zero stored stacks, the with_stacks loop over 1..n does not create an effect. [Stored stacks and weapon-switch activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L3045); [Buff stacking](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410).
- Ranged Specialist has duration 10 seconds and max_stacks=max_stacks_cap=10. Each stack contributes ranged_attack_speed=0.02 and reload_speed=0.02. Its conditional ranged_critical_strike_chance=0.33 also combines per stack through Buff._calculate_stat_buffs: n stacks contribute 0.33n, rather than a fixed +33 percentage points for the entire buff. The total critical chance is clamped to 0..1. [Ranged Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129); [Buff._calculate_stat_buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747); [CriticalStrike.chance and probability clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39).
- Nonautomatic shots roll the critical state at ActionShoot initialization; automatic shots roll when entering prepare_shooting. HitScan reads and resolves that state before dispatching on_shoot. This event sets shot=true, so subsequent stat aggregation removes the extra critical chance. The first shot can therefore use it, while the attack/reload speed stats remain. Some automatic weapons retain an already-rolled critical burst result; removal of the bonus does not prove that every later bullet in that burst is noncritical. [Nonautomatic shot initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L159); [Automatic prepare_shooting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L594-L615); [HitScan critical result before on_shoot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L150-L219); [Buff event dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415); [Ranged Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129); [Automatic shooting and retained burst state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068).
- Ranged Specialist ends when leaving slot_secondary; Melee Specialist ends when leaving slot_primary, even before its duration expires. Melee Specialist has one effective stack, duration 10 seconds, melee_attack_speed=0.15, dodge_speed_multiplier=1.1 and dodge_distance_modifier=0.1. [Ranged Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129); [Melee Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3192).
- Action-speed contributions add to applicable same-stage speed modifiers. With other factors held at 1 and no binding limit, an affected action time T becomes `T / (1 + speed_bonus)`. A base dodge distance of 3 metres becomes `3 × 1.1 = 3.3 metres` with this isolated effect. [Attack-speed stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804); [Reload-speed stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L865); [Dodge stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L939-L961); [Action-time scale factors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429).
- The literal English labels Melee Kills/Ranged Kill do not define kill attribution. The accepted mechanism establishes the held-slot rule, but the intended meaning of those labels remains unconfirmed; no English kill-category erratum is asserted. [Stored stacks and weapon-switch activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L3045).

## Critical chance, action time and dodge examples

Assume the required stored stacks exist and the corresponding weapon is wielded within its active buff window. Critical examples use a hypothetical starting 10% chance with no other changes, before the first on_shoot consumes the conditional bonus. Time examples hold other scale factors at 1 with no binding limit; listed times and dodge distance are illustrative starting values, not universal weapon measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One Ranged Specialist stack; starting critical chance 10%; first qualifying shot | `clamp(0.10 + 1 × 0.33, 0, 1) = 0.43 = 43%`. | The bonus adds 33 percentage points to that roll. |
| Three Ranged Specialist stacks; starting critical chance 10%; first qualifying shot | `clamp(0.10 + 3 × 0.33, 0, 1) = clamp(1.09, 0, 1) = 100%`. | The unclamped sum is 109%; the effective probability stops at 100%. This does not promise a separate new roll for every bullet of an automatic burst. |
| Ten Ranged Specialist stacks; illustrative 3-second affected reload | Speed bonus `10 × 0.02 = 0.20 = 20%`; time `3 / 1.20 = 2.5 seconds`. | The action saves 0.5 seconds, or 16.67% of its original time. Ranged attack speed receives the same +20% stat bonus. |
| Melee Specialist active; illustrative 1-second affected melee action | `1 / 1.15 ≈ 0.87 seconds`. | The +15% speed stat reduces this assumed action time by about 13.04%. |
| Melee Specialist active; illustrative base dodge distance 3 metres | `3 × 1.10 = 3.3 metres`. | The isolated distance gain is 0.3 metres, or 10%; actual dodge behavior depends on the weapon and other modifiers. |

## Original English template and reconstruction

Full raw template, hash `4ead394a`:

```text
Gain Ranged Specialist on Melee Kills (Stacks {ranged_stacks:%s} times). Gain Melee Specialist on Ranged Kill (Stacks {melee_stacks:%s} times.)

When you wield your Ranged Weapon, you activate your Ranged Specialist effect to gain {ranged_attack_speed:%s} Ranged Attack Speed, {reload_speed:%s} Reload Speed, as well as {ranged_crit_chance:%s} Ranged Critical Hit Chance on your next shot, per stack. Lasts {ranged_duration:%s}s.

When you wield your Melee Weapon, you activate your Melee Specialist effect, to gain {melee_attack_speed:%s} Melee Attack Speed, and {dodge_modifier:%s} Dodge Speed and Dodge Distance. Lasts {melee_duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ranged_stacks` | Ranged buff max_stacks=10; number, no prefix | `10` |
| `melee_stacks` | Melee buff max_stacks=1; number, no prefix | `1` |
| `ranged_attack_speed` | Ranged stat 0.02 per stack; percentage, + prefix | `+2%` |
| `reload_speed` | Ranged stat 0.02 per stack; percentage, no + prefix | `2%` |
| `ranged_crit_chance` | Ranged conditional stat 0.33 per stack; percentage, + prefix | `+33%` |
| `ranged_duration` | Ranged buff duration=10; number; template supplies s | `10` |
| `melee_attack_speed` | Melee stat 0.15; percentage, + prefix | `+15%` |
| `dodge_modifier` | Melee dodge_distance_modifier=0.1; percentage, no + prefix; dodge speed is separately 1.1 | `10%` |
| `melee_duration` | Melee buff duration=10; number; template supplies s | `10` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2717-L2826); [Weapons Specialist settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L46-L50); [Ranged Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129); [Melee Specialist buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3192); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
Gain Ranged Specialist on Melee Kills (Stacks 10 times). Gain Melee Specialist on Ranged Kill (Stacks 1 times.)

When you wield your Ranged Weapon, you activate your Ranged Specialist effect to gain +2% Ranged Attack Speed, 2% Reload Speed, as well as +33% Ranged Critical Hit Chance on your next shot, per stack. Lasts 10s.

When you wield your Melee Weapon, you activate your Melee Specialist effect, to gain +15% Melee Attack Speed, and 10% Dodge Speed and Dodge Distance. Lasts 10s.
```

Runtime color markup is excluded; this is not an observed game screen. The stack caps, weapon-wield activation, per-stack ranged values, next-shot critical-chance scope, durations and melee bonuses agree with the reconstructed English. Storage consumption, early removal, probability clamping and retained automatic-burst state are omitted. The intended kill-attribution meaning of Melee Kills/Ranged Kill remains unconfirmed. No explicit English contradiction or supported English erratum is established, including the Chinese next-shot-scope erratum.

## Limits

The critical, timing and distance examples use explicit hypothetical assumptions. Per-weapon automatic critical-burst lengths and exact weapon-switch-frame event order were not measured. The intended English kill-attribution labels remain unconfirmed despite the accepted held-slot mechanism; no attack-source-only promise or English erratum is asserted.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_weapon_switch_passive.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b)

The icon identifies the talent; it is not mechanism evidence.
