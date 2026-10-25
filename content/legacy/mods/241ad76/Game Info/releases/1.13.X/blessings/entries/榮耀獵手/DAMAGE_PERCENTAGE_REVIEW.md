# 榮耀獵手：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `Tmax` 為最大韌性，`Tnow` 為觸發時目前韌性，`p` 為對應武器／等級的 `toughness_fixed_percentage`，`m` 為模板資料中的恢復倍率（未設定時為 1）。`p` 在程式中是比例，例如 0.175；百分比格式再乘以 100，並由遊戲格式化器依顯示值選擇小數位，所以該值呈現為 17.5%，不是由文件端四捨五入。模板傳入 `ignore_stat_buffs=true`，所以此回復不乘一般韌性補充 stat-buff 修正。

- 請求回復：`wanted = Tmax × p × m`。
- 可用缺額：`missing = max(0, Tmax − Tnow)`。
- 實際回復：`recovered = min(wanted, missing)`；目前值變成 `Tnow + recovered`。
- 例：若 `Tmax=100`、`Tnow=63`、`p=0.225`、`m=1`，請求 22.5，缺額 37，實際恢復 22.5。

因此卡面 `+22.5%` 表示以最大韌性計出的請求量；它不是對目前韌性乘 1.225，也不是傷害加成。若韌性恢復被停用，函式在計算前回傳 0。

- 已以固定來源 SHA 的 11 個 trait 定義逐項核對 I–IV、`format_type=percentage` 與未設定 `num_decimals`；並以共用 TraitValueParser 核實倍率和自動小數位。四組數值保留各自差異，17.5%／22.5% 不被改成整數。
- 已核對每個實際 wrapper 複製同一 base proc 模板，並追到精英標記、相符物品名稱、目前持用欄位、擊殺事件與韌性回復函式。
- 根據主控凍結 UI 收據，實際範圍為 11 個 trait IDs／18 個 mark bindings，外部精確名稱項目為 0；遊戲 RAW 名稱與描述 locale 0/16 同 key、同 hash，locale 16 名稱為「榮耀獵手」。
- 名稱「榮耀獵手」沿用遊戲 RAW，不作額外文件譯名；描述也使用遊戲 locale 16 RAW。實際圖示由主控已驗收的 weapon_trait_120 收據提供，沒有下載、上傳或改動圖片。
- 攻擊覆蓋以 UI 實際綁定的 18 個 weapon-template action tables 為範圍；共用條件本身不排除攻擊模式。沒有把只出現在動作表的二次傷害一概視為必定有相同物品歸屬。
- 結論只覆蓋此固定版本與來源；不延伸為所有職業韌性上限、其他祝福互動或未確認的持續傷害 attribution.
