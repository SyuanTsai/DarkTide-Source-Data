# Great Cleaver: source evidence

[繁體中文](../ogryn_heavy_hitter_cleave.md) | [Player description](README.md#ogryn_heavy_hitter_cleave) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_cleave)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_hitter_cleave`; name key `loc_talent_ogryn_passive_heavy_hitter_cleave`; description key `loc_talent_ogryn_passive_heavy_hitter_cleave_desc`. Node `node_20a7071e-64d2-4850-b076-3e787bd9f1b1`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The modifier buff has one stack. Its lerped stat runs from 0 to `cleave × max_stacks`, with `cleave=0.125` and `max_stacks=8`.
- The interpolation ratio is the current Heavy Hitter stack count divided by its maximum. Therefore melee cleave capacity is `base × (1 + 0.125N)` for `0 ≤ N ≤ 8`.
- The actual stat is `max_melee_hit_mass_attack_modifier`. It affects weapon cleave capacity and enemy hit-mass consumption; it is not a general damage bonus.
- `heavy_hitter_lerp_value` is module-local shared state. Interactions between multiple Ogryns were not tested; the examples assume one character.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2416-L2435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2416-L2435)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L309-L322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L309-L322)
- [scripts/utilities/attack/damage_profile.lua — L45-L57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L45-L57)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2416-L2435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2416-L2435)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2000-L2023](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2000-L2023)

## Example assumptions and limits

- **Per stack**: Each Heavy Hitter stack increases melee cleave capacity by 12.5%.

- **Maximum**: At 8 stacks, the increase reaches 100%, doubling the base cleave capacity. This bonus follows the current Heavy Hitter stack count.

- **Limit**: Enemies consume different amounts of cleave mass. Doubling capacity does not guarantee hitting twice as many enemies.

- **Example**: At 4 stacks, cleave capacity increases by 50%. At 8 stacks, a base capacity of 10 becomes `10 × 2 = 20`.

Mechanisms are verified against the fixed public-source SHA, and local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_passive_heavy_hitter_cleave`, hash `af115733`, entry 11264: **Great Cleaver**.
- Description key `loc_talent_ogryn_passive_heavy_hitter_cleave_desc`, hash `7eed29b9`, entry 8238.

Full raw template:

~~~text
{talent_name:%s} also grants {cleave:%s} Cleave for each stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_passive_heavy_hitter | Localized string → Heavy Hitter; accepted same-build name |
| cleave | 0.125 | Percentage with explicit + prefix → +12.5%; existing decimal-formatting evidence reused |

Only the missing display mapping in the cited talent definition, lines 2416–2435, was read. Existing mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Heavy Hitter also grants +12.5% Cleave for each stack.
~~~

## English comparison

The independently read English grants cleave for each Heavy Hitter stack and makes no damage claim. It matches the accepted melee cleave-capacity modifier. The eight-stack maximum, formula, examples, enemy cleave-mass limit and untested shared-state interaction supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_cleave.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b). The icon identifies the talent; it is not mechanism evidence.
