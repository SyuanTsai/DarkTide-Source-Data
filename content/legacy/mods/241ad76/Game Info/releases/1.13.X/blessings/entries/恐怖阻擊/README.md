# 恐怖阻擊(Terrifying Barrage)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/63976959-4253-4979-8013-1ab18966b7ea" width="72" height="72" alt="恐怖阻擊祝福圖示">

- **觸發方式**：裝備本祝福的遠程武器；擊殺必須由該武器本身造成，而且檢查事件時仍在持用它。目標須在命中位置至檢查時攻擊者位置 12.5m 內死亡；可接受遠程攻擊（也包括程式明確按遠程計算的攻擊），或爆炸攻擊。這裡是「近距離」條件，不是近戰武器條件。
- **首次生效與再觸發**：第一個擊殺事件檢查通過時，會對周圍施加一輪壓制。之後有 1.5 秒再觸發間隔；同一處理批次內的下一個擊殺以及間隔內其他合格擊殺都不會再施加一輪。這不是敵人身上的壓制期限，也沒有可疊加的祝福層數。
- **效果**：以攻擊者當時的位置為中心，對 12m 半徑內可接收壓制的敵人施加本級壓制值：I／II／III／IV 為 15／20／25／30。設定會立即吸引敵人注意，壓制輸入不隨距離衰減；它不是生命傷害。
- **目標接收與衰減**：敵人可能因自身停用、免疫中、不接受此類壓制或視線條件未滿足而拒收。接收到的壓制值會受敵人自己的上限裁切；達到該敵人的門檻才進入受壓制狀態。壓制值之後按敵人距離與原生設定逐步衰減；脫離受壓制狀態後，敵人也可能進入自己的免疫時間，所以本祝福不保證所有目標都受控相同秒數。
- **掩體副效**：區域內距離嚴格小於 6m、且有掩體系統的目標可能被迫離開掩體位置 3–8 秒；這不是壓制狀態的持續時間。
- **可觸發的攻擊**：一般即時命中射擊、霰彈、實際以遠程攻擊結算的投射物，以及 電流力場法杖 的連鎖電擊都可走遠程擊殺路徑；虛空爆破力場法杖 的蓄力爆炸與 虛空打擊力場法杖的重型投射物命中後的爆炸可走爆炸路徑。每種情況仍須符合該項物品、死亡與距離條件。
- **不符合的攻擊**：純推擊、推擊後追擊、槍托、槍刺、杖擊等近戰攻擊不會只因使用遠程武器而合格。烈焰力場法杖 直接火焰攻擊可符合遠程路徑，但延遲燃燒傷害 不算遠程擊殺。特殊彈裝填、手電筒或切換攻擊模式本身不是擊殺攻擊；後續實際射擊依其攻擊類別判斷。
- **距離與描述差異**：實際近距離擊殺上限為 12.5m；觸發後區域半徑為 12m。英文與繁中靜態描述均使用相同的 `{range:%s}` formatter，I／II／III／IV 都顯示 5m／6m／7m／8m；兩語顯示的區域半徑均與實際 12m 半徑不符。觸發距離 12.5m 是另一條件。
- **切換武器**：如果擊殺事件尚待檢查時已切出本祝福武器，該事件不符合持用條件。已成功施加的區域效果不會因其後切換而撤回；切回後仍須等再觸發間隔結束，並重新符合物品和距離條件。

## 計算與算例

- **前提**：IV 級；本祝福武器在距離條件內以遠程攻擊擊殺敵人，事件檢查時仍在持用該武器，且 1.5 秒再觸發間隔已結束。另一名敵人位於攻擊者 8m 處，壓制值從 0 起算、沒有免疫；其接收功能啟用、允許此類壓制且不需要未滿足的視線條件。
- **代入與結果**：假設擊殺位置到攻擊者為 10m，10m ≤ 12.5m，近距離條件成立。IV 級向 12m 區域送出 30 壓制值；8m 目標收到 30（仍受自己的上限裁切），並立即被吸引注意、沒有距離衰減。若另一目標距離嚴格小於 6m 且有掩體系統，才可能再被迫離開掩體位置 3–8 秒。
- **玩家意義**：30 是壓制輸入，不是 30 點生命傷害，也不保證倒下或打斷；是否進入受壓制狀態要看目標門檻，之後按目標本身設定衰減。
- **邊界比較**：11m 的近戰 sweep 或推擊不會觸發；遠程或爆炸擊殺若超過 12.5m 也不會觸發。

## 遊戲描述勘誤

- **中英描述的區域半徑**：同一描述鍵 `loc_trait_bespoke_suppression_on_close_kill_desc`（EN／繁中 hash `9bf6f6a0`）兩語均使用 `{range:%s}`，並由相同 rarity formatter 靜態顯示 I／II／III／IV 為 5m／6m／7m／8m；16 個實際 tier 的區域半徑均為 12m。觸發距離另為 12.5m，不能混為效果半徑。
- **繁中觸發用語**：RAW「近戰擊殺後」容易指向 melee attack；實際只接受合格 ranged／`count_as_ranged_attack` profile 或 explosion 擊殺，melee/push 不符合。因此正文依實作用「近距離擊殺」，不將「近戰」解讀成 melee 武器條件。
- **文件未涵蓋**：RAW 沒有列出 12.5m 觸發距離、各級 suppression value、目標接收規則或 1.5 秒再觸發 gate；區域內 6m 掩體副效亦未說明。這些是文件未涵蓋，不另當作繁中數值矛盾。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [步兵自動槍](../../weapons/ranged/步兵自動槍/README.md) | 步兵自動槍 阿格里皮娜 Mk I、步兵自動槍 弗拉克斯 Mk V、步兵自動槍 哥倫努 Mk VIII | I–IV | 各型號 hip／zoom 為 hitscan 遠程攻擊；手電筒切換不造成攻擊。 |
| [槍托自動槍](../../weapons/ranged/槍托自動槍/README.md) | 槍托自動槍 弗拉克斯 Mk II、槍托自動槍 格拉亞 Mk IV、槍托自動槍 阿格里皮娜 Mk VIII | I–IV | 各型號 hip／zoom 為 hitscan 遠程攻擊；槍托推擊是近戰 sweep。 |
| [撕裂者自動手槍](../../weapons/ranged/撕裂者自動手槍/README.md) | 撕裂者自動手槍 尤斯 Mk IV | I–IV | hip／zoom 為 hitscan 遠程攻擊；手電筒切換不造成攻擊。 |
| [矛頭爆矢槍](../../weapons/ranged/矛頭爆矢槍/README.md) | 矛頭爆矢槍 洛克 Mk IIb、矛頭爆矢槍 洛克 Mk III | I–IV | 各型號 hip／zoom 為 hitscan 遠程攻擊；推擊是獨立推擊路徑。 |
| [雙持自動手槍](../../weapons/ranged/雙持自動手槍/README.md) | 雙持自動手槍 布蘭克斯 MkIII | I–IV | 雙持 hip／zoom 為 hitscan 遠程攻擊；pistol whip 是近戰 sweep。 |
| [虛空爆破力場法杖](../../weapons/ranged/虛空爆破力場法杖/README.md) | 虛空爆破力場法杖 陰陽 Mk III | I–IV | 普通施放是投射物遠程攻擊；蓄力特殊爆炸以 explosion 類型結算；杖擊／揮擊為近戰。 |
| [烈焰力場法杖](../../weapons/ranged/烈焰力場法杖/README.md) | 烈焰力場法杖 裂隙避難所 Mk II | I–IV | 普通火焰與蓄力火焰的直接攻擊為 ranged；延遲 flamer_assault 燃燒 tick 是 buff 類型且其 damage profile 不標 count_as_ranged_attack，故 tick 不符合遠程擊殺分支；杖擊／揮擊為近戰。 |
| [電流力場法杖](../../weapons/ranged/電流力場法杖/README.md) | 電流力場法杖 諾瑪努斯 Mk VI | I–IV | 普通施放投射物及蓄力 chain lightning 都是 ranged；杖擊／揮擊為近戰。 |
| [虛空打擊力場法杖](../../weapons/ranged/虛空打擊力場法杖/README.md) | 虛空打擊力場法杖 陰陽 Mk IV | I–IV | 普通及蓄力都發射投射物；蓄力重型彈的直接命中為 ranged，命中後另觸發 explosion。 |
| [撕裂槍](../../weapons/ranged/撕裂槍/README.md) | 撕裂槍 碎敵 Mk II、撕裂槍 碎敵 Mk V、撕裂槍 碎敵 Mk VI | I–IV | 各型號 hip／zoom 霰彈以 ranged 結算；刺擊是近戰 sweep。 |
| [反衝者](../../weapons/ranged/反衝者/README.md) | 反衝者 洛倫茲 Mk V | I–IV | hip／zoom 霰彈以 ranged 結算；bash 是近戰 sweep。 |
| [惡棍槍](../../weapons/ranged/惡棍槍/README.md) | 惡棍槍 洛倫茲 Mk VII | I–IV | 目前 binding 的實際 template 是 ogryn_thumper_p1_m3；hip／zoom hitscan 以 ranged 結算，bash 是近戰 sweep。 |
| [戰鬥霰彈槍](../../weapons/ranged/戰鬥霰彈槍/README.md) | 戰鬥霰彈槍 紮羅娜 Mk VI、戰鬥霰彈槍 阿格里皮娜 Mk VII、戰鬥霰彈槍 奧克塔蘭 Mk IX | I–IV | 各型號 hip／zoom 霰彈以 ranged 結算；weapon special 是裝填特殊彈，之後的射擊才造成攻擊。 |
| [雙管霰彈槍](../../weapons/ranged/雙管霰彈槍/README.md) | 雙管霰彈槍 十字星 Mk XI、雙管霰彈槍 克魯克 Mk IV | I–IV | 各型號 hip／zoom 霰彈以 ranged 結算；特殊 bash 是近戰 sweep。 |
| [獵人霰彈槍](../../weapons/ranged/獵人霰彈槍/README.md) | 獵人霰彈槍 奧克塔蘭 Mk III | I–IV | hip／zoom 霰彈以 ranged 結算；特殊鍵只切換狀態。 |
| [快拔左輪手槍](../../weapons/ranged/快拔左輪手槍/README.md) | 快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV | I–IV | 各型號 hip／zoom 為 hitscan 遠程攻擊；pistol whip 及追擊是近戰 sweep。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
