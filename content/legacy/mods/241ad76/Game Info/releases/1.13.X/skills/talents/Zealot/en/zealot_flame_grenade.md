# Immolation Grenade: source evidence

[繁體中文](../zealot_flame_grenade.md) | [Player description](README.md#zealot_flame_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_flame_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_flame_grenade`; name key `loc_talent_ability_fire_grenade`; description key `loc_talent_ability_fire_grenade_desc`. Node `node_998a79be-ed3f-4b78-acb5-cb788438a76c`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent binds `PlayerAbilities.zealot_fire_grenade` to the ability slot. It equips `grenade_fire`, uses charges and takes its maximum from Zealot `grenade.max_charges`, which is **3**.
- The `fire_grenade` projectile has a **1.7-second fuse** and references both `ExplosionTemplates.fire_grenade` and `LiquidAreaTemplates.fire_grenade`. The initial explosion and subsequent ground fire are separate damage stages: the explosion template's maximum radius is **1**, while the ground area lasts **15 seconds**.
- The ground buff has one stack. Difficulty first selects **P** from **500/625/750/875**, then each damage instance uses `P × (0.5 + r)`, with `r = math.random()`. It does not randomly choose among the four difficulty values. Intervals range from **0.5–1.25 seconds**.
- `power_distribution.attack = 50`; armour damage multipliers (ADM) are **2 Unarmoured / 1.5 Flak / 0.1 Carapace**. Default `damage_output` is **0–20**, the `power_level` range **0–10000**, and this version's power curve has zero initial bonus. The isolated calculation is `20 × [P × (0.5 + r) × 50 / 10000] × ADM`. At P=500/r=0.5, the respective results are **100/75/5**; at P=875, Unarmoured damage ranges from **87.5–262.5**.
- The talent's `dev_info` points to generic `liquid_area_fire_burning`, but actual `LiquidAreaTemplates.fire_grenade` points to `flame_grenade_liquid_area`, which uses `flame_grenade_liquid_area_fire_burning`.
- Leaving the liquid area applies `fire_burninating`, with `duration = 1` and `max_stacks = 10`. It uses a separate `liquid_area_fire_burning` damage template and **250/375/625/750** power table. Do not apply the area's single-stack damage directly to this lingering Burn.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L168-L197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L168-L197)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L106-L117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L106-L117)
- [scripts/settings/talent/talent_settings_zealot.lua — L452-L458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L452-L458)
- [scripts/settings/projectile/player_projectile_templates.lua — L286-L314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L286-L314)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L102-L128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L102-L128)
- [scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua — L5-L22](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua#L5-L22)
- [scripts/settings/buff/liquid_area_buff_templates.lua — L137-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L137-L161)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L166-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L166-L205)
- [scripts/settings/buff/liquid_area_buff_templates.lua — L27-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L27-L65)
- [scripts/settings/buff/liquid_area_buff_templates.lua — L291-L316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L291-L316)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua — L29-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L168-L197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L168-L197)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L179-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L179-L205)

## Example assumptions and limits

- **Operation**: Carry up to **3**; the fuse is **1.7 seconds**. Detonation first deals explosion damage, then leaves a flaming area lasting **15 seconds**.
- **Ongoing damage**: Enemies inside take Burn damage approximately every **0.5–1.25 seconds**. Each instance is randomly **50%–150%** of that difficulty's baseline. Leaving the fire also applies **1 second** of lingering Burn.
- **Damage example**: With an Unarmoured baseline of **100** for one Burn instance, and no other increases or reductions, a 50% roll deals `100 × 0.5 = 50`; a 150% roll deals `100 × 1.5 = 150`. Under the same conditions, Flak baseline damage is **75**, and Carapace **5**.
- **Calculation limits**: Initial explosion, Burn while standing in the fire, and lingering Burn after leaving are calculated separately. Both damage and intervals vary; these single-instance numbers are not damage per second.

#### Traditional Chinese localization note

- The Chinese description renders English **“Burning and Staggering”** as burning and stunning. Here it should describe **Stagger**, not **Stun**; the terms must remain distinct.

- At **P=500/r=0.5**, without Critical, Weakspot or other modifiers: `20 × (500 × 50 / 10000) × 2 = 100`. At r=0/1, this becomes **50/150**.
- A **15-second** area lifetime does not mean every enemy stands in it for 15 seconds. Total damage must sum the actual instances individually.
- Random damage, interval and time inside the area vary. These examples do not predict fixed total damage.
- “Most effective against Unarmoured Enemies” is description wording. The fixed SHA has multiple armour multipliers, but different armour types have not all been tested in game; retain this uncertainty without declaring the wording false.
- The basis for path obstruction is the navigation cost map **`fire` / cost 5**. It does not mean all enemies necessarily stop outside the flames.
- Build **25606770**, description hash **`5b720fa5`**: `Translation.md` maps Stagger/Staggering to 踉蹌 and Stun to 眩暈. The Chinese wording conflicts with that distinction; the build text is translation evidence, not mechanism evidence. Text-versus-runtime presentation remains unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_fire_grenade`, hash `2064814c`, entry 2109: **Immolation Grenade**.
- Description key `loc_talent_ability_fire_grenade_desc`, hash `5b720fa5`, entry 5925.

Full raw template:

~~~text
Throw a grenade that leaves a layer of flaming liquid, Burning and Staggering enemies, and barring their path. Most effective against Unarmoured Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders | Original wording retained |

The template contains no placeholders; no additional source read or display substitution is needed.

Static reconstruction; not an observed game screen:

~~~text
Throw a grenade that leaves a layer of flaming liquid, Burning and Staggering enemies, and barring their path. Most effective against Unarmoured Enemies.
~~~

## English comparison

The English describes flaming liquid and Burn, matching the accepted ground-area evidence. Its qualitative Stagger/path-control and relative effectiveness wording does not supply a numerical damage claim; the existing evidence does not establish an unconditional enemy-stopping guarantee or an in-game armour comparison. Preserve those limits without marking an explicit English contradiction. Charge capacity, fuse, area lifetime, random damage, intervals, separate explosion and lingering Burn are supplements. The Chinese Stagger/Stun terminology correction remains a separate localization note.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_flame_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa). The icon identifies the talent; it is not mechanism evidence.
