# Ogryn base effects

[繁體中文](../BASE_EFFECTS.md) | [Ogryn talents](README.md) | [Source index](SOURCE_INDEX.md)

These effects come from the class's base configuration. Combat Abilities, Blitzes and Auras can be replaced through your build.

---

<a id="ogryn_charge"></a>

## Bull Rush

- **Charge and cooldown**: Charge forward up to 12m, knocking aside enemies along the path. One charge, base cooldown 25s. The base collision and end impact do not directly deal Health damage.

- **Stopping**: Collision with Carapace Armour, a Void Shield or specified resistant targets stops the charge. You can cancel by blocking after 0.5s or by moving backwards after 0.8s. Terrain also limits actual distance.

- **Post-charge bonuses**: After the charge ends, gain +25% melee Attack Speed and +25% Movement Speed for 5s. A scaled 1s action takes `1 ÷ 1.25 = 0.8s`; an original speed of 5m/s becomes 6.25m/s.

- **Protection during the charge**: Also gain 25% damage reduction while charging. With this effect alone, damage 100 becomes `100 × 0.75 = 75`. Other base protections resolve at their own stages.

[Source evidence and example assumptions](ogryn_charge.md)

---

<a id="ogryn_grenade_box"></a>

## Big Box of Hurt

- **Throwing**: Throw an entire box of grenades as a projectile at an enemy. Carry up to 3 boxes; throwing one leaves `3 − 1 = 2`. Boxes do not replenish automatically over time and require grenade supplies.

- **Damage example**: For the box's direct hit only, with no Critical Hit, Weakspot hit or other bonus, an Unarmoured target takes `1850 × 1 = 1850` damage; Carapace Armour takes `1850 × 0.15 = 277.5`.

- **Upgrade difference**: Under the ordinary base configuration, the box does not release grenades. Selecting Bombs Away! replaces it with the version that releases child grenades after a hit.

[Source evidence and example assumptions](ogryn_grenade_box.md)

---

<a id="ogryn_melee_damage_coherency"></a>

## Intimidating Presence

- **Aura effect**: You and allies in Coherency gain +7.5% melee damage.

- **Damage example**: With this bonus alone, base damage 100 becomes `100 × (1 + 7.5%) = 107.5`. With another +20% at the same stage, it becomes 127.5.

- **Replacement**: Selecting the upgraded melee aura changes the value to 10%; the two do not add to 17.5%. Other aura choices also replace this base aura.

### English description erratum

The original English says “Heavy Melee Attack Damage”, but the verified aura increases all melee damage. [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_coherency).

[Source evidence and example assumptions](ogryn_melee_damage_coherency.md)

---

<a id="ogryn_helping_hand"></a>

## Loyal Protector

- **Rescue protection**: Gain an uninterruptible effect while reviving a downed ally, pulling up a hanging ally, removing a net or rescuing a captured ally. It ends when the rescue interaction ends.

- **Push example**: While rescuing, incoming push speed falls to 10% of its original value. With other conditions unchanged, speed 10 becomes `10 × (1 − 90%) = 1`. This does not grant damage immunity.

[Source evidence and example assumptions](ogryn_helping_hand.md)

---

<a id="ogryn_base_tank_passive"></a>

## Thick Skin

- **Base reduction**: Reduce general damage by 20%, with a further 25% reduction to Toughness damage. Ignoring other modifiers, Health damage 100 becomes 80. Toughness damage passing through both stages becomes `100 × 0.8 × 0.75 = 60`.

- **Dodge protection**: Gain an additional 50% damage reduction while dodging, retained for 0.25s after the dodge ends. Counting only the base 20% and this 50%, damage 100 becomes `100 × 0.8 × 0.5 = 40`.

- **Consecutive dodges**: Starting another dodge within 0.25s of the previous dodge's end makes the two 50% reductions multiply during overlap. With the above base protection alone, general damage 100 becomes `100 × 0.8 × 0.5 × 0.5 = 20`; Toughness damage additionally multiplies by 0.75, giving 15.

- **Movement limits**: Remove the weapon's fixed movement slowdown. Aiming, attack actions and slowdowns from other sources follow their respective effects.

### English description erratum

The reconstructed English says “a further +40% Damage Resistance” while dodging. The verified additional reduction is 50%; the displayed 40% is the remaining general-damage fraction after base and dodge protection. [English comparison](LOCALIZATION_COMPARISON.md#ogryn_base_tank_passive).

[Source evidence and example assumptions](ogryn_base_tank_passive.md)

---

<a id="ogryn_dodge_stagger"></a>

## Outta My Way!

- **Trigger**: Dodging knocks aside ordinary human-sized enemies near the direction of movement. Elites, Specialists and large enemies are excluded. Each enemy is processed only once per dodge.

- **Area and strength**: The checked area is ahead in the dodge direction, with radius 1.5m. Greater distance and more consecutive dodges weaken the impact. It does not directly deal Health damage.

- **Strength example**: At a fixed enemy distance of 2m, the first dodge's impact Strength is `500 × (4 − 2) ÷ (2 × 1 − 1) = 1000`. The second gives `1000 ÷ 3 ≈ 333.3`. This Strength enters the stagger formula; it is not damage.

[Source evidence and example assumptions](ogryn_dodge_stagger.md)

---

<a id="ogryn_coherency_radius_increase"></a>

## Towering Presence

- **Coherency area**: Increase your Coherency radius by 50%. This does not increase the aura's damage or replenishment percentages.

- **Radius example**: If the original radius is 15m, it becomes `15 × (1 + 50%) = 22.5m`. With another +25% at the same stage, it becomes `15 × (1 + 50% + 25%) = 26.25m`.

[Source evidence and example assumptions](ogryn_coherency_radius_increase.md)
