# Good Shootin': source evidence

[繁體中文](../ogryn_leadbelcher_crits.md) | [Player description](README.md#ogryn_leadbelcher_crits) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_crits)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_leadbelcher_crits`; name key `loc_talent_ogryn_critical_leadbelcher`; description key `loc_talent_ogryn_critical_leadbelcher_desc`. Node `node_8e2afd01-7306-4800-a570-5691d70e939c`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent special rule `ogryn_leadbelcher_auto_crit` makes `ActionShoot` pass `true` to `_check_for_critical_strike(...,true)` when `_leadbelcher_shot` is set. The automatic-fire path also sets auto crit after Lucky Bullet triggers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L451-L466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L451-L466)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L132-L157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L132-L157)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L997-L1045](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1045)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L451-L466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L451-L466)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L835-L858](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L835-L858)

## Example assumptions and limits

- **Requirement**: Lucky Bullet must first trigger, and that shot must hit a target.

- **Scope**: Only the triggering shot's hit is guaranteed to be critical; subsequent shots are not also guaranteed critical hits. This effect does not change Lucky Bullet's proc chance.

- **Damage example**: For the same weapon, armour and hit location, assume ordinary damage 100 and an additional critical component of 50. A Lucky Bullet hit deals 100 + 50 = 150. Critical multipliers vary by weapon; they are not always double damage. A miss deals no damage.

This node only handles the critical result of the Lucky Bullet shot; it does not guarantee that the shot hits. Mechanisms are verified against the fixed public-source SHA; local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_critical_leadbelcher`, hash `35e6dc94`, entry 3496: **Good Shootin'**.
- Description key `loc_talent_ogryn_critical_leadbelcher_desc`, hash `c346583c`, entry 12583.

Full raw English, with no placeholders:

~~~text
The shot that triggers Lucky Bullet is a guaranteed Critical (if it Hits).
~~~

No display values require reconstruction. Existing mechanisms and source pointers were reused; no code was read.

## English comparison

The independently read English gives a guaranteed critical result for the shot that triggers Lucky Bullet and explicitly adds the hit condition. Those statements agree with the accepted single-shot and automatic-fire behavior. It does not guarantee a hit, extend the guarantee to subsequent shots or prescribe a fixed critical multiplier. The 150-damage example retains its stated weapon, armour and hit-location assumptions. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_leadbelcher_crits.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8). The icon identifies the talent; it is not mechanism evidence.
