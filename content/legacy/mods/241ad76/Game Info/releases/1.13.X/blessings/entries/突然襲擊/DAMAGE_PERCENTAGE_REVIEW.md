# 突然襲擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `p` 是本祝福數值（.075/.10/.125/.15），`C` 是基礎機率、`g` 是全域暴擊加成、`q` 是其他 melee 暴擊加成、`h` 是武器 handling 修正。近戰暴擊率計算先加總 `C+g+q+p+h` 並 clamp 至 `[0,1]`；若未略過轉換，再乘 `(1-critical_strike_chance_to_damage_convert)`。本項只供應近戰暴擊率輸入，不是最終傷害加成；prevent、guaranteed/action-auto crit及 PRD會影響實際擲定。

固定 inventory 是1個 trait variant／3個 bindings，trait item僅限制 `ogryn_club_p1`。三個 UI 型號均使用同一 trait、tier及 icon。Mk III 上勾、Mk XIX/Mk V 折疊模式輕重攻擊才具實際 weapon_special melee profile；toggle、一般／蓄力攻擊、追斬及純 push排除。own tier是近戰暴擊機率加算，與 base fallback不相加；切出時 held gate停用ongoing stat，窗口時間仍走。未找到明確 RAW／實作矛盾；未做遊戲內實測。
