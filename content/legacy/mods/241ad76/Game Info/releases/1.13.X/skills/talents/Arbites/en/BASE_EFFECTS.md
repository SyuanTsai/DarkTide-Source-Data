# Arbites base effects

[繁體中文](../BASE_EFFECTS.md) | [Talent guide](README.md) | [Source index](SOURCE_INDEX.md)

These effects come from the base character configuration. Combat abilities, Blitzes and auras can be replaced by the loadout.

<a id="adamant_area_buff_drone"></a>

## Nuncio-Aquila

- **Deployment and charge**: After deployment, the Nuncio-Aquila follows you and lasts 20s. The base ability has one charge and a 60s cooldown.

- **Allied Toughness**: Allies within 7.5m recover 5% of maximum Toughness per second. With maximum Toughness 100 and continuous presence in range, the theoretical recovery over 20s is 100 points, capped at missing Toughness.

- **Enemy damage taken**: Enemies in range take 15% more damage. Isolating this multiplier, damage 100 becomes 115.

[Source evidence and example assumptions](adamant_area_buff_drone.md)

<a id="adamant_command_dog_with_tag"></a>

## Cyber-Mastiff tag command

- **Target command**: Tagging an enemy with the companion command makes your Cyber-Mastiff prioritize that target. Input settings can use a single tap or double tap. One command target is retained at a time, with a maximum tag lifetime of 25s.

- **Priority**: If the owner is disabled, for example pinned by a Pox Hound or grabbed, rescue selection takes priority over the command target. Otherwise, the companion first tries a valid commanded target, then chooses targets automatically.

- **Limits**: An unaggroed Daemonhost is not a valid new command target. Entering a moving platform cancels the command. Target survival, attack eligibility and pathing still limit the actual chase.

[Source evidence and example assumptions](adamant_command_dog_with_tag.md)

<a id="adamant_companion_aura"></a>

## Companion Aura

- **Coherency membership**: The base passive lets your Cyber-Mastiff count as a squad member for Coherency.

- **Base scope**: This base aura does not directly apply a numerical effect such as Toughness Damage Reduction. The companion's Coherency eligibility and additional numerical aura bonuses are separate effects.

[Source evidence and example assumptions](adamant_companion_aura.md)

<a id="adamant_companion_damage_per_level"></a>

## Companion Damage per Level

- **Level scaling**: Your Cyber-Mastiff's non-Bleeding damage gains one sixth of the baseline damage for every full 5 levels. Levels 1–4 use multiplier 1; level 10 is approximately 1.33 and level 30 is 2.

- **Damage example**: With other conditions unchanged, an attack dealing 100 at low level becomes 100 × (1 + 2 ÷ 6) ≈ 133.33 at level 10 and 100 × 2 = 200 at level 30. Bleeding damage does not receive this multiplier.

[Source evidence and example assumptions](adamant_companion_damage_per_level.md)

<a id="adamant_grenade"></a>

## Arbites Grenade

- **Detonation and range**: Detonates on impact after being thrown. The explosion radius is 10m, with higher close damage in the central 2.5m and damage falloff farther out.

- **Damage example**: Isolating the central explosion armour stage, base damage 1,500 gives 1,500 × 1 = 1,500 against Unarmoured, 1,500 × 0.5 = 750 against Flak Armour and 1,500 × 0.2 = 300 against Carapace Armour. Hit location, blast obstruction and other damage modifiers still affect actual damage.

- **Capacity and replenishment**: Carry up to 3 grenades; each throw consumes one. The base ability has no timed replenishment. Selecting the improved talent-tree version raises capacity to 4.

[Source evidence and example assumptions](adamant_grenade.md)
