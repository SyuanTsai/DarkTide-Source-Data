# 提速：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

movement_speed 的 type 是 additive_multiplier。本項 .17/.18/.19/.20 覆寫並取代 shared ProcBuff 的 .5，不是與 .5 疊加。令 q 為其他 movement_speed 加算值，h 為本祝福值，m 為其他固定倍率：V_before=V×(1+q)×m，V_after=V×(1+q+h)×m；相對變化=(1+q+h)/(1+q)−1。走路將 movement_speed 乘入一次；helper 中該參數只用於 slide threshold。衝刺另乘 sprint_movement_speed，並乘獨立 weapon action 倍率。[walking calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L109-L116) [sprint calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L150-L157) [helper boundary](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/accelerated_local_space_movement.lua#L55-L97)

此加算值不是各攻擊、衝刺或移動動作的固定最終速度增幅。
