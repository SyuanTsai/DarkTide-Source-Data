# 振奮彈幕：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

設總匣容量C、連射次數h、最大韌性T、等級基礎百分比p：`q=max(1,floor(C×f))，f依武器為.05／.08／.1`，`s=floor(h/q)`；跨過新的s時，要求恢復`T×p×min(s,5)`，實際再限制為缺額。[步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1907-L1947)、[倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2020-L2025)、[恢復](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27)、[截斷](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)。假設C=100,T=200,p=.04，逐次跨門檻得8、16、24、32、40點，合計120；第6步仍40。C=119時q=11，第55次達s=5；當前韌性195時最多補5點。這是最大值百分比，不是缺額×20%。ignore_stat_buffs=true使一般恢復量倍率不加入本式。

本效果不增傷、不增加最大韌性，不按每秒或每發固定回復。取最大韌性百分比再截斷缺額，且忽略一般恢復量加成；不可把20%稱作每秒20%或把200點最大韌性改成240點。事件批次可能跳過中間步數，逐步算例不是所有時間排程的恢復總量保證。


- 重伐木槍P2：C=100,T=200,p=.04,q=5，第5／10／15／20／25次恢復8／16／24／32／40點，合計120點；第30次仍40點。

- 撕裂槍：C=25時q=max(1,floor(25×.08))=2；第10發霰彈達第五步，不以彈丸數乘算。
