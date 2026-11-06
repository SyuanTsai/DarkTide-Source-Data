local talent={format_values={damage={value=10}}}
local copy=table.clone(talent)
copy.format_values.damage.value=99
return talent
