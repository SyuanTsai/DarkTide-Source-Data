local box={m=math}
local c=table.shallow_copy(box)
c.m.abs=function(v) return 99 end
return {format_values={damage={value=math.abs(10)}}}
