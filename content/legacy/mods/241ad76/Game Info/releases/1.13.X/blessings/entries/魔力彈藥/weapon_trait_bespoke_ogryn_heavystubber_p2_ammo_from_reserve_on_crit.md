# 魔力彈藥：重伐木槍P2的來源候選

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 本頁保存交集外定義，未加入玩家適用武器表。

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_ammo_from_reserve_on_crit`。

- [I–IV覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L366-L399)：num_ammmo_to_move都為1；另有top-level reload_speed=.06/.09/.12/.15。

- [Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L58)clone共用備彈轉移模板；實際proc只讀num_ammmo_to_move，沒有讀reload_speed。[轉移執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

- 此top-level欄位沒有stat_buffs接入，不列成換彈速度效果。[stat接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L695-L747)。

- [P2 m1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796)保留本定義。

- [P2 m2匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817)保留本定義。

- [P2 m3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817)保留本定義。

- 三型號使用的六個射擊handling設定max_critical_shots皆1。[handling設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L891-L969)。

- 玩家UI與MasterItems138291有重伐木槍P2三個武器項目，但快取沒有trait等於本定義的祝福項目。

- 缺少名稱、描述、圖示與逐型號限制的項目關聯，不能由其他武器代填，也不據此判為未使用。
