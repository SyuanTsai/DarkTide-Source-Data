# 連續發射(Blaze Away)：淨化噴火器實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_flamer_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L50-L97)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L18-L23)。
- 適用型號：淨化噴火器 奧特米亞 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：淨化噴火器 奧特米亞 Mk III（Purgation Flamer Artemia Mk III，`flamer_p1_m1`）.
- 每步 I–IV：5%、6%、7%、8%；彈匣門檻 10%。
- 特殊模式與效果：特殊鍵執行推擊，不增加射擊計數；實際推擊依方向選用內圈／外圈傷害設定檔，這些設定檔會讀取一般攻擊力量修正。普通未架槍火焰與架槍火焰各按合格射擊準備計數一次；後續射線、命中與燃燒跳傷不另增加計數。噴火器 P1 與烈焰力場法杖 P2 這兩個實作的燃燒跳傷都由玩家作為來源持有人，並在每次跳傷時讀取當下攻擊力量快取；本型號在仍持用且有效步尚在快取時，跳傷也可能受一般攻擊力量修正影響。切出後持用條件關閉，或計數清零並更新快取後，剩餘跳傷不再受本祝福加成；燃燒期限仍獨立運作，這不代表最終生命傷害固定增加相同比例。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：flamer_p1_m1：未瞄準 none（沒有散佈模板；清除時間回退為 0 秒）；瞄準／架槍 none（沒有散佈模板；清除時間回退為 0 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
