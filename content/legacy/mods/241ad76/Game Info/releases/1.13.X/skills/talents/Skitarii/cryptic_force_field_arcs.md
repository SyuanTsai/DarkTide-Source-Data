# 電流抗性(Voltaic Resistance)：原始碼依據

[English](en/cryptic_force_field_arcs.md)

[返回玩家說明](README.md#cryptic_force_field_arcs)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_force_field_arcs)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_force_field_arcs`；名稱鍵：`loc_talent_cryptic_force_field_arcs`；描述鍵：`loc_talent_cryptic_force_field_arcs_desc`。
- 節點：`node_a2f854fa-6833-41cb-8022-e5a4617d8646`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點啟用 cryptic_force_field_generates_arcs_based_on_hits_blocked 後，力場健康擴充在力場物件到期時由 fixed_update 呼叫 kill；受遠程攻擊使其生命值歸零也會呼叫 kill。若伺服器端施放者仍存活且特長啟用，kill 會計算 ceil(吸收遠程攻擊數/6)，再 clamp 到1至4。0次攻擊時原始計算為0，仍會被 clamp 成1；到期路徑沒有先檢查攻擊次數，因此零次吸收仍實際進入找目標流程。程式接著查詢玩家周圍12公尺的敵人，只選存活、可指定且位於玩家前方（方向點積大於0.5）的目標；找不到目標時不會實際發射。每個初選目標啟動 force_field_arc_chain_lightning_source，連鎖半徑12公尺，最多4次跳躍。此結束電弧與力場本身啟動／結束時的5公尺爆炸分開。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：876–891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L876-L891)
- [scripts/settings/talent/talent_settings_cryptic.lua：164–176](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L176)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：24–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L24-L39)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：80–100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L80-L100)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：141–196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L141-L196)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua：21–40](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua#L21-L40)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua：42–55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua#L42-L55)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：103–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L125)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：56–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L56-L64)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：103–114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L114)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：876–891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L876-L891)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2530–2553](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2530-L2553)

## 算例條件與待確認事項

- 力場結束時吸收0至6次遠程攻擊→1道，7至12次→2道，13至18次→3道，19次以上→4道上限；即使0次也會算出1道，但須有前方12公尺內的有效目標。
- 0次吸收會由下限 clamp 成1道，且到期時會執行尋找目標；若前方12公尺內沒有存活且可指定敵人，實際沒有電弧目標。
- 只計遠程攻擊或被標記為遠程的攻擊，不按攻擊傷害量計數。
- 額外連鎖受有效目標、連鎖距離與4次跳躍上限影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`143e5c50`。
- 固定原始碼確認按吸收遠程攻擊數以每6次取上限整數後限制1至4道；0次也會由下限算成1道，並在正常到期路徑進入找目標流程。繁中描述未列出整數門檻、最低值及前方12公尺目標條件，屬翻譯省略的實作細節，不列為錯誤。本機 Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_arcs.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b)

圖片僅供技能辨識，不作機制證據。

