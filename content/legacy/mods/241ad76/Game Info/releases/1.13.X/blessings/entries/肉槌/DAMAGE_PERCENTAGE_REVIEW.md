# 肉槌：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令p為本項`melee_power_level_modifier`（.15/.20/.25/.30），q為同一stat的其他加算貢獻，S為已通過原生power-type曲線、尚未套用buff modifier的威力輸入：`S_after=S×(1+q+p)`。PowerLevel以中性值1為基準合併修正，只有`attack_type=melee`時加入本項；傷害／衝擊沿後續曲線計算，ActionSweep順劈預算則於動作開始取樣。此百分比不可直接當成最終傷害、踉蹌或順劈數的等比例增幅。

名稱及描述由固定 Steam Build 25606770 的 content/localization/items 逐筆 key/hash 配對。三個實際型號均接特殊上勾與 weapon_special=true profile；四級 formatter 重建為+15%／+20%／+25%／+30%。英文 next melee attacks 與繁中「下一次近戰攻擊」容易形成不同讀法；本頁完整補出掃掠完成計數及通常後續三次的範圍。首次生效、刷新、揮空、純推擊、切換及順劈取樣以固定來源程式補足，未做遊戲內實測。
