local function check_proc()
 return true
end
local templates = {}
templates.shared = {
 duration = 5, max_stacks = 2, refresh_duration_on_stack = true,
 stat_buffs={damage=0.25}, check_proc_func=check_proc,
 talent_overrides={{duration=7}}
}
templates.other = {duration=5}
return templates
