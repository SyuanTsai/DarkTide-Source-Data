# 精進神射手(Gunslinger Improved)：原始碼依據

[English](en/broker_aura_gunslinger_improved.md)

[返回玩家說明](README.md#broker_aura_gunslinger_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_aura_gunslinger_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_aura_gunslinger_improved`；名稱鍵：`loc_talent_broker_aura_gunslinger_improved`；描述鍵：`loc_talent_broker_aura_gunslinger_improved_desc`。
- 節點：`node_8899507b-9a1c-41c4-8107-a3e559dc2172`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- clonebase ammo_share=.1/coherencypriority1優先於base2。同coherency_id只取最低priority的一份。
- on_ammo_pickup複製pickupdata改modifier=.1，對撿取者in_coherence_units呼叫Ammo.add_ammo_using_pickup_data(...,true)防遞迴。每人ammo_amount_func重算自身容量。
- 例外：large_ammunition_crate_pickup忽略modifier，若該來源發出相同pickup事件，會按全容量計；不宣稱所有場景補給都嚴格10%。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：815–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L815-L863)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：260–309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/ammo.lua：560–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L615)
- [scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua：3–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua：3–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua：3–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua：3–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：859–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L859-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：777–802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L777-L802)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：353–379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L353-L379)

## 算例條件與待確認事項

- **小彈藥算例**：小彈藥原補 15% 備用彈藥，分享量為個人備用彈藥上限 × 15% × 10%，無條件進位。上限 200 的隊友得到 3 發，上限 100 的隊友得到 ⌈1.5⌉ = 2 發。
- 特殊關卡大型彈藥箱是否經相同事件，以及分享實際行為未做遊戲內驗證。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`03a59c5c`。
- 兩語皆說協同撿取分享10%；各人依容量換算是公式補充，特殊補給不讀modifier的程式例外留待場景驗證。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/aura/broker_aura_gunslinger_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c)

圖片僅供技能辨識，不作機制證據。

