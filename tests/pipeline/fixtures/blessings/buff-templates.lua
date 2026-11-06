local Base = require("buff-base")
local templates = {}
templates.child = table.clone(Base.child)
templates.child.duration = 4
table.add_missing(templates.child, { max_stacks = 99, extra = 3 })
table.merge(templates.child, { extra = 7 })
return templates
