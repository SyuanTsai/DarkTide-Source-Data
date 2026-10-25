# 1.13.0 → 1.13.1：天賦差異

[English](TALENT_CHANGES_1.13.0_TO_1.13.1.en.md)
[技能分類](README.md)｜[版本資訊](../README.md)｜[文字差異](../source/TEXT_DIFF_1.13.0_TO_1.13.1.md)

## 天賦效果

老兵、靈能者、狂信徒、歐格林、法務官、巢都渣滓與護教軍的天賦效果相同。巢都渣滓的興奮劑配方、各職業基礎效果，以及傷害、韌性恢復、冷卻、疊層與電容量公式也沒有變更。

既有繁中及英文天賦文字相較1.13.0沒有變更；原有勘誤仍適用。描述省略公式或例外，仍只視為資訊不完整，不列為翻譯錯誤。文字與實作的既有疑點，仍需遊戲內核對。

上述結論限於[1.13.0原始碼](https://github.com/Aussiemon/Darktide-Source-Code/tree/419fe18d414a618ce0474bd015bab470afb446d6)與[1.13.1原始碼](https://github.com/Aussiemon/Darktide-Source-Code/tree/7e662fcda16219d775b84af50322be2e9cd9d62e)的[固定版本差異](https://github.com/Aussiemon/Darktide-Source-Code/compare/419fe18d414a618ce0474bd015bab470afb446d6...7e662fcda16219d775b84af50322be2e9cd9d62e)。

## 實戰與測試條件

- **浩劫敵人強化**：部分敵人強化詞條改為在載入時啟用。它們包含影響遠程承傷與踉蹌的效果；同一武器與天賦，對受強化的敵人可能得到不同傷害或控場結果。比較天賦增幅時，須固定浩劫詞條與敵人狀態。[詞條啟用設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/mutator/templates/mutator_havoc_templates.lua#L27-L182)、[載入與啟用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/mutator/mutator_manager.lua#L55-L67)、[遠程承傷效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/havoc_buff_templates.lua#L514-L534)、[踉蹌限制](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/havoc_buff_templates.lua#L2138-L2144)。
- **生存模式補給**：額外補給改為讀取正確的補給池。這會影響任務中的補給來源，不會改變天賦本身的恢復比例或冷卻公式。[補給來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/game_mode/game_modes/game_mode_survival.lua#L1290-L1296)。
- **訓練場難度**：已儲存的難度值無效時，改用第3級設定。測試傷害時應再次確認訓練場難度，不能只依舊存檔的設定推定。[難度選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/training_grounds_options_view/training_grounds_options_view.lua#L198-L208)。

首領的階段參數與場地障礙數量也有調整，屬於遭遇戰條件，不是職業天賦數值改動。[首領階段參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/pacing/bosses/spillway_wizard.lua#L783-L809)、[另一階段參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/pacing/bosses/spillway_wizard.lua#L1115-L1141)、[場地障礙設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/stage_hazards/wizard_teeth_stage_hazard.lua#L9-L23)。

各技能算例仍使用原有前提；未額外套用浩劫詞條、特定首領或其他任務修正。
