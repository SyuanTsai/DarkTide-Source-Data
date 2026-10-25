# 凶殘之寧：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

P_after = clamp(P_before - r, 0, 1)，P 為目前反噬比例，r 為固定 tier 值。
I/II/III/IV：r=.02/.03/.04/.05，即 2/3/4/5 個百分點。IV 級 70%→clamp(.70-.05)=65%；相對起始值降 7.14%，但不是按剩餘值乘 .95。3% 用 IV 級則降至 0%。

proc 是 boolean：一個事件處理批次任何數量 n>=1 個合格事件都只留下 true 一次；下一次 Buff.update 消耗一次。旗標消耗後的新批次才可再次觸發。

- RAW 泛稱一次 attack，實作限定當前合格 melee on_hit 事件且 target_number>=3；序號、近戰條件與一般派送閘屬文件未涵蓋，不可解讀為累積三次正傷。

- quells Peril 與減少目前反噬方向一致；程式是固定 fraction 相減，不是目前值的相對百分比。formatter 靜態呈現 I–IV +2/+3/+4/+5%。

- M1/M2 的 powered special slash 本體仍是 ActionSweep melee；風刃額外傷害則由 Force Sword special buff 接到 RangedAction.execute_attack，attack_type=ranged 且未傳 target_number，所以無論風刃目標數都不符合本項 predicate。兩型號的 fling 追擊由 action_fling_target 接 ActionDamageTarget，kind=damage_target，該 executor 也強制 ranged 且不傳 target_number。
