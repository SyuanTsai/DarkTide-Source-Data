# 獻祭手雷(Immolation Grenade)：原始碼依據

[English](en/zealot_flame_grenade.md)

[返回玩家說明](README.md#zealot_flame_grenade)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_flame_grenade)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_flame_grenade`；名稱鍵：`loc_talent_ability_fire_grenade`；描述鍵：`loc_talent_ability_fire_grenade_desc`。
- 節點：`node_998a79be-ed3f-4b78-acb5-cb788438a76c`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent 定義把 PlayerAbilities.zealot_fire_grenade 指向能力槽；該能力裝備 grenade_fire，使用充能且上限取自 Zealot grenade.max_charges。此設定值為 3。
- fire_grenade 投射物設定引信 1.7 秒，同時連到 ExplosionTemplates.fire_grenade 與 LiquidAreaTemplates.fire_grenade。初始爆炸和之後的地面燃燒是不同傷害階段：爆炸範本最大半徑 1，地面區域範本壽命 15 秒。
- 地面 buff 為單層。難度系統先由 500/625/750/875 表選出 P，再於每次傷害取 P × (0.5 + r)，其中 r=math.random()；不是隨機抽四個難度值之一。間隔為 0.5–1.25 秒。
- power_distribution.attack=50，無護甲 ADM=2、防彈=1.5、甲殼=0.1。預設 damage_output 0–20、power_level 範圍 0–10000，且本版 power curve 起始加成為 0，故隔離算例為 20 × [P × (0.5+r) × 50 / 10000] × ADM。P=500、r=0.5 時三者為 100/75/5；P=875 的無護甲範圍為 87.5–262.5。
- talent 的 dev_info 指向通用 liquid_area_fire_burning，但實際 LiquidAreaTemplates.fire_grenade 指向 flame_grenade_liquid_area，後者又指向 flame_grenade_liquid_area_fire_burning。
- 離開液體區域套用 fire_burninating，duration=1、max_stacks=10，另用 liquid_area_fire_burning 傷害範本與 250/375/625/750 威力表；不可把在區域內的單層傷害照搬到餘火。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：168–197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L168-L197)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：106–117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L106-L117)
- [scripts/settings/talent/talent_settings_zealot.lua：452–458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L452-L458)
- [scripts/settings/projectile/player_projectile_templates.lua：286–314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L286-L314)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：102–128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L102-L128)
- [scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua：5–22](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua#L5-L22)
- [scripts/settings/buff/liquid_area_buff_templates.lua：137–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L137-L161)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：166–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L166-L205)
- [scripts/settings/buff/liquid_area_buff_templates.lua：27–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L27-L65)
- [scripts/settings/buff/liquid_area_buff_templates.lua：291–316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/liquid_area_buff_templates.lua#L291-L316)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua：21–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua：29–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：168–197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L168-L197)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：179–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L179-L205)

## 算例條件與待確認事項

- P=500、r=0.5、無暴擊弱點或其他修正：20 × (500 × 50 / 10000) × 2 = 100。r=0/1 時為 50/150。
- 火區生命週期 15 秒不等於每個敵人持續站滿 15 秒；總傷害須依實際傷害次數逐次累加。
- 每次傷害的亂數、間隔與站在區域內的時間不同；算例不預測固定總傷害。
- 「最有效對付無護甲敵人」是描述文字；此鎖定 SHA 的燃燒範本有多個護甲倍率，但尚未逐一實測不同護甲，因此不據此判定該句錯誤。
- 火焰阻路的依據是導航成本圖 fire / cost 5；它不等於所有敵人都必定停在火焰外。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5b720fa5`。
- Build 25606770 對照字串中，英文為 Burning and Staggering，繁中譯成「燃燒並使敵人暈眩」；Translation.md 將 Stagger/Staggering 對應為「踉蹌」，將 Stun 對應為「眩暈」。這是詞義明確不符，但該 build 文字只供翻譯比較，不作機制依據。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_flame_grenade.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa)

圖片僅供技能辨識，不作機制證據。

