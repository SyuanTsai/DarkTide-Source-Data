# 歎為觀止：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 每個合格 on_kill 事件的機率 p：I–IV = 0.14／0.16／0.18／0.20；n 個彼此獨立事件的預期觸發數為 n × p，至少觸發一次為 1 − (1 − p)^n。

- I級5次獨立合格事件：1 − 0.86^5 = 0.5295729824，即52.95729824%，四捨五入52.96%。

- 開啟距離衰減的法杖／手槍爆炸，WeaponSystem 先依實際命中距離減去目標 breed 的 explosion_radius，再以 close_radius 與 radius 計算 falloff scalar：clamp(((hit_distance − close_radius) ÷ (radius − close_radius))^2, 0, 1)；未開距離衰減時 scalar 不按距離縮小。掩體 raycast 仍先檢查命中。

- 三個爆炸模板的 static_power_level 是傷害結算威力輸入而非生命值；皆使用 default_grenade，其中 ranged attack power_distribution 為 near 200、far 100，另依距離與護甲種類套用倍率。未指定目標、護甲、距離及掩體條件時，不報固定 HP 傷害。

- 三個模板未設定 scalable_radius 或 close_radius；本祝福呼叫的 charge_level=1，解析後 close_radius=0，基本 radius 分別3／4／4。通用 explosion_radius_modifier 會乘上基本半徑；min_radius 是充能插值的下界，不是近距離傷害區。法杖與磷光手槍因此以 clamp((hit_distance ÷ 實際radius)^2, 0, 1) 作距離衰減輸入。

- RAW 名稱與描述的繁中、英文 hash 同源配對；名稱以同 hash 的「歎為觀止」為準，詞表舊譯只作關聯。

- 三個實際接入變體 I–IV 均是14%／16%／18%／20%；各 wrapper 僅覆寫燃燒 ID、驗證 keyword 與爆炸模板。

- on_kill 事件只送入擊殺者所屬祝福系統；事件物品相等、精英／專家標籤及燃燒條件都要通過。

- 三種燃燒首次施加時保留來源物品；同名既有 buff 加層或刷新不改寫其來源。切換不會改寫仍存在的燃燒事件來源。

- 12個 is_boss breed 的實際 tags 都不含 elite 或 special；boss 身分本身不會通過目標 gate。

- 噴火器與另外兩把武器的爆炸威力、半徑、距離衰減不同；default_grenade 護甲倍率與掩體使其不能換算為固定 HP。

- 三個圖示 item metadata 都指定 weapon_trait_161，圖示附件與 RAW image hash 已由主控驗收。
