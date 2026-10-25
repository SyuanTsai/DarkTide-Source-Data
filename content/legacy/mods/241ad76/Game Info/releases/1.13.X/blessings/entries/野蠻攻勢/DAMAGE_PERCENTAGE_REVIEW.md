# 野蠻攻勢：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

非暴擊弱點例子設B為基本傷害、F為未套額外加成的弱點額外部分、s為既有同階段加成、v為本祝福：`D=B+F×(1+s+v)`，之後的共同倍率控制不變。[弱點屬性](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L713-L747)、[額外結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L775-L782)、[加回總傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109)。B=80,F=20,s=0,v=.15時103點；B=50,F=50時107.5點；B=80,F=20,s=.25時105→108點，增幅3÷105≈2.86%。暴擊與弱點同時發生時共用finesse額外部分與其他加成，不能把本例F硬套為獨立的整次傷害倍率。

7.5／10／12.5／15%提高額外部分，不是威力，也不是整次最終傷害。算例未指定實際敵人或攻擊profile，控制護甲、暴擊、其他屬性及後續倍率不變。質量回退在傷害完成後判斷，不能倒改已選用的本次damage_profile；未殺死或歐格林目標沒有回退分支。


## 順劈傷害順位

- [回退分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1403-L1420)同時跳過target_index寫回。
- [目標設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L22-L26)依target_index取得對應targets。
- 假設沒有其他順位/傷害條件差異、容量足夠、前四名皆為合格弱點擊殺：前三次保留原順位，第4名仍讀第一順位，第4次後更新為1，第5名讀第二順位。
- 以第一順位100點、第二順位50點為例，前4名100點，第5名50點；這是控制條件的順位算例，不是指定武器的固定傷害。
