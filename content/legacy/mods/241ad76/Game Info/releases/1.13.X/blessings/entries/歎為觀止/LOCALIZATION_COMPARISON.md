# 歎為觀止：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_chance_to_explode_elites_on_kill`／hash`2fb3b568`；描述鍵`loc_trait_bespoke_chance_to_explode_elites_on_kill_desc`／hash`6044aa55`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Showstopper／歎為觀止。

- 文件名稱：歎為觀止(Showstopper)。

- 適用武器：淨化噴火器、烈焰力場法杖、磷光爆破手槍；描述鍵`loc_trait_bespoke_chance_to_explode_elites_on_kill_desc`／hash`6044aa55`。

- 英文模板：{proc_chance:%s} chance Elite and Special enemies Explode on kill.

- 繁中模板：精英和專家敵人被擊殺後有{proc_chance:%s}幾率爆炸。

- **靜態重建**：三個變體的I–IV機率皆為14%／16%／18%／20%；以各級機率替換 `{proc_chance:%s}`。目前武器名稱由實際物品的家族／樣式／標記三組loc_id組成；不採舊單一display_name作型號名稱。

- **名稱拼字**：同hash RAW為「歎為觀止」，詞表既有「嘆為觀止」保留為異體拼字關聯。

- **淨化噴火器**：RAW家族／樣式／標記為淨化噴火器／奧特米亞／Mk III；鍵分別 `loc_weapon_family_flamer_p1_m1`／`loc_weapon_pattern_flamer_p1_m1`／`loc_weapon_mark_flamer_p1_m1`，hash分別`3a1829fc`／`8c443428`／`a5333762`。

- **烈焰力場法杖**：RAW家族／樣式／標記為烈焰力場法杖／裂隙避難所／Mk II；鍵分別 `loc_weapon_family_forcestaff_p2_m1`／`loc_weapon_pattern_forcestaff_p2_m1`／`loc_weapon_mark_forcestaff_p2_m1`，hash分別`a10ef2c3`／`04a6318c`／`d1986bf7`。

- **磷光爆破手槍**：RAW家族／樣式／標記為磷光爆破手槍／布蘭克斯／Mk XI；鍵分別 `loc_weapon_family_phosphor_pistol_p1_m1`／`loc_weapon_pattern_phosphor_pistol_p1_m1`／`loc_weapon_mark_phosphor_pistol_p1_m1`，hash分別`82c751cf`／`9b6d5431`／`4a084207`。

- 以上依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 適用敵人 | 英文與繁中都寫明 Elite／Special 敵人被擊殺後爆炸。 | [共用 gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2876-L2885)；精英／專家標籤取自死亡敵人的 breed。 | 一致 | 程式按 enemy breed 的 elite 或 special tag 判定；只具有 boss 身分或其他標籤不足。 |
| 燃燒狀態及來源 | 描述未說明燃燒狀態、燃燒種類或所有權。 | [共用 burn／source gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2887-L2906)；[owner 比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L864-L880) | 文件未涵蓋 | 目標須有該變體要求的燃燒關鍵字，或由本武器持有人以 burning 傷害擊殺；且擊殺者須為持有人或燃燒效果須由持有人提供。 |
| 綁定物品與切換 | 描述未說明同一武器物品比對或是否要求當下持用。 | [逐項物品名稱相等](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727)；[三個 wrapper 均只 merge proc_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L51-L59); [Flamer/Force Staff burn attribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L360-L382); [Phosphor burn attribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L48-L77); [既有 stack 沿用原實例](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461); [滿層及時間刷新不替換來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L597) | 文件未涵蓋 | on_item_match 比對事件來源物品與祝福物品；共用 proc 無手持狀態條件。三個燃燒施加路徑保存來源，既有 buff 加層或刷新不更新初始 source_item；切換後仍存續且來自本祝福物品的燃燒跳傷可觸發。 |
| 機率與冷卻 | RAW 顯示機率占位符，但未列各級數值、重試間隔或暴擊要求。 | [三變體 I–IV 數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L240-L278)；[proc 抽樣](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L380)；[無 cooldown 欄位時可啟動](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184); [法杖 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L44-L52); [磷光手槍 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L25-L33) | 文件未涵蓋 | 三個變體皆為14／16／18／20%；成功擊殺事件進行機率抽樣。共用模板沒有 cooldown、暴擊或堆疊 gate。 |
| 爆炸值及傷害 | 描述只說敵人爆炸，未列爆炸威力、半徑或距離衰減。 | [Flamer、Force Staff 爆炸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L446-L497)；[Phosphor 爆炸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L632-L657)；[damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L19-L90); [半徑、掩體及距離衰減](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L254-L304) | 文件未涵蓋 | 噴火器使用固定威力1000、基本半徑3且無距離衰減；另外兩者固定威力600、基本半徑4並有距離衰減。這些是威力與 profile 輸入，不是固定生命傷害。 |
| 爆炸連鎖與友軍 | 描述未說明爆炸擊殺是否會再次觸發，或爆炸是否傷及自己／隊友。 | [爆炸呼叫省略 item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2908-L2914)；[爆炸傷害用 item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L304-L319)；[友軍過濾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L180-L199) | 文件未涵蓋 | 此爆炸沒有來源物品，後續擊殺無法通過同物品比對，因此不連鎖本祝福；模板未啟用友軍傷害，爆炸不傷自己或隊友。 |
| Boss 分類 | RAW 僅列 Elite 和 Special，沒有承諾 boss 類敵人符合。 | [共用 gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2878-L2885)；[怪物首領範例](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua#L66-L69)、[captain 首領範例](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_captain_breed.lua#L71-L74) | 文件未涵蓋 | 此版本全部 is_boss breed 的 tags 稽核中均沒有 elite 或 special；boss 身分本身不會通過本祝福 gate。 |
