# 煉獄：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_burninating_on_crit`／hash`fa25b219`；描述鍵`loc_trait_bespoke_burninating_on_crit_desc`／hash`ffdeaeb7`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Infernus／煉獄。

- 文件名稱：煉獄(Infernus)。

- 適用武器：步兵鐳射槍、冥潮鐳射槍、重型鐳射手槍、重伐木槍、磷光爆破手槍；描述鍵`loc_trait_bespoke_burninating_on_crit_desc`／hash`ffdeaeb7`。

- 英文模板：{stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s).

- 繁中模板：造成致命一擊時疊加{stacks:%s}層燃燒，最多疊加{max_stacks:%s}層。

- **靜態重建**：本體RAW content/localization/items：loc_trait_bespoke_burninating_on_crit EN Infernus／zh-TW 煉獄，hash fa25b219；loc_trait_bespoke_burninating_on_crit_desc EN {stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s).／zh-TW 造成致命一擊時疊加{stacks:%s}層燃燒，最多疊加{max_stacks:%s}層。，hash ffdeaeb7。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件 | 本體描述「Critical Hit／致命一擊」。 | [Base on_hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1794-L1809)；同item、遠程暴擊、正傷害、持用槽位；[添加時存活](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L48-L90) | 文件未涵蓋 | 補足暴擊以外的必要條件。 |
| I–IV層數 | 本體以stacks/max_stacks占位。 | [磷光tier差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L121-L173)；另外四變體新增1/2/3/4與上限3/6/9/12。 | 一致 | 磷光新增2/3/4/5、上限4/9/12/15，依各武器tier重建。 |
| 刷新與逐層消退 | 本體未列持續時間。 | [目標模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L76)；[先傷害再請求移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) | 文件未涵蓋 | 基礎4秒刷新期限後逐0.5秒節拍移除一層；owner燃燒持續時間倍率可延長期限。 |
| 共用層數 | 本體描述本級堆疊上限。 | [自身上限與現有層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L66-L77)；[零次添加](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L416) | 文件未涵蓋 | 與同模板其他來源共用；大於本級cap不添加、不刷新。 |
| 特殊攻擊與爆炸 | 本體泛稱暴擊。 | [遠程旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L340-L344)；[背爆炸profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_damage_profile_templates.lua#L181-L205) | 文件未涵蓋 | 主彈直接命中可觸發；近戰特攻及磷光背爆炸不行。 |
| 燃燒傷害 | 本體未列HP數值。 | [燃燒公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L63-L74)；[傷害profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328) | 文件未涵蓋 | 層數、power_level輸入與最終HP傷害分開。 |
