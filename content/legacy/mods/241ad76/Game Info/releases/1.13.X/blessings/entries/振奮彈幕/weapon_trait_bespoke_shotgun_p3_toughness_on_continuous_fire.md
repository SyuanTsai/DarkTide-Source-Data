# 振奮彈幕：獵人霰彈槍的來源候選

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 本頁保存交集外定義，未加入玩家適用武器表。

- 實作：`weapon_trait_bespoke_shotgun_p3_toughness_on_continuous_fire`。

- [I–IV覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L439-L477)：每步1／2／3／4%最大韌性；格式值10%總彈匣容量、最多5階。

- [Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L27-L30)使用共用10%射擊步幅；完整恢復與門檻執行鏈見[來源與公式](SOURCE_INDEX.md)。

- [阿卡特蘭「執行人」Mk III獵人霰彈槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L14)與[加入traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L986-L988)保留本定義。

- 固定玩家UI與MasterItems138291包含武器項目，但快取沒有任何trait等於此定義的祝福項目。

- 缺少名稱、描述、圖示與逐型號限制的項目關聯；不能由其他武器代填，也不據此判為未使用。
