# 撕扯震盪：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 c 為 ChargeActionModule 產生並傳入命中事件的蓄力值（本型號路徑限制在 0–1），T 為所選級別的滿蓄力請求層數（I–IV 為 2／4／6／8）：

n_req = round(c × T)

若目標目前有 s 層本效果且尚未達上限，新增層數為 n_add = min(n_req, 16 − s)；若已滿 16 層，正數請求不增加層數，但全域加層路徑仍刷新期限。單層脆弱值為 0.025，所以此效果的目標端貢獻為 0.025 × stack_count，最高 0.40。

傷害消費端將目標 rending_multiplier 與攻擊者及其他情境的 rending 因子相加後封頂，並再乘護甲類型係數；傷害公式使用這個結果與該傷害 profile 的護甲傷害係數。因而 +0.10 是目標脆弱 stat 的增量，不等於整次攻擊傷害直接提高 10%。同次爆炸先計算傷害，再處理 on-hit 並添加脆弱；只有後續傷害能使用新加的層數。

- 護甲段令 B 為護甲乘算前傷害、A 為原始護甲傷害倍率、r 為總穿透增量封頂 1 後乘該護甲穿透係數、o 為超額穿透係數。A≥1 時新倍率為 A+r×o；A<1 且 r>1−A 時為 1+(r−(1−A))×o；其餘為 A+r。護甲段傷害為 B×新倍率，之後仍有 finesse、背刺／側襲、部位、DoT與護甲修正、遞減及力場覆寫。算例將這些後續因素排除，才可把該結果視為最終傷害。
- armored／super_armor／resistant／berserker 的穿透係數為1、超額係數為0.25；缺少設定的護甲類別按0處理，不能把40%脆弱套成固定全傷害倍率。

- 固定 SHA 的 trait tiers、完整自訂 wrapper、全域目標 Buff、武器動作與綁定、on-hit producer／consumer、Buff 疊層及護甲 rending 消費路徑均已核對；唯一 binding 與 icon receipt 以實際快照確認。
- target_buff_data.max_stacks=31 不是目標脆弱 Buff 的實際上限；自訂函式僅傳 Buff 名稱、請求層數及 owner，實際 rending_debuff 上限是 16。
- 一次範圍攻擊對每個受擊目標產生各自的 Attack hit 路徑。因 ProcBuff 無 cooldown 且逐事件處理，同批可逐目標套用，但仍受處理時持用、攻擊物品及 live action name 三項檢查限制。
- 原文的 up to 及蓄力縮放與程式一致；原文未寫四捨五入細節屬描述未涵蓋，不是數值矛盾。每層脆弱只影響 armor-aware rending 計算，不能換算成固定整體傷害百分比。
- 來源皆為固定遊戲原始碼的靜態核對；算例用以解釋公式，不是遊戲畫面或傷害實測。

- 延遲主攻與四種特殊掃擊的實際 charge=1，仍受事件處理時 live action/item/held條件限制；該例外屬靜態可能性，未宣稱已實測。
- 正數請求在16層會刷新期限；零請求不呼叫加層，也不刷新。目標統計重算後新層數才可供後續傷害讀取。
