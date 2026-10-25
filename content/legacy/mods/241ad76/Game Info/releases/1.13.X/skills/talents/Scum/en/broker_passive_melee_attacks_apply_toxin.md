# Coated Weaponry: source evidence

[繁體中文](../broker_passive_melee_attacks_apply_toxin.md) | [Player description](README.md#broker_passive_melee_attacks_apply_toxin) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_melee_attacks_apply_toxin)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_melee_attacks_apply_toxin`; name key `loc_talent_broker_passive_melee_attacks_apply_toxin`; description key `loc_talent_broker_passive_melee_attacks_apply_toxin_desc`. Node `node_82e26378-1ad7-41c9-bd62-db6fee2779f7`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` requires `on_crit_melee` and adds one `neurotoxin_interval_buff3` stack. It has `duration = 2.6`, `interval = 0.35`, `interval_stack_removal = true`, a cap of 30 and a refreshed timer.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L1493-L1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L25-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L25-L63)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2964-L2985](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2964-L2985)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2155-L2179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2155-L2179)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1279-L1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1279-L1305)

## Example assumptions and limits

- **Stacks**: Each Melee Critical Hit adds one stack of the same Toxin type to that enemy and resets Toxin duration. It shares the 30-stack cap with other ways of applying the same Toxin.

- **Damage behavior**: Toxin resolves every 0.35s. At three stacks, input Power is 500 × 3 ÷ 30 = 50, then the Damage curve and enemy armour determine Damage. More stacks increase Power; Power cannot be treated directly as Damage.

- **Decay**: After you stop replenishing Toxin, the base 2.6s wait elapses, then stacks decay one at a time with Toxin Damage ticks. Applying Toxin again restarts the waiting period.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_melee_attacks_apply_toxin`, hash `eed42f4b`, entry 15522: **Coated Weaponry**.
- Description key `loc_talent_broker_passive_melee_attacks_apply_toxin_desc`, hash `4108cdaa`, entry 4217.

Full raw template:

~~~text
Melee Critical Strikes infect Enemies with {stacks:%s} stack(s) of {toxin:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{stacks:%s}` | `stacks_to_add = 1` | Parent Buff lookup; `number` → `1` |
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |

The existing display map at `broker_talents.lua` L2155-L2179 reads the verified stack count and localizes the toxin key. Reused glossary: `Chem Toxin`, hash `5ea7edc3`, entry 6134; number formatting displays 1.

Static reconstruction; not an observed game screen:

~~~text
Melee Critical Strikes infect Enemies with 1 stack(s) of Chem Toxin.
~~~

## English comparison

The English explicitly requires Melee Critical Strikes and gives one Toxin stack, matching the verified event and addition. The shared cap, refreshed timer, 2.6s wait, tick-based decay and Power calculation supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_attacks_apply_toxin.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd). The icon identifies the talent; it is not mechanism evidence.
