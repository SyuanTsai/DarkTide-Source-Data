local base={stat_buffs={damage=4}}
local templates={}
templates.power=table.merge(table.clone(base),{
 talent_overrides={{stat_buffs={damage=0.1}},{stat_buffs={damage=0.2}},{stat_buffs={damage=0.3}}},
 lerped_stat_buffs={damage={min=0,max=1}},
})
return templates
