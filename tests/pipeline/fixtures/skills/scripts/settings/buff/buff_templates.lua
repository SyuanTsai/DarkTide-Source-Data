local templates={}
local _create_entry=function(path, optional_default_buff_category)
	local entry_templates = require(path)

	for name, template in upairs(entry_templates) do
		templates[name] = template
		template.name = template.name or name
		template.buff_category = template.buff_category or optional_default_buff_category or buff_categories.generic
	end
end
_create_entry('scripts/settings/buff/archetype_buff_templates/soldier_buff_templates')
return templates
