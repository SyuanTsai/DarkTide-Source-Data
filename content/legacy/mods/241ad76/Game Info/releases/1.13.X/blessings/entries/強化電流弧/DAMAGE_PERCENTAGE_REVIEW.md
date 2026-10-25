# 強化電流弧：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令原生解析後最大角、近距最大角、半徑、最大跳躍參數為 A、C、R、J，祝福加值為 Δθ、ΔR、ΔJ。搜尋使用 A+Δθ、C+Δθ、R+ΔR、J+ΔJ；profile 未給 close angle 時 C=A。原生角度／半徑部分以 lerp endpoints 表達，依解析 profile 而定；jump base 可直接精算。此效果不在傷害乘式內；鏈結傷害 profile/type 由 action/weapon chain_damage_settings 分開指定。angle formatter 先 radians_to_degrees 再 math.floor，display +7/+12 和 runtime +7.5°/+12.5°分開。

RAW 名稱與描述在 locale 0/16 都是英文；「強化電流弧」是本文件採用的文件譯名，並非遊戲內繁體中文 RAW。描述的 angle、radius、jumps placeholders 沒有說明持用條件、實際 Mark、攻擊模式、特殊狀態、合法目標篩選或傷害分離；這些應標為「文件未涵蓋」，不是「明確矛盾」。

兩個變體的 I–IV 數值已逐一比對各自 trait 與 wrapper；角度 formatter 向下取整，所以實際 +7.5°／+12.5° 對應卡面 +7／+12。原生角度與半徑具有端點變化，不以變體名稱或 tier suffix 推定單一基線；算例只列明確原生跳躍基線與可證明的加值。
