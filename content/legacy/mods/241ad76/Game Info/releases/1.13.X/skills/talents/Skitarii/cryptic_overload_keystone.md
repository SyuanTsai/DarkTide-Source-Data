# 能量超載(Power Overload)：原始碼依據

[English](en/cryptic_overload_keystone.md)

[返回玩家說明](README.md#cryptic_overload_keystone)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_overload_keystone`；名稱鍵：`loc_talent_cryptic_overload_keystone`；描述鍵：`loc_talent_cryptic_overload_keystone_coherency_desc`。
- 節點：`node_2b657eae-4687-4860-a0c8-d87ac8266e32`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- cryptic_tree.lua 的節點154–182將 cryptic_overload_keystone 設為護教軍鑰石；天賦定義掛載 cryptic_overload_keystone buff。設定值為每一般擊殺1層、精英或專家擊殺2層、上限30層、隊伍增益15%傷害／0.85韌性承傷倍率／8秒。
- 擊殺事件只接受有 attacking_unit、該單位有玩家 owner 且位於此角色協同範圍內的事件。CheckProcFunctions 另外要求 attack_result 為 died，並依 tags.elite 或 tags.special 決定是否給2層；一般合格擊殺給1層。
- 初始化先加入一個底層 stack，stack_offset=-1，因此 HUD/門檻讀值以0為起點。累積層不設 duration；_add_overload_stack 先取 current_stacks−1 作可見層數，當目前層數加本次增量大於或等於30時觸發一次、移除已追蹤的層並清單，超過門檻的剩餘增量不再處理。
- 觸發時先清空累積，再依是否選用修改器決定播放一般特效或建立爆炸。隨後對協同集合中的非 companion 單位施加8秒隊伍 buff；該 buff 為單層且 refresh_duration_on_stack=true，效果是 damage=+0.15 與 toughness_damage_taken_multiplier=0.85。
- 傷害屬性在 buff_settings 為 additive_multiplier；韌性承傷倍率為 multiplicative_multiplier。0.85表示承受韌性傷害乘0.85，即15%減少。
- 可選修改器會改變觸發內容：爆擊能量過載開啟敵人範圍爆炸／電擊承傷削弱；振奮過載在協同成員身上恢復20%韌性與20%耐力；靜電電容消耗每8／16／24次過載依序加永久增益；動力驅動使每消耗一個戰鬥技能充能額外增加5層。
- talent_settings_cryptic.lua 定義 num_stacks_per_hit_on_monster_or_captains=1，但固定來源全檔搜尋僅找到該定義，啟用中的 cryptic_overload_keystone 模板沒有讀取它；不把它描述成對怪物或隊長命中會加層的有效效果。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：154–182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L154-L182)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1232–1283](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1232-L1283)
- [scripts/settings/talent/talent_settings_cryptic.lua：264–295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L295)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1530–1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1530-L1593)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1595–1614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1595-L1614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1619–1771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1619-L1771)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1773–1808](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1773-L1808)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L117)
- [scripts/settings/buff/buff_settings.lua：763–763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/settings/buff/buff_settings.lua：1003–1003](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1003-L1003)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1232–1283](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1232-L1283)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：154–182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L154-L182)

## 算例條件與待確認事項

- 靜態推演：28層時由協同隊友擊殺一名精英或專家，事件加2層正好到30，立即觸發隊伍增益並歸零。
- 靜態推演：增益期間，沒有其他增傷時100點基礎傷害變為115點；在沒有其他減傷且100點全由韌性承受時，0.85承傷倍率使實際韌性傷害為85點。
- 靜態推演：29層時發生一次加2層的精英或專家擊殺，因29+2大於30仍只觸發一次；增量不會再逐個累計成額外觸發，剩餘層數丟棄。
- 核心技能本身沒有堆疊倒數；只有達門檻的過載會清空累積。
- 未選爆擊能量過載時，核心觸發分支播放效果與音效，不建立敵方傷害爆炸；敵方電擊與承傷削弱屬於該修改器。
- 每個隊伍增益只對觸發當下協同集合中的非 companion 單位施加；重複觸發會重設既有8秒增益的持續時間。
- 靜態推演依固定原始碼完成，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`58d058f4`。
- inventory 的繁中與英文均描述協同擊殺給層、一般1層／精英與專家2層、上限30、到頂重置以及8秒隊伍傷害與韌性減傷。固定版支持這些效果；傷害增量的單次事件溢出不保留屬UI省略細節，未發現明確誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_overload_keystone.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3)

圖片僅供技能辨識，不作機制證據。

