local Settings=require('scripts/settings/talent/talent_settings')
local BuffSettings=require('scripts/settings/buff/buff_settings')
local BuffTemplates=require('scripts/settings/buff/buff_templates')
local stat_buffs=BuffSettings.stat_buffs
local talent_settings_2=Settings.soldier_2
return {archetype='soldier',talents={
 basic={display_name='loc_class_veteran_name',description={'loc_class_veteran_description','loc_glossary_talent_aura'},format_values={
  direct={format_type='percentage',prefix='-',value=0.15},
  path={format_type='number',value=talent_settings_2.passive_1.weakspot_damage},
  computed={format_type='number',value=BuffTemplates[Settings.template].stat_buffs[stat_buffs.damage]},
  arithmetic={format_type='number',value=(2+3)*4/2-1},
  transform={format_type='percentage',value=0.85,value_manipulation=function(value) return math.round(math.abs((value-1)*100)) end},
  localize={format_type='loc_string',value='loc_key'},
  literal={value='function'},
  UPPER={format_type='number',value=3},
  ['bad-key']={value=1},format_type='number',
 }},
 tiered={display_name='unknown',description={'loc_class_veteran_description','missing'},format_values={power={format_type='percentage',find_value={find_value_type='buff_template',buff_template_name='power',tier=true,path={'stat_buffs',stat_buffs.damage}}}}},
 dynamic={display_name='loc_glossary_term_unique',format_values={
  damage={format_type='number',find_value={find_value_type='damage',damage_profile_name='profile'}},
  base={format_type='number',find_value={find_value_type='base_damage'}},
  armor={format_type='number',find_value={find_value_type='armor_modifier'}},
  lerp={format_type='number',find_value={find_value_type='buff_template',buff_template_name='power',path={'lerped_stat_buffs','damage'}}},
  reference={value=missing.value},func={value=function() return 1 end},conditional={value=true and 1 or 2},
  unsafe={format_type='number',value=2,value_manipulation=function(value) local x=3 return value*x end},
 }},
 shadow={format_values={v={value=1}}},
 shadow={format_values={v={value=2}}},
 bad={icon='fallback'},
 unused_soldier={},
}}
