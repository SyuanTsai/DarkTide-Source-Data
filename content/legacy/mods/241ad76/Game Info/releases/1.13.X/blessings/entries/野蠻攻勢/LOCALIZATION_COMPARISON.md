# 野蠻攻勢：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

Steam Build25606770（1.13.1），2026-10-02擷取，資源content/localization/items。名稱鍵`loc_trait_bespoke_infinite_cleave_on_weakspot_kill`／hash`4ae27066`；描述鍵`loc_trait_bespoke_infinite_cleave_on_weakspot_kill_desc`／hash`8bb0d3c8`。兩語系以同一資源及hash配對並與完整RAW逐值核對；RAW SHA-256 `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Brutal Momentum／野蠻攻勢。
- 英文模板：{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.
- 繁中模板：弱點傷害增加{weakspot_damage:%s}，同時弱點傷害無視敵人的順劈抗性。
- **靜態重建**：第四組weakspot_damage為+15%；不是遊戲截圖。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 命中或擊殺 | hash8bb0d3c8：英文Weakspot Kills；繁中弱點傷害無視 | result=died且hit_weakspot；[分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1421) | 明確矛盾 | 繁中把擊殺改成傷害，未擊殺不成立。 |
| 弱點數值 | weakspot_damage占位符 | 7.5／10／12.5／15%；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L114-L153) | 一致 | 兩變體同值，額外部分解釋另列。 |
| 整次傷害 | Weak Spot Damage未解釋部位 | 只調整finesse額外部分；[計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L713-L782) | 文件未涵蓋 | 不是15%整次增傷。 |
| 擊殺名額與歐格林 | 模板未列 | 前三次總擊殺且not ogryn；[歐格林](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1364-L1365)、[回退](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1421) | 文件未涵蓋 | 一般性文案未列實作例外。 |
| 質量與後續目標 | ignore Enemy Hit Mass | 回退本次質量、解除abort且不更新target_index；[分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1428) | 一致 | 不是改整場敵人的質量。 |
| 持續、首次、切換 | 模板未列持續秒數 | 持用條件普通buff；[定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L428-L439) | 文件未涵蓋 | 無3秒倒數，首擊可生效。 |
| 可取得等級 | 四組定義 | 需後端有效位元；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | 維持null。 |

未執行遊戲內驗證。MOD只作格式參考，不作名稱、機制或本體原文證據。


## 同名相近描述鍵

RAW另有`loc_trait_bespoke_infinite_melee_cleave_on_weakspot_kill_desc`（hash399cce97），繁中明寫「弱點攻擊擊殺」。但本次戰鬥斧／戰術斧MasterItems的description均指向不含melee的`loc_trait_bespoke_infinite_cleave_on_weakspot_kill_desc`（hash8bb0d3c8）。因此按實際項目引用比較，不以相似trait ID選擇原文；替代鍵的存在不證明目前玩家看到的文字已修正。
