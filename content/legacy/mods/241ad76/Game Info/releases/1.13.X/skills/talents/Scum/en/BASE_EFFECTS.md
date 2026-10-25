# Scum base effects

[繁體中文](../BASE_EFFECTS.md) | [Scum talents](README.md) | [Source index](SOURCE_INDEX.md)

These effects come from the character's base configuration. Combat Ability, Blitz and Aura can be replaced by your loadout.

<a id="broker_ability_focus"></a>

## Desperado: base combat ability

- **Duration and cooldown**: Activation switches to your Ranged Weapon and enters Focus for 10 seconds. The base ability has 1 charge and a 45-second cooldown, paused during Focus.

- **Movement and protection**: During Focus, gain 20% Sprint Speed and Sprint without spending Stamina. You count as Dodging against Ranged Attacks and are immune to Suppression.

- **Toughness and reloading**: Activation restores Toughness and fills the magazine. Reloading during Focus consumes no reserve ammunition; at the end, the magazine is reconciled with the normal reserve ammunition rules.

- **Cooldown example**: Without other modifiers, wait 45 seconds after the 10-second Focus ends: 10 + 45 = 55 seconds before the next use.

[Source evidence and example assumptions](broker_ability_focus.md)

---

<a id="broker_blitz_flash_grenade"></a>

## Blinder: base blitz

- **Throw effect**: Quickly throw a flash grenade that detonates on collision. Its explosion radius is 3.5 metres, with stronger Stagger inside 2.25 metres. The explosion itself deals no Health Damage; a direct projectile hit is separate.

- **Capacity and replenishment**: Carry up to 3 grenades. While below maximum, every 20 accumulated kills within 12.5 metres restore 1 grenade; both Melee and Ranged Kills can count.

- **Replenishment example**: With 2 grenades and 19 qualifying kills accumulated, 1 more kill restores the third grenade and resets the counter. Kills while full do not increase the counter.

- **Needle pistol exception**: Enemies hit and tracked by the needle pistol can also count when they die from Toxin at Close Range.

[Source evidence and example assumptions](broker_blitz_flash_grenade.md)

---

<a id="broker_aura_gunslinger"></a>

## Gunslinger: base aura

- **Sharing**: When you or a teammate with this Aura in Coherency picks up Ammo, supply is shared with members in the picker's Coherency. Each member's own weapon capacity determines their amount; the picked-up rounds are not divided equally among them.

- **Small Ammo example**: Each member's maximum Ammo Reserve × 15% × 5%, rounded up. A maximum of 200 rounds receives ⌈1.5⌉ = 2 rounds; a maximum of 100 receives ⌈0.75⌉ = 1 round.

- **Large Ammo and Ammo Crates**: Large Ammo normally restores 50%; with a 200-round maximum, sharing gives 200 × 50% × 5% = 5 rounds. A standard deployed Ammo Crate uses maximum Ammo Reserve plus magazine capacity: with 200 + 30, sharing gives ⌈230 × 5%⌉ = 12 rounds, still capped by the deficit.

- **Duplicate effects**: Identical Auras do not stack. Gunslinger Improved replaces the base 5% with 10%. Shared supply does not trigger another sharing chain.

[Source evidence and example assumptions](broker_aura_gunslinger.md)

---

<a id="broker_passive_improved_sprint_dodge"></a>

## Like the Wind: base passive

- **Sprint Dodge**: The angle threshold falls from 70° to 55°. Attacks from somewhat more sideward directions can more easily count as having been Dodged by Sprinting.

- **After Stamina runs out**: Sprint Dodge can still trigger during Sprint overtime.

- **Consecutive Dodges**: Gain 1 additional Effective Consecutive Dodge before Dodge Distance starts to decay. The total depends on the weapon's Dodge settings.

- **Angle example**: When the smaller angle between the incoming direction and the forward/backward facing is 60°, it does not exceed the original 70° threshold. It exceeds the new 70° − 15° = 55° threshold, satisfying the sideward Sprint Dodge condition.

[Source evidence and example assumptions](broker_passive_improved_sprint_dodge.md)

---

<a id="broker_stimm_description_talent"></a>

## Cartel Special: dedicated stimm

- **Brewing**: Choose effects from the dedicated Stimm recipes. Recipes have their own 30-point budget, separate from ordinary talents.

- **Equipment condition**: Select at least one recipe to obtain the dedicated Stimm. Recipe effects apply after using it.

- **Recipe contents**: Combine effects such as Attack Speed, Power, Toughness and Combat Ability Regeneration. See the [Stimm recipes](README.md#broker_stimm_activation_talent) for detailed values.

[Source evidence and example assumptions](broker_stimm_description_talent.md)

---

<a id="broker_syringe"></a>

## Dedicated Stimm charge

- **Equipment condition**: Selecting any dedicated Stimm recipe grants it, with capacity for 1 use. Using it consumes that charge.

- **Effect duration**: The selected recipes last 15 seconds after injection. Long Lasting adds 5 seconds. This Stimm's natural regeneration pauses while its effect is active.

- **Recovery time**: Total recipe cost determines a recovery time from 15 to 75 seconds, starting after the effect ends. At 15 points, recovery is ⌈15 + 60 × (15 − 1) ÷ 29⌉ = 44 seconds; including the 15-second effect gives a total of 59 seconds.

- **Combat Ability combination**: Chemical Dependency shares the dedicated Stimm's recipe effects with teammates in its area. Duration depends on that ability's field and lingering effects.

[Source evidence and example assumptions](broker_syringe.md)

---
