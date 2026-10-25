# Spur V: source evidence

[繁體中文](../broker_stimm_celerity_5a.md) | [Player description](README.md#broker_stimm_celerity_5a) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_5a)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_celerity_5a`; name key `loc_talent_broker_stimm_celerity_a`; description key `loc_talent_stat_attack_speed / loc_talent_keyword_stun_immune / loc_talent_keyword_slowdown_immune`. Node `node_c7743c1a-1eba-4c2c-b9ba-a1f865e92f0c`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `attack_speed = 0.04`. Also creates `broker_syringe_slow_and_stun_immune`, granting `stun_immune` and `slowdown_immune`; there is no execution call to release a disabled state. Its effects follow the root's externally controlled lifetime.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4078-L4085](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4078-L4085)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/talent/talent_settings_broker.lua — L545-L549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L545-L549)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L641-L664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L641-L664)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%. Together with Spur I–IV, the total is 20%.

- **Attack Speed example**: A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.2 ≈ 0.833 seconds with the full Spur route.

- **Protection**: Gain Stun and Slowdown Immunity during the effects. This does not release an existing grab or capture.

Immunity depends on whether each attack checks the corresponding keyword; it does not make all control effects or damage ineffective. `syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_celerity_a`, hash `33b4b842`, entry 3365: **Spur V**.
- Description key `loc_talent_stat_attack_speed`, hash `a2530496`, entry 10486; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_keyword_stun_immune`, hash `a6fe7bf4`, entry 10748; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_keyword_slowdown_immune`, hash `5936af23`, entry 5786; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{attack_speed:%s} Attack Speed.
Grants Stun Immunity.
Grants Slowdown Immunity.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 5 → Roman numeral `V` | Raw name template: `Spur {tier:%s}` → `Spur V` |
| `attack_speed` | `0.04` | Percentage with `+`: `+4%` |
| `stun_immune` / `slowdown_immune` | Each keyword has value `1` | Their English keyword templates contain no placeholders |

The component keys come from the accepted document and match same-build entries by hash; these component JSONL entries have no key field. Display mappings at `talent_settings_broker.lua` L545-L549 supply +4% and append the Stun/Slowdown keyword descriptions. The shared display generator's [name/stat mapping L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and [keyword mapping L93-L108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L93-L108) are reused. The keyword templates need no interpolation. Components below are listed in definition order, without claiming observed spacing or layout.

Static reconstruction; not an observed game screen:

~~~text
+4% Attack Speed.
Grants Stun Immunity.
Grants Slowdown Immunity.
~~~

## English comparison

The English components grant +4% Attack Speed, Stun Immunity and Slowdown Immunity, matching the accepted recipe statistics and keywords. They do not promise release from an existing grab or immunity to every control effect or all damage. The purchase, lifetime, full-route example and keyword-check limitations supplement the description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_5a.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/ed3da982-a076-4b67-a1ca-c889ede0ba70). The icon identifies the talent; it is not mechanism evidence.
