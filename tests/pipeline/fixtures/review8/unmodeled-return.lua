local box={math}
local m=unpack(box)
m.abs=function(v) return 99 end
return {format_values={damage={value=math.abs(10)}}}
