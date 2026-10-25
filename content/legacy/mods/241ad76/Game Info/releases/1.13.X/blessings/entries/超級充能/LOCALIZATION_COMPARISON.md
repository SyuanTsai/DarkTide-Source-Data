# 超級充能：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_armor_rend_on_activated_attacks`／hash`ede57171`；描述鍵`loc_trait_bespoke_armor_rend_on_activated_attacks_desc`／hash`814feacc`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Supercharge／超級充能。

- 文件名稱：超級充能(Supercharge)。

- 適用武器：動力錘、動力劍、機械神教動力劍；描述鍵`loc_trait_bespoke_armor_rend_on_activated_attacks_desc`／hash`814feacc`。

- 英文模板：{rend:%s} stacks of Brittleness on Energised Hit.

- 繁中模板：施放充能打擊會疊加{rend:%s}脆弱。

- **靜態重建**：動力劍I–IV將rend替換為1／2／3／4；動力錘替換為10／12／14／16，保持中英充能命中與脆弱的原文規則；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 加層數值 | {rend:%s} stacks／疊加{rend:%s}脆弱 | 三個逐武器trait覆寫，詳見等級來源 | 武器差異 | 兩動力劍1/2/3/4，動力錘10/12/14/16；是層數而非傷害百分比。 |
| 充能命中 | Energised Hit／充能打擊 | [special gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1191-L1192)、[參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L620) | 條件更精確 | 由命中的damage profile.weapon_special決定；充能啟動但未命中不疊層。 |
| 每層、上限與期限 | 模板未列 | [目標Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) | 文件未涵蓋 | 每層2.5%，最多16層40%，共享5秒且合格命中刷新。 |
| 施加時序 | 未列 | [先傷害再事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) | 文件未涵蓋 | 不回溯當擊；排隊事件處理後新層數生效。 |
| 動力錘爆炸 | 原文未區分 | [爆炸profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/settings_templates/ogryn_power_maul_damage_profile_templates.lua#L2250-L2382) | 範圍更精確 | 近戰充能profile有special旗標，爆炸profile沒有；爆炸不新增本祝福層數。 |
| 傷害與隊友 | 只寫Brittleness／脆弱 | [consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) | 文件未涵蓋 | 效果在敵人身上供後續符合裝甲結算的攻擊受益；不是固定最終傷害倍數。 |
