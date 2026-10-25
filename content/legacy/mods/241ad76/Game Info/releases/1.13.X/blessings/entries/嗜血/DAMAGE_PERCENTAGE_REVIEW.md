# 嗜血：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 C0 為基礎近戰爆擊率，A 為其他一般與近戰爆擊率修正總和，t 為本項的近戰爆擊率加成比例，r 為爆擊率轉傷害的轉換比例。依 CriticalStrike.chance 的實際順序，先算 P = clamp(C0 + A + t, 0, 1)，再算 C = P × (1 − r)；一般 ActionWeaponBase 近戰呼叫不跳過這項轉換。若 prevent_critical_strike 關鍵字存在，ActionWeaponBase 先把爆擊機率設為 0，不進入此公式。鏈斧每層 t=0.10；布蘭克斯動力劍每層 t=0.05。前提 C0=5%、A=0、r=0 時，鏈斧 I：5%+4×10%=45%；鏈斧 IV：5%+10×10%=105%，先封頂為100%，相對原5%增加95個百分點；布蘭克斯動力劍 IV：5%+8×5%=45%。這些是爆擊率，不是最終傷害加成。三個關鍵字型實作在未被禁止爆擊時直接保證近戰爆擊，並非將某個百分點加數代入 t。

RAW各級從own num_stacks_on_proc以abs(value)×10或P3×5的custom formatter，再percentage+重建；保留同hash中英模板與尾端ASCII空白證據，不改RAW原始資源。鏈斧與P3百分比child落地與顯示一致；另三項keyword max1為確實階梯矛盾。profile特殊標記、普通黏附例外、首次事件/快取、期限不刷新、消耗與切槽是文件未涵蓋，不一律稱誤譯。
