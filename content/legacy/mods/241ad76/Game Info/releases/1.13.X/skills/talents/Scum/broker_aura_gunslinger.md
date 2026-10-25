# 神射手(Gunslinger)：基礎光環：原始碼依據

[English](en/broker_aura_gunslinger.md)

[返回基礎效果](BASE_EFFECTS.md#broker_aura_gunslinger)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_aura_gunslinger`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broker_archetype.lua 將 broker_aura_gunslinger 列入 base_talents。天賦透過 broker_aura coherency identifier 套用 broker_aura_gunslinger buff；基礎 share 比例為 0.05，改良版另行複製同一模板並把比例設為 0.1。
- buff 監聽 on_ammo_pickup，讀取該次 pickup_name 對應的 Pickups.by_name 資料，複製資料並把 modifier 設為 0.05，再取得自身 coherency_system 的 in_coherence_units，逐一呼叫 Ammo.add_ammo_using_pickup_data。
- 彈藥工具依每個武器欄位的 pickup_amount_func 與該欄位儲備／彈匣缺口計算實際補量；只處理 max_ammunition_reserve 大於 0 的欄位，並以可補的儲備加彈匣缺口為上限。分享補給以 skip_proc=true 執行，避免分享結果再次觸發同一撿取事件。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L750-L776)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L815-L863)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L616)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L615)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L859-L863)

## 算例與待確認事項

- 若某彈藥撿取依目前武器設定會補 100 發，且每名隊員都有足夠空間，5%×100=每人 5 發；實際值由各自武器的彈藥規則及剩餘空間決定。
- 5% 是對該撿取資料所提供彈藥量套用的比例，不是提高彈藥上限，也不是固定每人補 5 發。
- 實際補量會受彈藥撿取類型、各武器欄位容量及缺彈情況限制；本段原始碼未指定所有武器撿取的固定發數。
- 特殊關卡大型彈藥箱是否經相同事件，以及分享實際行為未做遊戲內驗證。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
