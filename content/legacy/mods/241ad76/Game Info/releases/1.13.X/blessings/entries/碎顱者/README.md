# 碎顱者(Skullcrusher)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/d1d3d38b-e78c-45b5-ae2e-cb3d99140195" width="72" height="72" alt="碎顱者祝福圖示">

- **觸發方式**：來源武器的一次攻擊命中仍存活、符合 Minion 判定的目標，且事件處理時目標正處於踉蹌狀態、來源武器仍在手上。程式讀的是事件處理當下的踉蹌狀態；不要求目標在這次命中前已踉蹌。若本擊造成踉蹌，傷害先結算，再由命中事件檢查並可能施加效果。
- **每次效果**：Tier I／II／III／IV 每次分別向目標請求 1／2／3／4 層。每個有效層讓目標在後續符合條件的傷害計算中增加 10% `damage_vs_staggered`；這是傷害池中的加算，不是最終生命值傷害固定增加 10%。
- **上限與時間**：此目標效果的條件 stat 最多按 8 層計算，即最多 +80% `damage_vs_staggered`；目標原始累積請求到 31 層上限後，仍符合條件的命中即使本次新增 0 層也會刷新 5 秒期限。31 不是有效 stat 上限。目標停止踉蹌時，效果可繼續留存到期限結束，只是不提供這項條件加成。
- **何時消費加成**：後續傷害計算用「本次觸發的踉蹌」或目標的 `count_as_staggered` 狀態作門檻，才會把攻擊者與目標兩側的 `damage_vs_staggered` 加入傷害池。這與施加 debuff 時讀取的 live stagger 檢查是兩個不同步驟。
- **首次命中**：攻擊先計算傷害，再處理 hit reaction 與命中 buff 事件。因此，首次命中可以先造成踉蹌、再讓事件通過並替目標加層；同一擊的已結算傷害不會追溯套用新層。目標 buff extension 後續更新快取後，之後的傷害才讀到新 stat。
- **特殊攻擊覆蓋**：工兵鏟 Mk I 的特殊上刺及 Mk III／Mk VII 的折鏟輕重揮擊可走近戰命中路徑；後兩者的黏附追加攻擊會另以近戰命中檢查。惡魔之爪的特殊效果在反擊揮擊命中時檢查，架刀本身不是命中。廁所鏟 Mk III 的特殊上刺，以及 Mk XIX／Mk V 的折鏟輕重揮擊，均是獨立命中。惡霸棍棒特殊掌摑是揮擊。動力錘與碾壓者的特殊衝擊爆炸會另外派發爆炸命中；電擊錘的特殊上刺可觸發，但其黏附 tick 設有略過命中 buff 的旗標。雷鎚啟動特殊本身不算命中，充能後的實際重擊揮掃才算；作戰大錘&板盾的特殊格擋本身不派發攻擊命中。
- **推擊與切換**：盤點中的各型號都有推擊攻擊設定；若推擊實際執行傷害攻擊並派發命中事件，仍按同一來源物品、持用與目標狀態條件檢查。獨立推擊事件或沒有 Attack 命中的動作不會單獨觸發。切出後來源武器不能再施加新層；已在目標上的效果不會因切武器而刪除，仍可在目標踉蹌時供後續傷害讀取，直到 5 秒期限移除。
- **實際適用型號**：工兵鏟 軍務部 Mk I：工兵鏟 軍務部 Mk I（combataxe_p3_m1）、工兵鏟 軍務部 Mk III（combataxe_p3_m2）、工兵鏟 軍務部 Mk VII（combataxe_p3_m3）；「惡魔之爪」劍 卡塔昌 Mk I：「惡魔之爪」劍 卡塔昌 Mk I（combatsword_p1_m1）、「惡魔之爪」劍 卡塔昌 Mk IV（combatsword_p1_m2）、「惡魔之爪」劍 卡塔昌 Mk VII（combatsword_p1_m3）；廁所鏟 兇殘 Mk III：廁所鏟 兇殘 Mk III（ogryn_club_p1_m1）、廁所鏟 兇殘 Mk XIX（ogryn_club_p1_m2）、廁所鏟 兇殘 Mk V（ogryn_club_p1_m3）；惡霸棍棒 「布倫特專用」 Mk I：惡霸棍棒 「布倫特專用」 Mk I（ogryn_club_p2_m1）、惡霸棍棒 「布倫特得意之作」 Mk II（ogryn_club_p2_m2）、惡霸棍棒 「布倫特猛擊」 Mk IIIb（ogryn_club_p2_m3）；動力錘 阿克利斯 Mk I：動力錘 阿克利斯 Mk I（ogryn_powermaul_p1_m1）；作戰大錘&板盾 歐洛克斯 Mk II & Mk III：作戰大錘&板盾 歐洛克斯 Mk II & Mk III（ogryn_powermaul_slabshield_p1_m1）、作戰大錘&板盾 果羅姆 Mk I & Mk V（ogryn_powermaul_slabshield_p1_m2）；碾壓者 憤怒 Mk IVe：碾壓者 憤怒 Mk IVe（powermaul_2h_p1_m1）、碾壓者 克魯克 Mk VII（powermaul_2h_p1_m2）；電擊錘 阿格尼 Mk Ia：電擊錘 阿格尼 Mk Ia（powermaul_p1_m1）、電擊錘 軍務部 Mk III（powermaul_p1_m2）；雷鎚 十字星 Mk II：雷鎚 十字星 Mk II（thunderhammer_2h_p1_m1）、雷鎚 鐵盔 Mk IV（thunderhammer_2h_p1_m2）。共 9 個實作、21 個固定型號綁定。

## 計算與算例

- **雷鎚 十字星 Mk II 重擊例**：使用 `thunderhammer_2h_p1_m1` 的 `action_left_heavy`／`thunderhammer_heavy` profile。前提是 Tier IV、來源武器持用、目標屬 Minion 分類且已踉蹌、目標快取原為 4 個有效層、其他傷害池修正中性。這次命中在 buff 事件前先以正規化 `D0=100` 計算，讀到舊快取 `N=4`，所以該傷害階段為 `100×(1+0.10×4)=140`。命中事件隨後請求 4 層；目標更新快取後，若後續傷害條件仍成立，`N=8` 時為 `100×(1+0.10×8)=180`。這是傷害階段示例，不是遊戲固定傷害或 HP 扣除。
- **廁所鏟 兇殘 Mk XIX 輕擊例**：使用 `ogryn_club_p1_m2` 的 `action_light_1`／`ogryn_shovel_light_linesman` profile。前提是 Tier II、來源武器持用、目標屬 Minion 分類且已踉蹌、已更新快取為 `N=2`，沒有其他同類修正。此擊先讀舊快取，正規化 `D0=100` 得 `100×(1+0.10×2)=120`；若命中事件條件成立，之後請求加 2 層。目標快取更新後 `N=4`，後續符合條件的傷害階段為 `100×(1+0.10×4)=140`。差異是 20 個 `damage_vs_staggered` 百分點，並非最終 HP 固定增加 20%。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [工兵鏟](../../weapons/melee/工兵鏟/README.md) | 工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [「惡魔之爪」劍](../../weapons/melee/「惡魔之爪」劍/README.md) | 「惡魔之爪」劍 卡塔昌 Mk I、「惡魔之爪」劍 卡塔昌 Mk IV、「惡魔之爪」劍 卡塔昌 Mk VII | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [廁所鏟](../../weapons/melee/廁所鏟/README.md) | 廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [惡霸棍棒](../../weapons/melee/惡霸棍棒/README.md) | 惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [動力錘](../../weapons/melee/動力錘/README.md) | 動力錘 阿克利斯 Mk I | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [作戰大錘&板盾](../../weapons/melee/作戰大錘&板盾/README.md) | 作戰大錘&板盾 歐洛克斯 Mk II & Mk III、作戰大錘&板盾 果羅姆 Mk I & Mk V | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [碾壓者](../../weapons/melee/碾壓者/README.md) | 碾壓者 憤怒 Mk IVe、碾壓者 克魯克 Mk VII | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [電擊錘](../../weapons/melee/電擊錘/README.md) | 電擊錘 阿格尼 Mk Ia、電擊錘 軍務部 Mk III | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |
| [雷鎚](../../weapons/melee/雷鎚/README.md) | 雷鎚 十字星 Mk II、雷鎚 鐵盔 Mk IV | I–IV | 來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
