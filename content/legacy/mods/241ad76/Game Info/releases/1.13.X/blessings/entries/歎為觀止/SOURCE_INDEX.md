# 歎為觀止：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Purgation Flamer I–IV 覆寫 | [Purgation Flamer I–IV 覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L240-L278) |
| Inferno Force Staff I–IV 覆寫 | [Inferno Force Staff I–IV 覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L343-L381) |
| Phosphor Blast Pistol I–IV 覆寫 | [Phosphor Blast Pistol I–IV 覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L473-L511) |
| Flamer trait buff wrapper | [Flamer trait buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L51-L59) |
| Force Staff trait buff wrapper | [Force Staff trait buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L44-L52) |
| Phosphor trait buff wrapper | [Phosphor trait buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L25-L33) |
| 共用 proc gate、burn owner gate、爆炸呼叫 | [共用 proc gate、burn owner gate、爆炸呼叫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2865-L2915) |
| 機率抽樣及無 cooldown 時可啟動 | [機率抽樣及無 cooldown 時可啟動](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184) |
| proc event 機率判定 | [proc event 機率判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L380) |
| 命中事件物品比對 | [命中事件物品比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| on-kill 事件欄位與死亡條件 | [on-kill 事件欄位與死亡條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Flamer burn 傷害與物品傳遞 | [Flamer burn 傷害與物品傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78) |
| Force Staff warp fire 傷害與物品傳遞 | [Force Staff warp fire 傷害與物品傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L101-L128) |
| Phosphor burn 傷害與物品傳遞 | [Phosphor burn 傷害與物品傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2440-L2470) |
| burn buff 持有者判定 | [burn buff 持有者判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L864-L880) |
| 三種爆炸半徑、固定威力與 falloff | [三種爆炸半徑、固定威力與 falloff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L446-L497) |
| Phosphor 爆炸參數 | [Phosphor 爆炸參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L632-L657) |
| 爆炸建立、固定威力覆寫與友軍排除 | [爆炸建立、固定威力覆寫與友軍排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L90) |
| 爆炸目標、友軍與自傷過濾 | [爆炸目標、友軍與自傷過濾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L176-L200) |
| 爆炸佇列保留 item_or_nil | [爆炸佇列保留 item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L273-L290) |
| 爆炸傷害傳遞 item_or_nil | [爆炸傷害傳遞 item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L218-L223) |
| 爆炸造成擊殺時傳遞 item_or_nil | [爆炸造成擊殺時傳遞 item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L304-L319) |
| default_grenade 近遠距傷害分配 | [default_grenade 近遠距傷害分配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L19-L90) |
| Beast of Nurgle boss tags | [Beast of Nurgle boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_beast_of_nurgle_breed.lua#L77-L80) |
| Daemonhost boss tags | [Daemonhost boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_daemonhost_breed.lua#L63-L67) |
| Daemonhost Torment boss tags | [Daemonhost Torment boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_daemonhost_torment_breed.lua#L65-L69) |
| Mutator Daemonhost boss tags | [Mutator Daemonhost boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_mutator_daemonhost_breed.lua#L67-L72) |
| Ogryn Houndmaster boss tags | [Ogryn Houndmaster boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_ogryn_houndmaster_breed.lua#L75-L80) |
| Plague Ogryn boss tags | [Plague Ogryn boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua#L66-L69) |
| Chaos Spawn boss tags | [Chaos Spawn boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_spawn_breed.lua#L67-L70) |
| Cultist Captain boss tags | [Cultist Captain boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_captain_breed.lua#L71-L74) |
| Renegade Captain boss tags | [Renegade Captain boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_captain_breed.lua#L71-L74) |
| Renegade Twin Captain boss tags | [Renegade Twin Captain boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_twin_captain_breed.lua#L75-L78) |
| Renegade Twin Captain Two boss tags | [Renegade Twin Captain Two boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_twin_captain_two_breed.lua#L75-L78) |
| Renegade Wizard boss tags | [Renegade Wizard boss tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_wizard_breed.lua#L73-L77) |
| Flamer weapon trait import | [Flamer weapon trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| Flamer weapon traits ukeys | [Flamer weapon traits ukeys](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745) |
| Flamer weapon trait append | [Flamer weapon trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L747) |
| Force Staff weapon trait import | [Force Staff weapon trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| Force Staff weapon traits ukeys | [Force Staff weapon traits ukeys](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223) |
| Force Staff weapon trait append | [Force Staff weapon trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1225) |
| Phosphor weapon trait import | [Phosphor weapon trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| Phosphor weapon traits ukeys | [Phosphor weapon traits ukeys](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141) |
| Phosphor weapon trait append | [Phosphor weapon trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1143) |
| Flamer and Force Staff burns retain weapon item | [Flamer and Force Staff burns retain weapon item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L360-L382) |
| Flamer burst and Force Staff burst burns retain weapon item | [Flamer burst and Force Staff burst burns retain weapon item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L313-L328) |
| Phosphor burn application retains source_item | [Phosphor burn application retains source_item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L48-L77) |
| 燃燒 tick 的 source_item 攻擊傳遞 | [燃燒 tick 的 source_item 攻擊傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L63-L75) |
| BuffUtils 燃燒狀態保存來源物品 | [BuffUtils 燃燒狀態保存來源物品](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L48-L77) |
| 既有堆疊保留初始 context | [既有堆疊保留初始 context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461) |
| 滿層刷新與一般 duration refresh | [滿層刷新與一般 duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L597) |
| 爆炸距離、掩體與 falloff 結算 | [爆炸距離、掩體與 falloff 結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L254-L304) |
| 爆炸半徑插值與通用半徑加成 | [爆炸半徑插值與通用半徑加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502) |
| 實際燃燒模板名稱 | [實際燃燒模板名稱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/flamer_gas_templates.lua#L6-L65) |
| 噴火器短噴燃燒接入 | [噴火器短噴燃燒接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L266-L270) |
| 噴火器連噴燃燒接入 | [噴火器連噴燃燒接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L335-L338) |
| 法杖短噴燃燒接入 | [法杖短噴燃燒接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L359-L364) |
| 法杖充能連噴燃燒接入 | [法杖充能連噴燃燒接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L501-L506) |
| 磷光固有燃燒接入 | [磷光固有燃燒接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2398-L2413) |
| 首次Buff建立保存來源context | [首次Buff建立保存來源context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L67-L80) |
| 同名燃燒新建與加層分支 | [同名燃燒新建與加層分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L471) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個 trait definition 都以 on_kill 的 trait override 提供 I–IV 機率0.14／0.16／0.18／0.20；三個 wrapper 皆 clone 共用 chance_to_explode_elites_on_kill，只 merge 各自的 fire_buff_id、explosion_template 與 validation_keywords。

- Attack 只在 attack_result == died 時建立 on_kill 事件，並送到本次攻擊者所屬的 attacker_owner_buff_extension；事件帶有 attacking_item。故 has_buff_id_with_owner 檢查不是讓隊友擊殺遠端觸發他人祝福的入口。

- 共用 check_proc_func 依序核對事件物品與祝福物品名稱、死亡敵人的 elite 或 special tag、燃燒 keyword 或本持有人以 burning 傷害擊殺，以及擊殺者／燃燒效果的持有人條件。proc template 本身沒有額外的 currently-wielded 條件，物品來源仍須相符。

- 三種燃燒初次施加都保存來源物品：FlamerGas 一般與 burst action 將 weapon_item 傳為 flamer_assault／warp_fire 的 source_item；磷光手槍的 BuffUtils.add_proc_debuff 將 template_context.source_item 傳給 phosphor_burn。三個 interval tick 再以 source_item 作 Attack.execute 的 item。

- BuffExtensionBase 對既有可堆疊 buff 呼叫 existing_buff_instance:add_stack，沒有改寫原 template_context；達上限時只刷新時間。故同一燃燒實例後續加層或刷新都不替換首次保存的 source_item。燃燒跳傷只有在其事件物品與祝福物品相同時能通過 on_item_match。

- 噴火器來源 flamer_assault：基本duration設定4秒、每0.5秒 tick、最多31層，keyword burning；烈焰力場法杖來源 warp_fire：基本duration設定8秒、每0.75秒 tick、最多31層，keywords burning 與 warpfire_burning，tick damage_type 為 warpfire；磷光手槍來源 phosphor_burn：基本duration設定20秒、每0.55秒 tick、上限1層，keyword burning。

- 成功時在死亡目標中心位置呼叫 Explosion.create_explosion。噴火器 static_power_level 1000、radius 3、min_radius 0.25、damage_falloff=false；另外兩者 static_power_level 600、radius 4、min_radius 0.5、damage_falloff=true；三者使用 default_grenade damage profile，並查詢 heroes、villains、destructibles。

- 爆炸範圍結算仍經掩體 raycast；開啟距離衰減時，WeaponSystem 依目標距離與 close_radius／radius 求 dropoff。模板沒有友軍傷害覆寫，Explosion 過濾自我與同側隊友。

- 共用 proc 呼叫 Explosion.create_explosion 時未提供 item；佇列將 nil 傳至爆炸 Attack.execute，故爆炸擊殺不能通過後續 on_item_match，不會連鎖本祝福。

- 每個合格 on_kill 事件的機率 p：I–IV = 0.14／0.16／0.18／0.20；n 個彼此獨立事件的預期觸發數為 n × p，至少觸發一次為 1 − (1 − p)^n。

- I級5次獨立合格事件：1 − 0.86^5 = 0.5295729824，即52.95729824%，四捨五入52.96%。

- 開啟距離衰減的法杖／手槍爆炸，WeaponSystem 先依實際命中距離減去目標 breed 的 explosion_radius，再以 close_radius 與 radius 計算 falloff scalar：clamp(((hit_distance − close_radius) ÷ (radius − close_radius))^2, 0, 1)；未開距離衰減時 scalar 不按距離縮小。掩體 raycast 仍先檢查命中。

- 三個爆炸模板的 static_power_level 是傷害結算威力輸入而非生命值；皆使用 default_grenade，其中 ranged attack power_distribution 為 near 200、far 100，另依距離與護甲種類套用倍率。未指定目標、護甲、距離及掩體條件時，不報固定 HP 傷害。

- 三個模板未設定 scalable_radius 或 close_radius；本祝福呼叫的 charge_level=1，解析後 close_radius=0，基本 radius 分別3／4／4。通用 explosion_radius_modifier 會乘上基本半徑；min_radius 是充能插值的下界，不是近距離傷害區。法杖與磷光手槍因此以 clamp((hit_distance ÷ 實際radius)^2, 0, 1) 作距離衰減輸入。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_161`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_161.png)｜[Issue附件](https://github.com/user-attachments/assets/c028ae7c-f62f-4407-b9b2-7420eebf0fe8)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L240-L278) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L51-L59) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 烈焰力場法杖等級覆寫 | [烈焰力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L343-L381) |
| 烈焰力場法杖Buff接入 | [烈焰力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L44-L52) |
| UI 烈焰力場法杖 | [UI 烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L818) |
| 烈焰力場法杖 裂隙避難所 Mk II匯入 | [烈焰力場法杖 裂隙避難所 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| 烈焰力場法杖 裂隙避難所 Mk II接入 | [烈焰力場法杖 裂隙避難所 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L473-L513) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L25-L35) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
