local talent={format_values={damage={value=10}}}
local function apply(t) t.format_values.damage.value=99 end
(apply)(talent)
return talent
