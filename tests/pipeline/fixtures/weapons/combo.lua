local DamageProfileTemplates = require("scripts/settings/damage/damage_profile_templates")
local weapon_template = {}
weapon_template.actions = {
 start = {kind="windup",start_input="start_attack",allowed_chain_actions={light_attack={action_name="light1"},heavy_attack={action_name="heavy1"}}},
 light1 = {kind="sweep",damage_profile=DamageProfileTemplates.light,allowed_chain_actions={start_attack={action_name="start2"}}},
 heavy1 = {kind="sweep",damage_profile=DamageProfileTemplates.heavy,allowed_chain_actions={start_attack={action_name="start"}}},
 start2 = {kind="windup",allowed_chain_actions={light_attack={action_name="light2"},heavy_attack={action_name="heavy1"}}},
 light2 = {kind="sweep",allowed_chain_actions={start_attack={action_name="start"}}},
}
return weapon_template
