# 奪顱者：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

對本項近戰命中，先依 power_type 曲線換算，再套用同一威力池內的加算修正。令 B 為 power_type 曲線換算後、尚未乘合併威力 modifier 的值，q 為既有同階段加成，n 為有效 Headtaker 層數，p 為本級每層 modifier，則輸入為 B×(1+q+n×p)。威力輸入之後仍進入傷害、踉蹌與順劈等計算，不可直接當作生命傷害倍率。

RAW name loc_trait_bespoke_increase_power_on_hit/hash c9a0bfb2 和 description loc_trait_bespoke_increase_power_on_hit_desc/hash 7ed40b89 在英文 locale 0 與繁中 locale 16 使用相同鍵/hash 配對。英文模板為 {power_level:%s} Strength for {time:%s}s on Hit. Stacks {stacks:%s} times.；繁中模板為 命中後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。Own formatter 逐 tier 讀來源 weapon 的 melee_power_level_modifier、加號百分比，並讀 parent child_duration 與 child max_stacks。數值、5 層與 3.5 秒相符；RAW 未說明 melee/item/held gate、共同閒置計時、快取更新與 sticky skip，這些是文件未涵蓋。沒有已證明的描述—實作矛盾。
