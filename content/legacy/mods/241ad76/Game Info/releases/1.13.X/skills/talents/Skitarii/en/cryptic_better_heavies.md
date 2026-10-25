# Hydraulic Impact: source evidence

[繁體中文](../cryptic_better_heavies.md) | [Player description](README.md#cryptic_better_heavies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_better_heavies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_better_heavies`; name key `loc_talent_cryptic_better_heavies`; description key `loc_talent_cryptic_better_heavies_desc`. Node `node_8ed6b0bc-2308-4f95-af4e-4a0c955cd364`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `action kind == windup` controls the `uninterruptible` and `stun_immune` keywords.
- `melee_heavy_damage = 0.15` is always supplied. Shared damage calculation requires a melee attack with a heavy damage profile; it does not require `auto_completed_action`.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L295-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L315)
- [scripts/settings/talent/talent_settings_cryptic.lua — L524-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L524-L526)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2947-L2971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2947-L2971)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2200-L2215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2200-L2215)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L890-L916](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L890-L916)

## Example assumptions and limits

- **Effect**: During melee windup, you are immune to ordinary hit Stun. Your Heavy Melee Damage also increases by 15%. The damage bonus applies to heavy attacks and does not require charging them fully.
- **Damage example**: At base heavy-attack damage 100 with another 25% damage bonus in the same stage, `100 × (1 + 25% + 15%) = 140`.
- **Exceptions**: Interruption protection applies only during the windup action. You still take damage, and this does not mean immunity to nets or pounces.

The damage example isolates additive bonuses within the same damage stage. Windup protection and heavy-attack damage have different conditions; ordinary hit Stun immunity does not prevent incoming damage or establish immunity to all disabling actions.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_better_heavies`, hash `245222e1`, entry 2348: **Hydraulic Impact**.
- Description key `loc_talent_cryptic_better_heavies_desc`, hash `668011b5`, entry 6667.

Full raw template:

~~~text
Uninterruptible while charging melee attacks. Gain {damage:%s} Heavy Melee Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.15` → `+15%` | Percentage with `+` prefix. |

The display mapping is `cryptic_talents.lua` L2208-L2214. The value reuses the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Uninterruptible while charging melee attacks. Gain +15% Heavy Melee Damage.
~~~

## English comparison

The English separates charging protection from the Heavy Melee Damage bonus, matching the two conditions. It does not require a fully charged heavy attack for the damage bonus. The keyword scope, continuing damage intake, nets/pounces limitation and additive example are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_better_heavies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a). The icon identifies the talent; it is not mechanism evidence.
