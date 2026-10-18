# Technical claim analysis

This generated English analysis summarizes structured Source claim records and their linked safe evidence summaries. It states only the supplied contract data.

## Claim `darktide:claim:psyker:brain-burst-improved-normal-charge-base-time`

- Game release: `darktide:1.13.2`
- Property: `action.psyker_smite.action_charge_target.default_charge_time`
- Target: `darktide:1.13.2:darktide:skill:psyker:brain-burst-improved`
- Known value: `3` `s`
- Basis: `code-observed`
- Review state: `pending`
- Context (JSON): `{}`
- Evidence:
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-normal-charge-base-time-legacy-analysis`: The archived analysis records a 3-second normal-charge default when smite_attack_speed=1. Under the described non-target-locked update conditions, charging and Peril can begin before a valid target is acquired. This is a template-level observation, not a universal runtime time.
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-lock-on-charge-legacy-analysis`: A fresh lock-on charge requires a valid Smite target and uses the normal 3-second default. Chaining can preserve current charge level, while changing the target resets the charge timer. If a target supports Smite stagger, more than 0.25 seconds locked applies one small stagger; these are bounded branch observations, not universal runtime timing.
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-combined-charge-and-peril-example-legacy-analysis`: Under the archived no-buff assumptions with smite_attack_speed=1, full charge is estimated at 20% Peril; a successful hit adds the 25% base cost for 45% total. Holding full charge for another second adds 9%/s. These are template-based estimates, not measured runtime outcomes.

## Claim `darktide:claim:psyker:brain-burst-improved-smite-damage-multiplier`

- Game release: `darktide:1.13.2`
- Property: `template.stat_buffs.smite_damage_multiplier`
- Target: `darktide:1.13.2:darktide:skill:psyker:brain-burst-improved`
- Known value: `1.5` `ratio`
- Basis: `code-observed`
- Review state: `pending`
- Context (JSON): `{}`
- Evidence:
  - `darktide:1.13.2:darktide:evidence:psyker:brain-burst-improved-smite-damage-multiplier-code`: At the fixed upstream commit, the psyker_brain_burst_improved template assigns the code literal 1.5 to stat_buffs[stat_buffs.smite_damage_multiplier]. This evidence supports only the parameter value; downstream damage outcome and runtime application are unverified.
  - `darktide:1.13.2:darktide:evidence:psyker:brain-burst-improved-smite-damage-calculation-code`: At the fixed upstream commit, the damage calculation checks damage_type == damage_types.smite, reads attacker_stat_buffs.smite_damage_multiplier on that branch, and multiplies the parameter into damage_multiplier (lines 506-514). This records the bounded conditional and multiplication relation only; other calculation stages and final damage are not resolved.
  - `darktide:1.13.2:darktide:evidence:psyker:smite-action-damage-type-code`: At the fixed upstream commit, the psyker_smite_kill damage target in the psyker_smite action uses damage_types.smite (lines 538-562). This links the selected action to the shared calculation branch condition only; it does not establish runtime resolution or final damage.
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-legacy-analysis-smite-damage-multiplier`: The archived analysis identifies a 1.5 Smite damage multiplier and relates it to the Smite-only calculation branch. This is a bounded parameter relationship, not a final-damage result.

## Claim `darktide:claim:psyker:brain-burst-improved-sticky-charge-base-time`

- Game release: `darktide:1.13.2`
- Property: `action.psyker_smite.action_charge_target_sticky.charge_time`
- Target: `darktide:1.13.2:darktide:skill:psyker:brain-burst-improved`
- Known value: `2` `s`
- Basis: `code-observed`
- Review state: `pending`
- Context (JSON): `{}`
- Evidence:
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-sticky-charge-base-time-legacy-analysis`: The archived analysis records a 2-second sticky charge when smite_attack_speed=1, after acquiring a valid lockable target; target-locked mode cannot precharge or switch targets while the lock is maintained. If the target supports Smite stagger, maintaining the lock for 1 second applies one small stagger.
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-combined-charge-and-peril-example-legacy-analysis`: Under the archived no-buff assumptions with smite_attack_speed=1, full charge is estimated at 20% Peril; a successful hit adds the 25% base cost for 45% total. Holding full charge for another second adds 9%/s. These are template-based estimates, not measured runtime outcomes.

## Claim `darktide:claim:psyker:brain-burst-improved-successful-hit-base-peril-ratio`

- Game release: `darktide:1.13.2`
- Property: `charge_template.psyker_smite_use_power.warp_charge_percent`
- Target: `darktide:1.13.2:darktide:skill:psyker:brain-burst-improved`
- Known value: `0.25` `ratio`
- Basis: `code-observed`
- Review state: `pending`
- Context (JSON): `{}`
- Evidence:
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-successful-hit-base-peril-legacy-analysis`: The archived analysis records a 0.25 base Peril parameter paid only after successful damage; empty casts and misses do not enter that payment branch. The described payment is independent of charge level because the template does not enable use_charge.
  - `darktide:1.13.1:darktide:evidence:psyker:brain-burst-improved-combined-charge-and-peril-example-legacy-analysis`: Under the archived no-buff assumptions with smite_attack_speed=1, full charge is estimated at 20% Peril; a successful hit adds the 25% base cost for 45% total. Holding full charge for another second adds 9%/s. These are template-based estimates, not measured runtime outcomes.
