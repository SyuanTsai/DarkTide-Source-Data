# 暴走：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 此祝福改 melee_power_level_modifier；Power Level 先依攻擊類型套 Power Type curve，再乘修正。該修正參與 attack、impact、cleave 威力計算，影響傷害、削韌和掃擊穿透質量上限；profile／曲線決定實際結果，不等同最終傷害固定百分比。
- 一般七類四級值 0.24/0.28/0.32/0.36，卡面 +24/+28/+32/+36%；穿音速雙刀 0.09/0.12/0.15/0.18，卡面顯示 9%/12%/15%/18%，formatter 不加「+」前綴。
- 算例將 100 設為已過 Power Type curve、尚未套用本項的近戰 Power Level；一般武器 IV 得 136，穿音速雙刀 IV 得 118。這是威力中間值，不是最終傷害、削韌或穿透結果。

- 八個實際 trait ID 對應同一 name key；inventory、UI／RAW 收據相符，18 個 weapon/mark/trait 三元組，outside exact 清單為空；來源中未綁定定義不計入實際範圍。
- 八個 own tier 區段逐項核對四級與期限；七類 24/28/32/36%，穿音速雙刀 9/12/15/18%；八個 wrapper 直接 clone common base。
- 18 個 actual weapon action table 逐一讀取；都有 melee sweep 和純 push，沒有 projectile 或 throw。特殊攻擊要實際走 sweep 才送合格 melee hit。
- 英文與繁中 RAW 同 resource/hash；formatter 靜態重建每級完整句子；威力修正影響傷害、削韌與穿透曲線，不把中間 Power Level 當最終結果。
- RAW 未列同一物品、held slot、存活目標、純推擊排除及計算層級；均標「文件未涵蓋」，沒有當成翻譯矛盾。
