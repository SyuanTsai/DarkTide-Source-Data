# 屠戮者：百分比與威力結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

| 檢核項目 | 結論 | 程式依據 |
|---|---|---|
| 2／3／4／5%的作用對象 | 近戰威力，每有效層增加，非整次最終傷害倍率 | [等級定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L35-L63) |
| 疊層方法 | 同一屬性加算；第四組10層為50%，非1.05的10次方 | [屬性加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 既有同階段加成 | 與適用的其他威力加成相加 | [威力加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60) |
| 整次傷害 | 威力先進入傷害輸出範圍與曲線；目標護甲等條件另算，不能由50%威力宣稱50%傷害 | [傷害計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227) |
| 順劈與踉蹌 | 各自使用威力類型與輸出，未保證穿過固定額外人數或固定踉蹌等級 | [順劈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L57)、[踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L89) |

## 程式推導

假設該曲線階段P=500，僅比較第四組v=.05，n=10：沒有其他加成時`500 × (1+10×.05)=750威力`。已有s=.25時先為625，之後875；相對增幅`250÷625=40%`。單位均為威力，不是傷害點數。玩家意義為已有加成會降低新祝福相對原值的增幅。

本例控制其他條件不變，沒有指定敵人、護甲、攻擊設定與屬性，沒有計算特定武器的固定最終傷害。未執行遊戲內測試。
