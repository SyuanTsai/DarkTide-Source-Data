# 掃射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_allow_flanking_and_increased_damage_when_flanking`／hash`955b61e0`；描述鍵`loc_trait_bespoke_allow_flanking_and_increased_damage_when_flanking_desc`／hash`96eca2d3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Raking Fire／掃射。

- 英文模板：{damage:%s} Damage when shooting Enemies in the back.

- 繁中模板：從背後射擊敵人時，增加{damage:%s}傷害。

- **靜態重建**：I級從背後射擊敵人時增加+32.5%傷害；IV級增加+40%傷害；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 觸發條件 | 同hash中英為shooting enemies in the back／從背後射擊 | [遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65) | 一致 | 只接受ranged且有效背面判定。 |
| I–IV數值 | trait format_values.damage讀stat_buffs.flanking_damage | 四trait等級覆寫，詳見各實作頁 | 一致 | 32.5/35/37.5/40%，不是template預設50%。 |
| 背面範圍 | 本體未列角度 | [遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65) | 文件未涵蓋 | dot>0涵蓋後半圈；正側面邊界不含。 |
| 傷害階段 | 本體只寫Damage／傷害 | [先精準後背面加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109)、[背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861) | 文件未涵蓋 | 包含finesse後的整筆damage，不只弱點額外部分。 |
| 同類組合 | 本體未列 | [加算型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L815-L821)、[條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) | 文件未涵蓋 | flanking_damage採基底1的加算。 |
| 持用與計時 | 本體未列 | [共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540)、[條件關鍵字套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L841) | 文件未涵蓋 | 靜態條件buff，切出停用，無疊層與倒數。 |
