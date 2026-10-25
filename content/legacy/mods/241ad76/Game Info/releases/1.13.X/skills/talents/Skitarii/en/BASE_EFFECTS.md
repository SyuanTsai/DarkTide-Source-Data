# Skitarii base effects

[繁體中文](../BASE_EFFECTS.md) | [Skitarii talents](README.md) | [Source index](SOURCE_INDEX.md)

These effects are supplied by the base character configuration. Combat Ability, Blitz and Aura can be replaced according to the loadout.

---

<a id="cryptic_discharge_base"></a>

## Voltaic Expander

- **Consumption**: Spend the **1–3 full charges** currently available, up to **3** in one activation. Partial progress and any full charges beyond three remain.
- Spending **1 charge** gives a **6-metre** radius; **2 charges**, **9 metres**; **3 charges**, **12 metres**.
- The discharge Electrocutes enemies in range for **2 seconds**, causing ongoing damage. Actual Health damage varies with enemy armour and damage calculation.
- **Charge example**: Starting with **2.4 charges**, spend **2** and retain **0.4**. If other talents allow **4.4 charges**, spend **3** and retain **1.4**.

[Source evidence and example conditions](cryptic_discharge_base.md)

---

<a id="cryptic_passive_cooldown_regen"></a>

## Motive Engine

- Capacitance percentages use **one Combat Ability charge**. Natural recovery is **2% per second**, so one full charge takes **50 seconds**; three empty charges take **150 seconds** to refill.
- **Kill recovery**: An ordinary kill restores **2% of one charge**; an Elite or Specialist kill restores **4%**. At **50 points per charge**, these are `50 × 2% = 1` point and `50 × 4% = 2` points. This kill recovery is not increased by **Redline Capacitors**.
- While **Advanced Combat Doctrine** is active, kills do not trigger this additional recovery; the stance itself spends Capacitance.

[Source evidence and example conditions](cryptic_passive_cooldown_regen.md)

---

<a id="cryptic_servo_skull_order"></a>

## Servo-Skull

- **Companion**: Your Servo-Skull follows you and shoots enemies in combat. Activating its ability halves its firing interval and increases its damage by **25%** for **8 seconds**.
- **Empowered hits**: During empowerment, a Servo-Skull hit makes the target take **15% more damage** for **5 seconds** and applies **1 Burn stack**, up to **8**. At the cap, another hit refreshes the Burn duration.
- **Uses and cooldown**: The ability has **1 use** and a **16-second** cooldown. Cooldown recovery pauses during the **8-second** empowerment; without other cooldown modifiers, approximately **16 seconds** of recovery remain after empowerment ends.
- **Commands**: Double-tap the Tag input to order the Servo-Skull to attack a tagged enemy. Normally, at least **0.3 of one Capacitance charge** is required for a shooting command. Double-tapping can also order it to operate a hackable mission device; this does not spend the ability use.
- **Cooldown example**: An **8-second** pause followed by **16 seconds** of recovery gives approximately `8 + 16 = 24` seconds from activation to availability.
- **Damage and firing-rate example**: With no other effects, damage **100** becomes `100 × 1.25 = 125`; a **3-second** firing interval becomes `3 × 0.5 = 1.5` seconds.

[Source evidence and example conditions](cryptic_servo_skull_order.md)

---

<a id="cryptic_coherency_regen_aura"></a>

## Resurgence

- **Operation**: You and allies within Coherency can regenerate Toughness even with enemies nearby. The Coherency recovery rate is at least **25% of its normal rate**.
- **Example**: If normal Coherency regeneration is **10 points/second**, the minimum rate in combat is `10 × 25% = 2.5` points/second, recovering **10 points over 4 seconds**. Actual recovery still depends on weapon, movement, other recovery modifiers, recovery delay and missing Toughness.
- **Recovery conditions**: The normal post-damage recovery delay must finish and normal Coherency regeneration must be available. This effect does not remove the delay or raise Toughness above its maximum.

[Source evidence and example conditions](cryptic_coherency_regen_aura.md)
