# 歎為觀止(Showstopper)：磷光爆破手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_phosphor_pistol_p1_chance_to_explode_elites_on_kill`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L473-L513)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L25-L35)。

- 適用型號：磷光爆破手槍 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"proc_chance_on_qualifying_kill_event": [0.14, 0.16, 0.18, 0.2], "display_percent_by_tier": [14, 16, 18, 20], "eligible_target_tags": ["elite", "special"], "critical_hit_required": false, "cooldown_seconds": null, "requires_same_attacking_item_as_trait_item": true, "requires_currently_wielded": false, "source_available_tiers": null, "defined_tiers": ["I", "II", "III", "IV"], "proc_chance": [0.14, 0.16, 0.18, 0.2], "display_percent": [14, 16, 18, 20], "fire_buff_id": "phosphor_burn", "required_target_keywords": ["burning"], "burn": {"duration_seconds": 20, "interval_seconds": 0.55, "max_stacks": 1, "damage_profile": "phosphor_burning", "damage_type": "burning", "source_item_forwarded_to_attack": true}, "explosion_template": "trait_buff_phosphor_pistol_p1_minion_explosion", "explosion": {"static_power_level": 600, "min_radius": 0.5, "radius": 4, "damage_falloff": true, "damage_profile": "default_grenade", "radius_scope": "base radius before common explosion_radius_modifier", "resolved_close_radius": 0}, "weapon_type_restriction": ["phosphor_pistol_p1"]}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
