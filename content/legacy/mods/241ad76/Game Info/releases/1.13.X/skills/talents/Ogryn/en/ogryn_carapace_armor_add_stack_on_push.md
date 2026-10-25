# Strongest!: source evidence

[繁體中文](../ogryn_carapace_armor_add_stack_on_push.md) | [Player description](README.md#ogryn_carapace_armor_add_stack_on_push) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_add_stack_on_push)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_carapace_armor_add_stack_on_push`; name key `loc_talent_ogryn_carapace_armor_add_stack_on_push`; description key `loc_talent_ogryn_carapace_armor_add_stack_on_push_desc`. Node `node_74124e64-9e74-4e38-a5ce-0ab0a8516736`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent only adds a special rule. The parent proc buff includes `on_push_finish` in its child proc events. The event-specific check requires the special rule and `params.num_hit_units>0`. Each successful `ParentProcBuff` event adds at most the configured one child.
- The parent allows at most 11 internal children; stack offset −1 corresponds to 10 player-visible stacks. Adding a child writes `_add_child_stack_t`, affecting the automatic restoration conditions.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1677-L1692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1677-L1692)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L626-L682](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L626-L682)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L84-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L84-L95)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L127-L162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L127-L162)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1677-L1692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1677-L1692)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L763-L785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L763-L785)

## Example assumptions and limits

- **Requirement**: With Strongest! selected, a push must actually hit at least one enemy to restore 1 Feel No Pain stack.

- **Stack cap**: Feel No Pain has at most 10 visible stacks. Pushing at full stacks cannot exceed the cap. Restoring a stack through a push restarts the natural 2s stack-restoration interval.

- **Example**: At 6 stacks, pushing either 1 or 3 enemies restores you to 7. At 10 stacks, another successful push leaves you at 10.

The node itself has no additional cooldown. Stack restoration depends on the push event actually hitting at least one unit. Mechanisms are verified against the fixed public-source SHA, and local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_carapace_armor_add_stack_on_push`, hash `28cda661`, entry 2640: **Strongest!**.
- Description key `loc_talent_ogryn_carapace_armor_add_stack_on_push_desc`, hash `60ac22bf`, entry 6275.

Full raw template:

~~~text
Pushing Enemies restores one stack of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_carapace_armor | Localized string → Feel No Pain; accepted same-build name |

Only the missing name mapping in the cited talent definition, lines 1677–1692, was read. Existing mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Pushing Enemies restores one stack of Feel No Pain.
~~~

## English comparison

The independently read English requires pushing enemies and restores one Feel No Pain stack. That matches the accepted successful-push event and one-stack addition. The 10-stack cap, multi-target example, natural-restoration timer and absence of an additional node cooldown supplement the statement. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_add_stack_on_push.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8). The icon identifies the talent; it is not mechanism evidence.
