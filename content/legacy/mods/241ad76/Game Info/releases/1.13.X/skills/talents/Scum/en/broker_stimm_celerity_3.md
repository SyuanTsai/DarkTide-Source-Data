# Spur III: source evidence

[繁體中文](../broker_stimm_celerity_3.md) | [Player description](README.md#broker_stimm_celerity_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_celerity_3`; name key `loc_talent_broker_stimm_celerity_a`; description key `loc_talent_stat_attack_speed / loc_talent_stat_stamina_cost_multiplier`. Node `node_c1b0f29b-8968-44a3-bc1c-7580440db96c`; category Stimm recipe; 3 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `attack_speed = 0.04`. Each selected node retains its own 0.04; total Attack Speed from these nodes is their selected count × 0.04.
- `stamina_cost_multiplier = 0.85` is a `multiplicative_multiplier`, applied multiplicatively through `Stamina.drain` / `Stamina.drain_percentage`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/buff/buff_settings.lua — L700-L700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L700-L700)
- [scripts/utilities/attack/stamina.lua — L14-L55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L55)
- [scripts/settings/buff/buff_settings.lua — L983-L983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L983-L983)
- [scripts/settings/talent/talent_settings_broker.lua — L523-L533](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L523-L533)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L589-L613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L589-L613)

## Example assumptions and limits

- **Recipe cost**: 3 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%, additive with other Attack Speed bonuses.

- **Stamina Cost**: This node multiplies Stamina Cost by 0.85, a 15% reduction.

- **Stamina example**: A cost of 10 becomes 10 × 0.85 = 8.5 with this node alone. Selecting II, III and IV gives 10 × 0.85 × 0.85 × 0.8 = 5.78.

- **Attack Speed example**: Selecting from Spur I through this node gives 12% in total. A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.12 ≈ 0.893 seconds.

Attack Speed shortens only action segments using the corresponding speed multiplier; it does not guarantee equal shortening of every action on every weapon. `syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_celerity_a`, hash `33b4b842`, entry 3365: **Spur III**.
- Description key `loc_talent_stat_attack_speed`, hash `a2530496`, entry 10486; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_stamina_cost_multiplier`, hash `26fbf08f`, entry 2518; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{attack_speed:%s} Attack Speed.
{stamina_cost_multiplier:%s} Stamina Cost.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 3 → Roman numeral `III` | Raw name template: `Spur {tier:%s}` → `Spur III` |
| `attack_speed` | `0.04` | Percentage with `+`: `+4%` |
| `stamina_cost_multiplier` | `0.85` | Custom `round((value − 1) × 100) = −15`: `−15%` |

The component keys come from the accepted document and match the same-build entries by hash; these component JSONL entries have no key field. The recipe's display mappings are at `talent_settings_broker.lua` L523-L533. The shared display generator at [L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) converts the tier to Roman numerals and appends the stat-description keys. Reuse the accepted percentage formatting; the following reconstruction lists the components in definition order, without claiming observed spacing or layout. The Stamina Cost mapping applies its custom percentage transformation once; it is not multiplied by 100 again.

Static reconstruction; not an observed game screen:

~~~text
+4% Attack Speed.
-15% Stamina Cost.
~~~

## English comparison

The English components specify Attack Speed and Stamina Cost. Reconstructed +4% and −15% agree with the accepted node's effects. Cost, shared duration, prerequisite stacking and action-segment limits supplement the description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/27832b4a-d52a-49bb-a87e-2a3cd7fa4371). The icon identifies the talent; it is not mechanism evidence.
