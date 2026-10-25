# The Master's Retribution: source evidence

[繁體中文](../zealot_defensive_knockback.md) | [Player description](README.md#zealot_defensive_knockback) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_defensive_knockback)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_defensive_knockback`; name key `loc_talent_zealot_3_tier_3_ability_1`; description key `loc_talent_zealot_3_tier_3_ability_1_description`. Node `node_2593e8b0-8838-45fd-b0ff-ac8ea327fb14`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_hit_received` requires Melee, `is_damaging_result`, a living `attacking_unit` and a holder who is not disabled.
- On the server, `PushAttack.push` uses `power_level = 2000`, `radius = 2.75`, inner/outer angles `π × 0.125` / `π × 0.25`, and profile `push_test`.
- `power_level = 2000` is not 2000 damage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L570-L630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L570-L630)
- [scripts/settings/talent/talent_settings_zealot.lua — L496-L502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L496-L502)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3083-L3098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3083-L3098)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1575-L1597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1575-L1597)

## Example assumptions and limits

- **Trigger**: A Melee hit that deals damage produces a retaliatory push toward the attacker, with an 8-second cooldown. It does not trigger while you are disabled and unable to act or when the attacker is already dead.
- **Area**: The push has a 2.75-metre radius and faces the attacker. Enemy Stagger resistance affects the result, so it does not guarantee knocking down every enemy.
- **Cooldown example**: After triggering at second 0, another hit at second 3 produces no push; it can trigger again around second 8. It does not undo the triggering hit's damage.

- The accepted Chinese comparison at hash `f3ca681a` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_tier_3_ability_1`, hash `8fb484ca`, entry 9292: **The Master's Retribution**.
- Description key `loc_talent_zealot_3_tier_3_ability_1_description`, hash `f3ca681a`, entry 15840.

Full raw template:

~~~text
Knock back the Attacker on taking a Melee Hit. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown` | 8 → 8 | `value`; `talent_settings_3.defensive_1.cooldown_duration` |

The minimal display mapping at `zealot_talents.lua` L3083-L3098 supplies the accepted cooldown. `[Narrative]` is metadata outside the raw text.

Static reconstruction; not an observed game screen:

~~~text
Knock back the Attacker on taking a Melee Hit. 8s Cooldown.
~~~

## English comparison

The English gives an attacker-directed knockback after a Melee hit with an 8-second cooldown, matching the accepted push direction and interval. It does not explicitly promise undoing damage or guaranteed knockdown against every resistance. The damaging-result, living-attacker and non-disabled checks, radius/angles/profile and power-level distinction supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_defensive_knockback.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96). The icon identifies the talent; it is not mechanism evidence.
