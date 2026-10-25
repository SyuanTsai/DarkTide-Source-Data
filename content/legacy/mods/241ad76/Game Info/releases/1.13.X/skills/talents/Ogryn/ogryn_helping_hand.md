# 救援時不可打斷：原始碼依據

[English](en/ogryn_helping_hand.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_helping_hand)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_helping_hand`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- ogryn_passive_revive以interactiontype pull_up/remove_net/rescue/revive判斷，同時提供uninterruptible與push_speed_modifier=-.9。
- Push共用結算把推動速度乘push_speed_modifier；這是角色被推動的速度，不是你推擊敵人的動作速度。舊ogryn_base_passive_revive的25%revive/assist不在目前基礎列表。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L997-L1033)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/push.lua#L61-L78)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L82-L92)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L505-L516)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## 算例與待確認事項

- **擊退算例**：救援期間，受到的推動速度降為原本的 10%。在其他條件相同時，原本推動速度 10 變成 10 × (1 − 90%) = 1；這不會讓你免受傷害。
- 不可打斷關鍵字不等同傷害免疫或免疫所有特殊制伏；未逐一實測敵人制伏。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
