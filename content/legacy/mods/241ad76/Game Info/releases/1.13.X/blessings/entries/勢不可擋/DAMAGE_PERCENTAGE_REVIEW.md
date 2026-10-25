# 勢不可擋：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `d` 為 tier 覆寫的 `melee_fully_charged_damage`，`B` 為符合條件攻擊在本祝福增量前的傷害計算值。I–IV 的 `d` 依序為 `0.025`、`0.05`、`0.075`、`0.10`；本項直接增量為 `B × d`。只有 auto-completed、近戰且 profile 為 heavy 的攻擊才把此 stat 加入傷害計算。這是傷害增量，不是百分點、命中數加成或不受其他乘數影響的最終傷害。

靜態 UI formatter 將這四個比例格式化為 +2.5%、+5%、+7.5%、+10%；RAW 使用 `{damage:%s}` 占位符。貫穿效果是獨立的常數關鍵字，不應換算成傷害百分比。裝甲例外是第三個獨立的條件關鍵字，也不改變 damage stat 或最大 hit mass。

固定來源為 Darktide-Source-Code Release 1.13.1、commit `7e662fcda16219d775b84af50322be2e9cd9d62e`。研究把本體同 hash 的 locale 0／16 RAW、inventory 綁定、玩家 UI 型號、三份完整 tier formatter、三份直接 ProcBuff wrapper 與實際 ActionSweep／damage consumers 配對；數值及行為不由 trait 名稱或 weapon suffix 推定。算例將假設基礎傷害與實際增量分開，並以來源限制最終傷害解讀。

本頁分開說明裝備期普通 stat/常數 keyword、持用期 armor-abort 條件 keyword、完全蓄力 damage gate、M2 direct push-follow 的 heavy-profile 例外，以及 Crowbar sticky 後續傷害不帶 auto-complete 的邊界。RAW 未寫出的 armor-abort 條件列為文件未涵蓋；不將其判為翻譯矛盾。
