# 榮耀獵手(Gloryhunter)：擲彈兵臂鎧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_gauntlet_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L58-L88)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L14)。
- 適用型號：擲彈兵臂鎧 布拉斯托姆 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：擲彈兵臂鎧 布拉斯托姆 Mk III。
- 本變體 I–IV：I 20%／II 25%／III 30%／IV 35%。
- 攻擊模式差異：Blastoom Mk III 的普通 action_one_pressed 先走 start_attack 並進入近戰蓄勢／揮擊；只有瞄準狀態才由 zoom_shoot 觸發 action_shoot_zoomed projectile（throw_type=shoot）。特殊輸入另接 melee_explosive 近戰，沒有獨立手擲動作。 瞄準射擊、近戰揮擊或爆炸近戰只在同一 item context 送出合格擊殺事件時符合。
- 瞄準榴彈的直接命中、撞擊／引信爆炸及特殊爆炸近戰的直接揮擊／爆炸均保留物品；延遲擊殺須在事件處理時仍持用臂鎧。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
