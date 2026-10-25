# 專注引導：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `m_action` 為動作原本的移動速度倍率，`c` 為祝福階級的懲罰剩餘倍率（I–IV 為 `.8/.7/.6/.5`）。只在本項 conditional stat 有效，且目前 action kind 屬原生 `CHARGE_ACTIONS` 時，`m_charge=1-(1-m_action)×c`；替代射擊倍率另行相乘。它改變的是原有懲罰，不是把數字直接加到速度上。

英文與繁中 RAW 使用相同 description key `loc_trait_bespoke_uninterruptable_while_charging_and_movement_desc`、hash `380bf3a7`。四個 own formatter 均以 `100-round(value×100)` 顯示 20/30/40/50%；數字與格式相符。RAW 未列 action-name、持用、CHARGE_ACTIONS 消費條件及明確忽略免疫例外；這些分類為文件未涵蓋，不將省略改寫成相反限制。
