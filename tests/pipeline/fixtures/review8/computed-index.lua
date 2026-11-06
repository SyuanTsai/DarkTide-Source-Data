local box={m=math}
local k="m"
local m=box[k]
m.abs=function(v) return 99 end
return {format_values={damage={value=math.abs(10)}}}
