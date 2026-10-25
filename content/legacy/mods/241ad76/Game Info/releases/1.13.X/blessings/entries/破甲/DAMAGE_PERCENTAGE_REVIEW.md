# 破甲：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- **傷害修正池**：令 p 為本祝福值、q 為其他 damage-stat 修正總和、B 為該重擊在這個修正池前的基礎傷害，d 為之後目標承傷與其他乘數。程式將 p 加入同一傷害修正池，示意式為 B × (1 + q + p) × d；不是把最後生命值無條件乘上 (1+p)。
- **等級值**：P1 p ∈ {0.05, 0.10, 0.15, 0.20}；P3 p ∈ {0.04, 0.06, 0.08, 0.10}。實際門檻是武器在手、特殊狀態 active、melee 且 profile strength heavy。
- **隔離算例**：令 B=100 是非弱點、非爆擊的修正池前傷害，q=0 且 d=1；P1 IV 得 100 × (1+0.20)=120，P3 IV 得 100 × (1+0.10)=110。若有其他同池修正，p 只作加算；若有額外傷害、弱點／爆擊與目標承傷乘區，需另代入完整公式。
- **受擊質量與中止**：對合資格活著敵方 breed character，hit_mass' = hit_mass × 0.25 × target_hit_mass_modifiers；動作仍以 current_amount + target_hit_mass × action_armor_hit_mass_mod 累計。略過 armor-abort 不會關閉 max_hit_mass 或 breed-abort。

英文 RAW 的 Increased Cleave 與實作的掃擊穿透能力相符；繁中 RAW 的「提高順劈攻擊傷害」容易被理解為增加揮擊傷害，但 source 只證實 armor-abort bypass 與合資格受擊質量降低，輕斬沒有直接傷害加成。近戰重擊另按 P1/P3 own tier 加入 damage-stat pool。細分持用／特殊狀態、profile strength、目標 mass 分支及 tier fallback 均為文件未涵蓋，不是額外 RAW 矛盾。

原文「順劈攻擊傷害」未明列所有輕擊另獲固定直接加成，故不由含糊用詞建立明確矛盾勘誤；正文與比較依已證穿透、實際重擊強度、同池傷害修正與例外範圍陳述。
