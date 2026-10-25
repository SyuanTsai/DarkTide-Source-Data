# 達姆彈：針彈手槍的來源候選

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 本頁保存交集外定義，未加入玩家適用武器表。

- 實作：`weapon_trait_bespoke_needlepistol_p1_consecutive_hits_increases_close_damage`。

- [I–IV覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L278-L327)：每層4.5／5／5.5／6%近距離傷害，沿用共用命中計數父Buff。

- [Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L24-L26)：父Buff的child_buff_template實際指向`weapon_trait_bespoke_laspistol_p1_consecutive_hits_increases_close_damage_child`，不是同檔宣告的針彈手槍child。

- 被引用的重型鐳射手槍子Buff仍clone共用damage_near子Buff，5層、stack_offset−1；不能把跨族群名稱自動改寫成針彈手槍。[引用子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L16-L18)。

- [MKVI模板匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793)保留此定義。

- [MKIV模板匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790)也保留此定義。

- 固定玩家UI與MasterItems138291快取包含針彈手槍武器項目，但快取沒有任何trait等於此實作的祝福項目。

- 缺少名稱、描述、圖示與限制欄位的項目關聯，保留缺口，不據此宣稱未使用。

- 共用計數與距離公式保留於[來源與公式](SOURCE_INDEX.md)；本候選的項目欄位不由其他武器代填。
