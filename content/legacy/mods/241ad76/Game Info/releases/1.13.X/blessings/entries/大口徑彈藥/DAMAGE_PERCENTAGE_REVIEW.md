# 大口徑彈藥：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 等級數值為ranged_impact_modifier = [0.10, 0.15, 0.20, 0.25]。攻擊類型為ranged時，踉蹌計算讀取該modifier；只有踉蹌威力百分比換算前的中間輸入可按相同其他條件下的倍率舉例，後續仍受攻擊與目標資料影響。

- 暴擊且持有keyword時：max_hit_mass_attack := math.huge；max_hit_mass_impact := damage-profile-derived value。兩者在HitMass.consume_hit_mass分別扣減目標質量；一般質量停止條件為attack budget <= 0 AND impact budget <= 0。destroy_on_impact及Armor.aborts_attack是獨立停止條件。

- 對遠程ray hit，HitScan先從物理查詢取得射線命中，再以DamageProfile.max_hit_mass建立預算並逐命中呼叫HitMass.consume_hit_mass。對散彈，ActionShootPellets在每個彈丸迴圈建立一組預算；該射擊的is_critical_strike旗標傳給所有彈丸。彈丸damage按命中比例與damage profile處理，不能把彈數當作增加祝福等級。

- 爆炸以attack_type.explosion進入Explosion.create_explosion的範圍查詢；StaggerCalculation對explosion選explosion_impact_modifier分支。它不等於遠程子彈的ranged_impact_modifier或沿路順劈質量預算。

- ActionSweep在開始時以critical flag建立順劈質量上限，並在後續掃擊中使用同一上限；ActionPush直接計算push成本與範圍目標，使用PushAttack，不進入ActionSweep的質量預算consumer。

- 同一踉蹌結算階段的其他加成依StaggerCalculation聚合：在其他條件不變且各未修改項為1時，總修正為 `1 + 本祝福q + 其他同階段加成b`。例如q=.25、b=.20時，倍率1.45，不是1.20 × 1.25。

- 遠程踉蹌修正持用時生效，不以暴擊為條件；暴擊條件只控制攻擊側順劈上限。

- 五個武器變體的I–IV數值相同。遠程踉蹌修正為10%／15%／20%／25%，共同模板的預設值由等級值取代。

- 暴擊不會把衝擊側質量預算、物件穿透深度或範圍爆炸改為無限。

- 磷光爆炸、揮擊式近戰特攻與盾牌推擊依各自攻擊路徑結算；遠程踉蹌修正只作用於遠程攻擊。
