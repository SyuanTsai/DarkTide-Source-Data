# 開溜：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `m` 為階級加算係數（I／II／III／IV 為 .10/.125/.15/.15），`q` 為其他同類衝刺速度加算係數，`t₀` 為合格非 local 玩家事件被處理的時間。`H(t)` 在原槍持用且 `t<t₀+1` 時為 1，否則為 0。`V(t)=V₀(t)×(1+q+m×H(t))`；`V₀` 尚未包含這個衝刺速度係數，其他 movement_speed、角色狀態與武器動作乘數另行作用。實際更新仍受屬性快取及移動更新順序影響。

角度 stat 的型別是 max_value。令 `r` 為其他同類角度修正、`A` 表示持用原槍、`T` 表示 III／IV，則有效修正 `R=max(0,r,10°×1[A且T])`，一般門檻 `θ=70°−R`。`look_away_angle=acos(abs(dot(攻擊者方向,視線方向)))`，使用水平單位向量；一般側向條件為 `θ<look_away_angle`。衝刺超時只有持有允許超時閃避關鍵字才例外；另有 run_away_dodge 且 `dot<.5` 的分支。角度項獨立於速度 proc 的一秒期間。

逃離分支使用帶正負號的 dot，未取絕對值；其水平夾角不採一般側向判定的前後對稱折算。

已核對固定 SHA 的 I–IV tier／formatter、實際 wrapper 與 stat consumers、玩家 sprint-dodge 發送及非 local 佇列路徑、三個實際型號的 import／trait registration／UI 組名與模式。RAW 英繁 hash 配對相同；tier speed 可逐級重建，III／IV 持用角度效果未寫在描述中，作為文件未涵蓋項而非文字矛盾。raw item icon 欄位為空，正式圖示應呈現已驗證的通用 UI fallback，並保留 raw 與 effective 路徑的區分。
