# 粉碎：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

爆擊率先加算角色基礎、祝福、近戰及武器處理加成，再限制到0–100%；若有爆擊率轉傷害則另外減少機率。公式`clamp(c + s + n×v, 0, 1)`適用於沒有轉換的例子。[chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)。假設c=.05、s=0、第四組v=.04、n=5，結果`.05+5×.04=.25=25%`；已有s=.10時為35%。玩家意義是增加機率百分點，不是提高整次傷害20%。判定前機率四捨五入到小數第二位，使用偽隨機分布；不把未取整機率當長期實測。[is_critical_strike](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10)。

保證暴擊、禁止暴擊與轉換效果會改變普通機率判定，本算例排除它們。暴擊命中後的額外傷害依攻擊與目標設定，不能由滿層20個百分點推算固定傷害增幅。[條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)
