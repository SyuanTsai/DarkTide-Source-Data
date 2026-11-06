local DamageProfileTemplates = require("scripts/settings/damage/damage_profile_templates")
local hitscan_templates = {bullet={damage={impact={damage_profile=DamageProfileTemplates.child}}}}
return hitscan_templates