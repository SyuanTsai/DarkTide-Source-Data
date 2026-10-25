# 千里眼：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV tier and formatter | [Own I–IV tier and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L11-L49) |
| Own wrapper gate/fallback | [Own wrapper gate/fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L13-L26) |
| Parent camera review camera_handler.lua 272-288 | [Parent camera review camera_handler.lua 272-288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/player/player_game_states/camera_handler.lua#L272-L288) |
| Parent camera review base_camera.lua 94-112 | [Parent camera review base_camera.lua 94-112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/cameras/base_camera.lua#L94-L112) |
| Parent camera review base_camera.lua 313-338 | [Parent camera review base_camera.lua 313-338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/cameras/base_camera.lua#L313-L338) |
| Parent camera review aim_down_sight_camera.lua 1-38 | [Parent camera review aim_down_sight_camera.lua 1-38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/cameras/aim_down_sight_camera.lua#L1-L38) |
| Parent camera review camera_manager.lua 948-957 | [Parent camera review camera_manager.lua 948-957](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/camera_manager.lua#L948-L957) |
| Parent camera review buff_settings.lua 823-827 | [Parent camera review buff_settings.lua 823-827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L823-L827) |
| Parent camera review render_settings.lua 2683-2691 | [Parent camera review render_settings.lua 2683-2691](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/options/render_settings.lua#L2683-L2691) |
| Parent camera review camera_settings.lua 580-609 | [Parent camera review camera_settings.lua 580-609](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/camera/camera_settings.lua#L580-L609) |
| Parent camera review camera_manager.lua 1046-1094 | [Parent camera review camera_manager.lua 1046-1094](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/camera_manager.lua#L1046-L1094) |
| Parent camera review transform_camera.lua 1-31 | [Parent camera review transform_camera.lua 1-31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/cameras/transform_camera.lua#L1-L31) |
| Parent camera review player_unit_camera_extension.lua 45-72 | [Parent camera review player_unit_camera_extension.lua 45-72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/camera/player_unit_camera_extension.lua#L45-L72) |
| Parent camera review camera_manager.lua 38-50 | [Parent camera review camera_manager.lua 38-50](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/camera_manager.lua#L38-L50) |
| Parent camera review camera_handler.lua 249-276 | [Parent camera review camera_handler.lua 249-276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/player/player_game_states/camera_handler.lua#L249-L276) |
| Parent camera review base_camera.lua 15-25 | [Parent camera review base_camera.lua 15-25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/cameras/base_camera.lua#L15-L25) |
| Parent camera review lasgun_p1_m1.lua 543-553 | [Parent camera review lasgun_p1_m1.lua 543-553](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L543-L553) |
| Parent camera review lasgun_p1_m2.lua 540-550 | [Parent camera review lasgun_p1_m2.lua 540-550](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L540-L550) |
| Parent camera review lasgun_p1_m3.lua 541-551 | [Parent camera review lasgun_p1_m3.lua 541-551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L541-L551) |
| 步兵鐳射槍 卡特雷爾 Mk VII action hierarchy | [步兵鐳射槍 卡特雷爾 Mk VII action hierarchy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L130-L157) |
| 步兵鐳射槍 卡特雷爾 Mk VII hip-fire | [步兵鐳射槍 卡特雷爾 Mk VII hip-fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L205-L215) |
| 步兵鐳射槍 卡特雷爾 Mk VII aimed shot | [步兵鐳射槍 卡特雷爾 Mk VII aimed shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L280-L288) |
| 步兵鐳射槍 卡特雷爾 Mk VII zoom/unzoom | [步兵鐳射槍 卡特雷爾 Mk VII zoom/unzoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L351-L385) |
| 步兵鐳射槍 卡特雷爾 Mk VII flashlight special | [步兵鐳射槍 卡特雷爾 Mk VII flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L449-L485) |
| 步兵鐳射槍 卡特雷爾 Mk VII ADS camera values | [步兵鐳射槍 卡特雷爾 Mk VII ADS camera values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L547-L551) |
| 步兵鐳射槍 卡特雷爾 Mk VII trait import | [步兵鐳射槍 卡特雷爾 Mk VII trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII trait registration | [步兵鐳射槍 卡特雷爾 Mk VII trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb action hierarchy | [步兵鐳射槍 卡特雷爾 Mk IIb action hierarchy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L127-L154) |
| 步兵鐳射槍 卡特雷爾 Mk IIb hip-fire | [步兵鐳射槍 卡特雷爾 Mk IIb hip-fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L202-L212) |
| 步兵鐳射槍 卡特雷爾 Mk IIb aimed shot | [步兵鐳射槍 卡特雷爾 Mk IIb aimed shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L277-L285) |
| 步兵鐳射槍 卡特雷爾 Mk IIb zoom/unzoom | [步兵鐳射槍 卡特雷爾 Mk IIb zoom/unzoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L348-L382) |
| 步兵鐳射槍 卡特雷爾 Mk IIb flashlight special | [步兵鐳射槍 卡特雷爾 Mk IIb flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L446-L482) |
| 步兵鐳射槍 卡特雷爾 Mk IIb ADS camera values | [步兵鐳射槍 卡特雷爾 Mk IIb ADS camera values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L544-L548) |
| 步兵鐳射槍 卡特雷爾 Mk IIb trait import | [步兵鐳射槍 卡特雷爾 Mk IIb trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb trait registration | [步兵鐳射槍 卡特雷爾 Mk IIb trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX action hierarchy | [步兵鐳射槍 卡特雷爾 Mk IX action hierarchy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L127-L154) |
| 步兵鐳射槍 卡特雷爾 Mk IX hip-fire | [步兵鐳射槍 卡特雷爾 Mk IX hip-fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L202-L212) |
| 步兵鐳射槍 卡特雷爾 Mk IX aimed shot | [步兵鐳射槍 卡特雷爾 Mk IX aimed shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L278-L286) |
| 步兵鐳射槍 卡特雷爾 Mk IX zoom/unzoom | [步兵鐳射槍 卡特雷爾 Mk IX zoom/unzoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L349-L383) |
| 步兵鐳射槍 卡特雷爾 Mk IX flashlight special | [步兵鐳射槍 卡特雷爾 Mk IX flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L447-L483) |
| 步兵鐳射槍 卡特雷爾 Mk IX ADS camera values | [步兵鐳射槍 卡特雷爾 Mk IX ADS camera values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L545-L549) |
| 步兵鐳射槍 卡特雷爾 Mk IX trait import | [步兵鐳射槍 卡特雷爾 Mk IX trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX trait registration | [步兵鐳射槍 卡特雷爾 Mk IX trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| AlternateFire start | [AlternateFire start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L10-L21) |
| AlternateFire stop | [AlternateFire stop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L65-L78) |
| AlternateFire camera-variable radians conversion | [AlternateFire camera-variable radians conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L188-L212) |
| AimAction start | [AimAction start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_aim.lua#L20-L23) |
| UnaimAction stop | [UnaimAction stop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_unaim.lua#L19-L25) |
| UnwieldAction stop | [UnwieldAction stop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_unwield.lua#L38-L47) |
| Camera tree selects ADS | [Camera tree selects ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/camera/player_unit_camera_extension.lua#L41-L72) |
| UI item name components | [UI item name components](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI display name assembly | [UI display name assembly](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Zoom transition smoothstep | [Zoom transition smoothstep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/camera/camera_transition_templates.lua#L94-L113) |
| First-person camera global multiplier flag | [First-person camera global multiplier flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/camera/camera_settings.lua#L504-L525) |
| Camera manager global FOV initialization | [Camera manager global FOV initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/camera/camera_manager.lua#L86-L96) |
| Applicable common cache trait-equip-target | [Applicable common cache trait-equip-target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Applicable common cache weapon-equip-install | [Applicable common cache weapon-equip-install](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Applicable common cache weapon-unwield-lifecycle | [Applicable common cache weapon-unwield-lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Applicable common cache conditional-stat-override | [Applicable common cache conditional-stat-override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

唯一實際 trait 的 I–IV 都在 `stat_buffs.fov_multiplier` 設為 0.85。wrapper 同名 conditional 值為 0.95，但條件函式要求物品在手且替代瞄準啟用；tier 的同名 stat override 取代 conditional 備用值，不把 0.85 與 0.95 相乘。共用 per-key conditional-stat 規則只在本項 tier、wrapper、實際 buff 已確認後套用。

三個實際型號都以瞄準動作啟動替代瞄準；普通腰射單發不啟動此條件。瞄準中的射擊仍是單發；瞄準手電筒特殊輸入留在 zoom 路徑，腰射特殊輸入則是手電筒切換。放開 zoom 走 unaim 並停止替代瞄準，切換武器的 unwield 也會停止。

三個武器模板提供 45° ADS 相機輸入；相機變數工具先把度轉成弧度，再由 camera handler 傳入 zoom 角度與角色 `fov_multiplier` 快取。第一人稱替代瞄準會選 ADS 相機節點。ADS update 先用舊乘數寫入垂直視角，再更新平滑乘數；BaseCamera 繼承 getter 又乘目前乘數與外部因子，然後相機管理器處理節點轉場及玩家全域視角因子。故不能將每一影格簡化成只乘一次 0.85，也不能將算例當精確遊戲測量。`custom_vertical_fov` 雖有傳入，但 ADS update 沒有對它套用本項乘數；本文不推論該通道的畫面效果。

令 `V=45°` 為三個實際瞄準相機輸入，`r_prev` 為 ADS 更新寫入視角欄位時的前次乘數，`r_now` 為 BaseCamera getter 讀取的目前乘數，`E` 為外部相機因子，`G` 為玩家全域視角因子。忽略轉場時，受控垂直角為 `V_out = V × r_prev × E × r_now × G`；有節點轉場時，實際輸出還取決於轉場取樣。

四級條件屬性的目標乘數都是 0.85；鏡頭採用的前後取樣值仍受平滑插值影響。若 `r_prev=r_now=0.85` 且 `E=G=1`，則 `45×0.85×0.85=32.5125°`。此式描述視角角度，不是目標尺寸或放大倍率公式。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_045`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_045.png)｜[Issue附件](https://github.com/user-attachments/assets/4dbeb712-e6a5-4bd9-8798-a5e3a93cd4ea)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵鐳射槍等級覆寫 | [步兵鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L11-L49) |
| 步兵鐳射槍Buff接入 | [步兵鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L13-L26) |
| UI 步兵鐳射槍 | [UI 步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L870) |
| 步兵鐳射槍 卡特雷爾 Mk VII匯入 | [步兵鐳射槍 卡特雷爾 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII接入 | [步兵鐳射槍 卡特雷爾 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb匯入 | [步兵鐳射槍 卡特雷爾 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb接入 | [步兵鐳射槍 卡特雷爾 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX匯入 | [步兵鐳射槍 卡特雷爾 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX接入 | [步兵鐳射槍 卡特雷爾 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
