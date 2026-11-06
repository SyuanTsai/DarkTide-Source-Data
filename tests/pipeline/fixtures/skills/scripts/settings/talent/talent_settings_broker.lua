local STAT_NAME_ALIAS={power='power_level_modifier'}
local function _generate_stimm_talent(name,display,tier,description) return nil end
_generate_stimm_talent('stimm_a','loc_class_veteran_name',1,nil).stat('power',{format_type='percentage',value=0.04}).keyword('number','+','stun',2,nil)
_generate_stimm_talent('stimm_b','loc_class_veteran_name',2,nil).buff('buff',{},'loc_class_veteran_description','amount',{format_type='number',value=4}).stat('power',{format_type='percentage',value=0.08})
return {}
