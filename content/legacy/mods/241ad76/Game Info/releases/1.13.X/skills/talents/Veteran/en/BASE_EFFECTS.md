# Veteran base effects

[繁體中文](../BASE_EFFECTS.md) | [Veteran talents](README.md) | [Technical index](SOURCE_INDEX.md)

These effects are provided by the class base configuration. The equipped Blitz and aura can change with talent selections. The starting Combat Ability is described under [Volley Fire](README.md#veteran_combat_ability_stance).

<a id="veteran_aura_gain_ammo_on_elite_kill"></a>

## Scavenger

- When you or an ally affected by this aura kills an Elite or Specialist Enemy, replenish 0.25% of maximum reserve Ammo for the killer and allies in the killer's Coherency. The aura has a 5s proc cooldown.
- With 400 maximum reserve rounds and sufficient room, one payout supplies `400 × 0.25% = 1 round`. Fractions of a round carry over to later payouts.
- Ammo goes into the reserve without loading the magazine. The replenishment ceiling is maximum reserve Ammo plus the magazine's missing rounds. Survivalist raises the aura rate to 0.5%; it replaces the 0.25% rate.

[Source evidence and example assumptions](veteran_aura_gain_ammo_on_elite_kill.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_gain_ammo_on_elite_kill) | [Back to talents](README.md)

---

<a id="veteran_base_ranged_damage"></a>

## Guardsman

- Gain 25% Ranged Damage, added to other damage bonuses at the same calculation stage.
- Assume stage base damage of 100, with other multipliers held at 1. With this effect alone, `100 × (1 + 25%) = 125 damage`. With another 15% ranged bonus at the same stage, `100 × (1 + 25% + 15%) = 140 damage`.

[Source evidence and example assumptions](veteran_base_ranged_damage.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_base_ranged_damage) | [Back to talents](README.md)

---

<a id="veteran_cover_peeking"></a>

## Low Profile

- While crouched behind suitable cover, use Aim Down Sights with a weapon that supports peeking to raise your view over the cover.
- Cover must be close enough and within the permitted height range. Peeking stops when you leave the cover, lose the required conditions or stop aiming.

[Source evidence and example assumptions](veteran_cover_peeking.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_cover_peeking) | [Back to talents](README.md)

---

<a id="veteran_frag_grenade"></a>

## Frag Grenade

- Carry 3 Frag Grenades. A thrown grenade detonates after approximately 1.7s. The blast radius is 10m, with a 2m high-damage centre and damage falloff toward the edge.
- With no other bonuses or hit-location modifiers, the central blast has 500 base damage against an Unarmoured target. Its Carapace Armour multiplier is 0.2, giving `500 × 0.2 = 100 damage`.
- Shredder Frag Grenade adds Bleed to qualifying explosion hits. Krak Grenade or Smoke Grenade replaces the equipped grenade type. The base Frag Grenade has no built-in Bleed effect.

[Source evidence and example assumptions](veteran_frag_grenade.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_frag_grenade) | [Back to talents](README.md)

---

<a id="veteran_supression_immunity"></a>

## Determined

- Enemy fire does not cause you to accumulate Suppression.
- This immunity does not reduce damage from bullets that hit you or grant immunity to knockback, being knocked down or other control effects.

[Source evidence and example assumptions](veteran_supression_immunity.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_supression_immunity) | [Back to talents](README.md)

---

<a id="veteran_survivalist_passive"></a>

## Practiced Efficiency

- Your Elite or Specialist kills replenish 1% of your maximum reserve Ammo, at most once every 5s.
- With 400 maximum reserve rounds and sufficient room, one payout supplies `400 × 1% = 4 rounds`. Fractional rounds carry over; Ammo goes directly into the reserve without loading the magazine.
- This personal payout is separate from Scavenger or Survivalist. If the 1% passive and the 0.5% Survivalist aura both apply to the same kill, a 400-round maximum reserve gives `400 × (1% + 0.5%) = 6 rounds` for you, subject to the replenishment ceiling.

[Source evidence and example assumptions](veteran_survivalist_passive.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_survivalist_passive) | [Back to talents](README.md)

---
