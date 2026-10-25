# 伺服頭骨(Servo-Skull)：原始碼依據

[English](en/cryptic_servo_skull_order.md)

[返回基礎效果](BASE_EFFECTS.md#cryptic_servo_skull_order)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`cryptic_servo_skull_order`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎天賦 cryptic_servo_skull_order 將 PlayerAbilities.cryptic_servo_skull_order_base 裝入閃擊欄位，提供1次能力使用次數，能力冷卻16秒、每秒恢復1秒冷卻資源；pause_fulfilled_func 在同伴仍持有 cryptic_servo_skull_temporary_buff 時回傳 false，因此冷卻在強化期間暫停。天賦特殊規則 cryptic_servo_skull_hack 由 SpawnCompanionsFromTalent 觸發生成伺服頭骨並設 can_shoot=true。按下能力會消耗1次使用次數，給頭骨 cryptic_servo_skull_temporary_buff，持續8秒；其 minion_shoot_cooldown_modifier=0.5 令射擊間隔成為原來一半（速率為原來2倍），damage_modifier=0.25。該限時效果開始時會在玩家掛載 cryptic_servo_skull_order server_only_proc_buff；此獨立同名增益只接受 on_hit 中 attack_instigator_unit 等於 hack 伺服頭骨且目標仍存活的命中，伺服頭骨命中時施加 cryptic_servo_skull_debuff（damage_taken_modifier=0.15、5秒）與1層 flamer_assault；目標已有8層燃燒時只重設燃燒的持續時間。控制方式另由 cryptic_double_tag_templates 提供：可解碼互動目標通過 hacking 驗證時進入 hacking 狀態，該行為的能力使用成本設定為0；敵人射擊命令檢查戰鬥技能至少有30%充能，訓練場不檢查此門檻。選擇 cryptic_servo_skull_improved 時能力改成 inactive 版本，並直接常駐套用複製後移除期限與啟停函式的 companion 強化效果，同時把 cryptic_servo_skull_order proc buff 作為被動掛載；因此這份基礎說明中的8秒手動強化不應套用到該改良節點。
- 本機Steam Build25606770：描述鍵 `loc_talent_cryptic_servo_skull_base_burn_desc`、同源中英hash `a5b8ce99` 已精確配對。中英均列出命令、強化8秒、射速與傷害增幅、燃燒及易傷；冷卻在強化期間暫停屬未展開細節，不是錯誤。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L569-L628)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L50-L64)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L34-L68)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_servo_skull_order_base.lua#L6-L39)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L41)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L28)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1209)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/cryptic_double_tag_templates.lua#L12-L139)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L423-L571)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L19-L58)

## 算例與待確認事項

- 靜態算例：不計其他冷卻修正，啟動後前8秒能力冷卻暫停；強化結束後以16秒恢復，因此從啟動到重新可用約24秒。
- 射速算例：原射擊間隔假設為3秒，套用0.5間隔倍率後為3×0.5=1.5秒；同一段時間內射擊速率加倍。實際單發傷害依頭骨攻擊資料與目標而定，這裡只比較天賦倍率。
- 以上時間與射速算例是依程式設定靜態推算，未作遊戲內測試；實際總等待時間可能受其他冷卻修正影響。
- 雙按標記射擊命令的30%門檻檢查戰鬥技能充能；若選擇「心智網指令」，額外射速強化會再消耗該充能，細節見對應天賦草稿。
- 改良節點把頭骨傷害與射速提升改為常駐，並常駐命中效果；本基礎天賦的限時能力規則不代表改良節點。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
