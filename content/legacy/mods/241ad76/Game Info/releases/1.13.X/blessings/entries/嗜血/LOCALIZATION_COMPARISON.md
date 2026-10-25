# 嗜血：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_guaranteed_melee_crit_on_activated_kill`／hash`0afad738`；描述鍵`loc_trait_bespoke_guaranteed_melee_crit_on_activated_kill_desc`／hash`9efa2a9e`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Bloodthirsty／嗜血。

- 文件名稱：嗜血(Bloodthirsty)。

- 適用武器：突擊鏈斧、重型開膛劍、突擊鏈鋸劍、烈焰力場劍、機械神教動力劍；描述鍵`loc_trait_bespoke_guaranteed_melee_crit_on_activated_kill_desc`／hash`9efa2a9e`。

- 英文模板：{crit_chance:%s} Critical Chance on your next Melee Attack after Special Attack Kill.

- 繁中模板：使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加{crit_chance:%s}。

- **靜態重建**：依固定 RAW 描述與各型號實際 formatter，以下為 I–IV 靜態重建：

- 鏈斧、重型開膛劍、突擊鏈鋸劍、烈焰力場劍使用 abs(value)×10：
  - I：+40% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+40%。
  - II：+60% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+60%。
  - III：+80% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+80%。
  - IV：+100% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+100%。

- 布蘭克斯 P3 使用 abs(value)×5：
  - I：+10% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+10%。
  - II：+20% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+20%。
  - III：+30% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+30%。
  - IV：+40% Critical Chance on your next Melee Attack after Special Attack Kill.／使用特殊攻擊擊殺敵人後，下一次近戰攻擊暴擊幾率增加+40%。

英文 RAW 模板原始資源尾端保留一個 ASCII 空白；這裡不在 Markdown 行尾保留空白。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW 階梯與格式器 | RAW key loc_trait_bespoke_guaranteed_melee_crit_on_activated_kill_desc，hash 9efa2a9e；EN/ZH 保留原文。 | 五個各自 own-tier ranges；trait_value_parser.lua:7-31。 | 四個實作依序重建 +40/+60/+80/+100%；Branx P3 +10/+20/+30/+40%。 | 前四類 formatter abs(value)×10；P3 abs(value)×5；兩者以百分比顯示並加正號。 |
| 特殊擊殺的真實條件 | RAW 說 Special Attack Kill。 | base_weapon_trait_buff_templates.lua:1076-1106；CheckProcFunctions.lua:568-570,721-727；Attack.lua:669-710。 | 相符武器在持用槽且造成敵人死亡，且該傷害profile.weapon_special=true才觸發。 | 特殊標記來自命中的profile，不只看按鍵；未死亡不觸發。 |
| 普通鋸擊黏附與特殊攻擊分野 | RAW未逐項說明武器攻擊profile。 | chain_axe_damage_profile_templates.lua:232-278,376-541；chain_sword_2h_damage_profile_templates.lua:621-729；chain_sword_damage_profile_templates.lua:364-552。 | 鏈斧普通sticky不帶weapon_special；2H開膛劍與Cadia部分ordinary sticky帶weapon_special且可由on_kill啟動，即使skip_on_hit_proc=true。 | on_hit guard與on_kill是分離分支；按profile標記及death結果分類，不依動作名稱推定。 |
| Tier落地、層數上限與期限 | RAW階梯值不描述內部Buff層數。 | 各own tier與wrapper；base_weapon_trait_buff_templates.lua:1107-1160；BuffExtensionBase.lua:412-415,450-457,560-589。 | 鏈斧每層+10pp／max10；P3每層+5pp／max8；其餘三者是max1關鍵字。 | 內部效果各5秒；重複加入受max_stacks限制，定義未設疊層刷新期限旗標。 |
| 首次生效、消耗與阻斷 | RAW稱下一次近戰攻擊。 | attack.lua:669-710；action_sweep.lua:220-224,288-298；ActionWeaponBase.lua:148-181。 | 擊殺後新增；percent effects由on_sweep_start消耗，keyword由on_critical_strike消耗；禁止爆擊優先。 | 本次造成擊殺的傷害先完成；trigger需要slot/item gate，內部效果在期限或消耗前可跨槽保留。 |
