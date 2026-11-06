local NIL_VALUE_OVERRIDE="__NIL_VALUE__"
local base_template_settings={NIL_VALUE_OVERRIDE=NIL_VALUE_OVERRIDE}
base_template_settings.generate_action_overrides = function (base_action_settings, ...)
	local action_settings = table.clone(base_action_settings)
	local num_overrides = select("#", ...)

	for ii = 1, num_overrides, 2 do
		local override_name = select(ii, ...)
		local override = select(ii + 1, ...)

		if override == NIL_VALUE_OVERRIDE then
			action_settings[override_name] = nil
		else
			action_settings[override_name] = type(override) == "table" and table.clone(override) or override
		end
	end

	return action_settings
end
return base_template_settings
