# 魔力彈藥(Charmed Reload)：雙鏈重型機槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

實作`weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit`。[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L362-L391) → [Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L41-L41)。

普通proc_buff監聽on_critical_strike，持用時執行；沒有命中、攻擊類型、正傷害、冷卻或層數檢查。ActionWeaponBase在新的暴擊判定成功時立即送事件，所以射空也可觸發，符合條件的本武器近戰暴擊也走同一事件；不以攻擊命中多少敵人或射出幾顆彈丸決定次數。[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)、[Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

自動射擊既有暴擊連發只遞增num_critical_shots，沒有再次呼叫判定；三型號腰射／瞄準模板max_critical_shots=6，因此一段成功判定最多延續六發，不能以每發暴擊命中都轉移N解讀。[延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)、[設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L825-L890)。

效果執行時讀所有使用中彈匣的總數及容量，用min(N,容量−當前總匣,備彈)決定轉移；Ammo按各匣填滿比例分配而非單一槍管額外生成一份。[總量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L210-L242)、[分配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L274-L362)。暴擊事件在判定時入列，射擊消耗由動作另外處理；算例以proc真正讀取時的匣／備彈狀態為前提，不把排程入列時與實際執行時混為一刻。[消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L540-L560)。

令N為等級值，C／M為效果執行時總彈匣現值／上限，R為備彈。`a=min(N,M−C,R)`，`C'=C+a`，`R'=R−a`；於合法容量狀態下`C'+R'=C+R`。[轉移算式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998)。假設N=5,C=80,M=100,R=50，a=5，結果85／45、總130發；C=98時a=2，100／48總148；R=2時a=2，82／0總82。單位是發數，沒有傷害或最大備彈百分比倍率。

固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`，以上為靜態原始碼推導，未遊戲內驗證。MasterItems138291的Steam Build歸屬與後端可取得等級未知；其他武器的同名變體未核對。
