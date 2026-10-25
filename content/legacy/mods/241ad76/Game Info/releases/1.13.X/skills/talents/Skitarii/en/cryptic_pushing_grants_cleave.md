# Shockline Breach Protocol: source evidence

[繁體中文](../cryptic_pushing_grants_cleave.md) | [Player description](README.md#cryptic_pushing_grants_cleave) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_pushing_grants_cleave)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_pushing_grants_cleave`; name key `loc_talent_cryptic_pushing_grants_cleave`; description key `loc_talent_cryptic_pushing_grants_cleave_alt_desc`. Node `node_3d85c249-b115-4ae9-8601-3c529b91c855`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_push_hit` activates a proc stat with `max_melee_hit_mass_attack_modifier = 0.5`, active for 8 seconds and allowing duration refreshing. This increases melee cleave, rather than directly adding 50% melee damage.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_cryptic.lua — L424-L427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L424-L427)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2438-L2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2438-L2455)
- [scripts/utilities/attack/damage_profile.lua — L37-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L80)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1927-L1946](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1927-L1946)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L497-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L497-L526)

## Example assumptions and limits

- **Trigger**: Hitting an enemy with a push grants **50% increased melee cleave for 8 seconds**. Another successful push restarts the duration without adding stacks.
- **Example**: If the attack could originally handle 10 units of enemy mass, the effect changes that to `10 × (1 + 50%) = 15`. The number of additional enemies hit still depends on their mass and the attack's own limits.

- The cleave example assumes an original enemy-mass budget of 10 units, increased to 15. Additional targets depend on enemy mass and the attack's limits.
- The English condition and cleave direction agree with the verified behavior. The mass-budget calculation and duration refreshing supplement the wording. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_pushing_grants_cleave`, hash `53810570`, entry 5425: **Shockline Breach Protocol**.
- Description key `loc_talent_cryptic_pushing_grants_cleave_alt_desc`, hash `d5aece03`, entry 13821.

Full raw template:

~~~text
Pushing an enemy grants {cleave:%s} increased Melee Cleave for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cleave` | +50% | `percentage`, prefix `+`: verified `talent_settings.cryptic_pushing_grants_cleave.max_melee_hit_mass_attack_modifier = 0.5` |
| `duration` | 8 | `number`: verified `talent_settings.cryptic_pushing_grants_cleave.duration = 8` |

The display mappings in `cryptic_talents.lua` L1935–L1945 use the already verified cleave stat and duration.

Static reconstruction; not an observed game screen:

~~~text
Pushing an enemy grants +50% increased Melee Cleave for 8s.
~~~

## English comparison

The English pushing condition, +50% Melee Cleave and 8-second duration agree with the accepted effect. The wording identifies cleave rather than direct melee damage. Its mass-budget basis, target-count limits and refreshing without stacks are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_pushing_grants_cleave.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9). The icon identifies the talent; it is not mechanism evidence.
