local damage_templates = {}
local overrides = {}
damage_templates.multi = {
  targets = {
    {power_distribution={attack={10,20},impact=3}},
    {power_distribution={attack={lerp_basic=5,lerp_perfect=8},impact=2}},
    default_target={power_distribution={attack=1,impact=0}},
  },
}
damage_templates.ranged = {
  power_distribution_ranged = {
    attack={near={100,200},far={20,40}},
    impact={near=6,far={1,2}},
  },
}
damage_templates.base = {power_distribution={attack={10,20},impact=3}}
overrides.replaced = {
  parent_template_name="base",
  overrides={
    {"power_distribution","attack",9},
    {"power_distribution",{attack={30,40}}},
    {"power_distribution","attack",7},
  },
}
return {base_templates=damage_templates,overrides=overrides}
