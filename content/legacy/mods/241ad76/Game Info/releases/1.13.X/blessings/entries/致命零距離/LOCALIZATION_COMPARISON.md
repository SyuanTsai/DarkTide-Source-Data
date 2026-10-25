# 致命零距離：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_close_explosion`／hash`9fbc423b`；描述鍵`loc_trait_bespoke_close_explosion_desc`／hash`4823386b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Lethal Proximity／致命零距離。

- 文件名稱：致命零距離(Lethal Proximity)。

- 適用武器：爆彈手槍；描述鍵`loc_trait_bespoke_close_explosion_desc`／hash`4823386b`。

- 英文模板：Point blank shots cause an explosion. Explosion Radius increases by {radius:%s}.

- 繁中模板：零距離射擊會造成爆炸。爆炸範圍增加{radius:%s}。

- **靜態重建**：I–IV的 `{radius:%s}` 由實際半徑修正重建為+10%／+15%／+20%／+25%；歸零的爆炸啟動距離由持用條件提供；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW名稱與描述 | 同hash RAW：Lethal Proximity／致命零距離；Point blank shots cause an explosion. Explosion Radius increases by {radius:%s}.／零距離射擊會造成爆炸。爆炸範圍增加{radius:%s}。名稱9fbc423b、描述4823386b。 | 名稱與描述鍵及hash見本地固定Build RAW核驗；tier literal見weapon_traits_bespoke_boltpistol_p1.lua:428–469。 | 一致 | 百分比格式參數對應trait的tier stat override。 |
| I–IV範圍增幅 | RAW寫明爆炸範圍增加{radius:%s}，未列型號基礎半徑。 | weapon_traits_bespoke_boltpistol_p1.lua:428–469；Buff._calculate_override_data及Buff._calculate_stat_buffs，buff.lua:159–221、695–747。 | 一致 | I–IV逐級覆寫為+10%、+15%、+20%、+25%；tier值取代wrapper預設+10%。 |
| 歸零的啟動距離 | RAW稱零距離射擊會造成爆炸，未寫基礎啟動距離、距離起點或持用限制。 | weapon_traits_bespoke_boltpistol_p1_buff_templates.lua:20–32；ConditionalFunctions.is_item_slot_wielded:43–59；HitScan.process_hits:88–109。 | 文件未涵蓋 | 只有explosion_arming_distance_multiplier=0在手持該槽位時生效；M1/M2基礎分別5m/3m。 |
| 命中距離起點 | RAW使用Point blank，未指明量距起點。 | ActionShoot._prepare_shooting:403–449、ActionShoot.fixed_update:307–313；ActionShootHitScan._shoot:145–200；HitScan.process_hits:101–109。 | 文件未涵蓋 | hit.distance由射擊起點到物理命中點；射擊起點取first_person_component.position。 |
| 既有彈頭引爆條件 | RAW說零距離射擊會造成爆炸，沒有描述停彈、穿透或hit mass條件。 | boltpistol_hitscan_templates.lua:11–64；RangedAction.hitmass_explosion:86–141；HitScan.process_hits:214–247、288–320。 | 文件未涵蓋 | 歸零只讓命中通過armed-distance判斷；爆炸仍沿用武器既有命中質量、穿透停止等路徑，不為每個命中額外造一個爆炸。 |
| 裝備與切換狀態 | RAW未提及切換武器後的效果。 | weapon_tweak_templates.lua:168–190；PlayerUnitWeaponExtension.on_wieldable_slot_equipped/on_wieldable_slot_unequipped:633–693、on_wield/on_unwield:780–785；buff.lua:735–747。 | 文件未涵蓋 | 一般半徑stat在裝備時加入並於卸下才移除；只有歸零的條件stat受wielded-slot gate。 |
| 爆炸範圍套用對象 | RAW說明爆炸範圍增加，未說明是否僅限爆彈手槍。 | Explosion.radii:430–502；WeaponTweakTemplates._add_trait:168–190；PlayerUnitWeaponExtension:633–693。 | 文件未涵蓋 | 一般explosion_radius_modifier由攻擊者共用stat提供；只要手槍仍裝備，同一持有者的其他爆炸也會取得此半徑加成。 |
| 型號基礎半徑與近距離區 | RAW未按型號列半徑或近距離爆炸區。 | bolter_explosion_templates.lua:120–174、204–257；Explosion.radii:430–502。 | 文件未涵蓋 | Mk IV基礎半徑3m／近距離區0.75m；Mk VI為5m／1.75m；tier百分比同一套。 |
| 半徑對傷害結算的作用 | RAW只說範圍增加，未詳列傷害配置或衰減。 | Explosion.radii:486–500；WeaponSystem爆炸命中、close區與衰減:208–324。 | 文件未涵蓋 | 祝福不改damage profile或power；兩型號各自的close與一般profile相同，close半徑只擴大無距離衰減區；既有平方衰減使用新半徑。 |
| 掩體與友軍 | RAW未說掩體、玩家自身或隊友受爆炸影響。 | WeaponSystem:274–304；Explosion.create_explosion:173–186；四個boltpistol爆炸模板未設override_friendly_fire。 | 文件未涵蓋 | 爆炸仍做掩體檢查；此兩型號模板會排除施放者及盟友傷害。 |
| 腰射、瞄準與特殊攻擊 | RAW未列射擊模式或特殊攻擊差異。 | boltpistol_p1_m1.lua及boltpistol_p1_m2.lua:208–339、454–541。 | 文件未涵蓋 | 腰射和瞄準皆使用該型號hitscan；special action是weapon-butt sweep，不是彈頭爆炸。 |
| 適用型號與接入 | RAW祝福描述未列型號。 | 兩型號weapon template:import line 16、trait ukeys/append lines 769–771；inventory精確交集為同一trait、兩個mark bindings。 | 文件未涵蓋 | 同一trait實際綁定Mk IV及Mk VI，兩者模型差異保留於values_by_weapon。 |
