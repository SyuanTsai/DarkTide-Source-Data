# 開罐器：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令每次合格事件加層q，現有層數n；新n=min(n+q,16)，目標脆弱B=.025n。單次q不等於百分比；q=4單次增加10%脆弱，q=16單次增加40%；以封頂後的總層數計算總脆弱。

- 同template_name共用目前層數；合格事件刷新start_time，滿16也刷新。倒數以proc處理時間t為起點；若t>start+5到期則整組結束，沒有逐層各自五秒期限。

- 其他合格撕裂/脆弱為R₀，總R=min(R₀+B,1)。取armor係數k（armored/super_armor/resistant/berserker為1、其他0）、x=kR，溢出係數o（四類.25、其他0）。

- 裝甲前傷害D、原裝甲倍率A：A≥1時F=A+xo；A<1且x>1−A時F=1+(x−(1−A))o；其他F=A+x。此階段傷害DF，增量D(F−A)，後續finesse、hitzone、減傷另算。

- D100、A.1、k1/o.25：B.1→20（原10，相對+100%）；B.4→50（相對+400%）；A.9、B.4→107.5；A1、B.4→110。k0時F=A不受這筆脆弱影響。

- Can Opener 有兩份同名、不同 description key 的實作，分別為 Crowbar 與 Ogryn Rippergun；文件輸出須保留描述與數值差異。

- Tier IV 的一次效果為 Crowbar 4×2.5%=10%脆弱；Rippergun 16×2.5%=40%脆弱。實際目標 cap 一律16層、5秒。

- Rippergun 特攻當擊後才施加脆弱；Crowbar須在 secondary/special mode狀態下命中非blunt近戰傷害。
