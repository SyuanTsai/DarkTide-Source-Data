# 子彈風暴(Bulletstorm)：原始碼依據

[English](en/ogryn_blo_ally_ranged_buffs.md)

[返回玩家說明](README.md#ogryn_blo_ally_ranged_buffs)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_blo_ally_ranged_buffs)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_blo_ally_ranged_buffs`；名稱鍵：`loc_talent_ogryn_blo_ally_ranged_buffs`；描述鍵：`loc_talent_ogryn_blo_ally_ranged_buffs_desc`。
- 節點：`node_e189b488-7881-4acf-ad96-3a90b6913e49`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Buff 的 `check_proc_func` 只檢查 `params.is_leadbelcher_shot`，隨後枚舉 `coherency_extension:in_coherence_units()` 並加上 ally buff；沒有 hit result 條件。
- 接收 buff `max_stacks=1`、`refresh_duration_on_stack=true`、`duration=8`、`ranged_damage=0.15`。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2717–2736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2717-L2736)
- [scripts/settings/talent/talent_settings_ogryn.lua：172–175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L172-L175)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3638–3677](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3638-L3677)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：481–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：51–52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L51-L52)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2717–2736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2717-L2736)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：859–882](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L859-L882)

## 算例條件與待確認事項

- **算例**：第 0 秒觸發後，第 6 秒再次觸發，增益會再維持 8 秒，直到第 14 秒。
- **傷害算例**：基礎 100 點遠程傷害變成 100 × (1 + 15%) = 115 點；同階段另有 20% 時為 135 點。增傷不累積層數。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 繁中寫「幸運子彈命中時」，但同組英文寫的是「on Lucky Bullet」；指定來源的觸發條件只看幸運子彈標記，未檢查命中。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`99f32156`。
- 繁中寫「幸運子彈命中時」，英文寫「on Lucky Bullet」；固定來源只檢查是否觸發幸運子彈，不檢查是否命中。繁中因此多出命中條件。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_ally_ranged_buffs.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760)

圖片僅供技能辨識，不作機制證據。

