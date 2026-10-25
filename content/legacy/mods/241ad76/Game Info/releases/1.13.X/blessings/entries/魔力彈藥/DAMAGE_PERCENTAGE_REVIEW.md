# 魔力彈藥：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令N為等級值，C／M為效果執行時總彈匣現值／上限，R為備彈。`a=min(N,M−C,R)`，`C'=C+a`，`R'=R−a`；於合法容量狀態下`C'+R'=C+R`。[轉移算式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998)。假設N=5,C=80,M=100,R=50，a=5，結果85／45、總130發；C=98時a=2，100／48總148；R=2時a=2，82／0總82。單位是發數，沒有傷害或最大備彈百分比倍率。

本效果為備彈轉移，不能算成補充總彈藥、每發暴擊生成5發或提升傷害5%。射擊消耗是另一筆操作；本文先控制proc讀值，未聲稱所有同一frame排程下的彈匣淨變化相同。


- 電弧步槍I–IV均N=1；假設效果讀取時C=20、M=40、R=50，a=1，結果C′=21、R′=49，總70發不變。

- 同次射擊的連鎖暴擊傷害沿用原暴擊狀態，不多次產生新的判定成功事件；不以連鎖敵人数乘1發。
