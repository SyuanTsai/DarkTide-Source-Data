# 殉道者之願(Martyr's Purpose)：原始碼依據

[English](en/zealot_restore_stealth_cd_on_damage.md)

[返回玩家說明](README.md#zealot_restore_stealth_cd_on_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_restore_stealth_cd_on_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_restore_stealth_cd_on_damage`；名稱鍵：`loc_talent_zealot_damage_taken_restores_cd`；描述鍵：`loc_talent_zealot_damage_taken_restores_cd_new_description`。
- 節點：`node_5a6a015e-77a8-4675-a51b-7fd233eb1b26`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦將 passive buff zealot_cooldown_based_on_health 套用在玩家。Buff 由伺服器保存 HealthExtension 與 AbilityExtension，timer 初始為最新 fixed time +1。
- 每次 timer 到期，讀取 current_health_percent，計算 multiplier=clamp((1-health_percent)/(1-0.25),0,1)，將 0.5×multiplier 直接 restore_ability_resource('combat_ability')，再把 timer 加 1 秒。低於 25% 後 clamp 至 1，最高額外回充 0.5 資源/秒。
- 此機制不是 on_damage proc；它以目前生命比例持續評估，所以傷害只會透過降低生命值間接提高回充，治療則降低額外回充。
- 自然回充另由 PlayerUnitAbilityExtension 運作。下列時間例假設自然值 1 resource/s 且 buff 每個週期按時執行；實際增益、暫停、上限與 fixed update 會影響時長。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：632–656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L632-L656)
- [scripts/settings/talent/talent_settings_zealot.lua：548–552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L548-L552)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2512–2549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2512-L2549)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–875](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L875)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1437–1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：632–656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L632-L656)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：973–999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L973-L999)

## 算例條件與待確認事項

- **冷卻算例**：生命穩定在 50%、自然回充正常時，每秒合計 1 + 0.5 × 0.5 ÷ 0.75 ≈ 1.333 秒進度，30 秒技能約 22.5 秒回滿；生命在 25% 以下時為 30 ÷ 1.5 = 20 秒。實際按秒結算，可能略有時間差。
- 天賦值只表示額外回充；實際總回充還要加自然恢復及其他冷卻修正。
- 計時器每秒取樣，因此生命剛跨過門檻的效果不一定在同一畫格即時套用。
- inventory 的繁中描述說明以失去生命值為依據；source 顯示其運作不是按單次受擊的傷害量直接換算冷卻，二者語義並無直接衝突，先不判勘誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`62f53f3a`。
- 同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_restore_stealth_cd_on_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8)

圖片僅供技能辨識，不作機制證據。

