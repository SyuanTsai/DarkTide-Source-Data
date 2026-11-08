import { normalizeLua } from './mechanics-code-refs.mjs';
import { numberRule } from './mechanics-special.mjs';

/** Recognizers are scoped to a linked effective template and its class. */
export function buffRules(c,n,name) {
 const {r}=c,get=k=>r.get(n,k),cls=r.scalar(get('class_name'));
 const key=x=>['buff',name,x];
 const update=get('update_func');
 const timerShape='function (template_data, template_context, dt, t) if not template_context.is_server then return end if t > template_data.timer then template_data.timer = template_data.timer + 1 template_data.ability_extension:restore_ability_resource("combat_ability", talent_settings.terminus_warrant.cdr) end end';
 if(update?.type==='function'&&normalizeLua(update.raw)===normalizeLua(timerShape)){
  c.rule(key('one_tick_per_update'),update.file,timerShape,true,update);
  numberRule(c,key('tick_interval'),update.file,'template_data.timer = template_data.timer + NUMBER',update);
  c.rule(key('tick_comparison'),update.file,'if t > template_data.timer then','strict_greater',update);
  c.rule(key('resource_cap'),'scripts/extension_systems/ability/player_unit_ability_extension.lua','local new_resource_amount = math.clamp(remaining_ability_resource + target_resource_amount_to_restore, 0, max_ability_resource)','ability_max_resource');
 }
 const parent='scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua';
 const continuous=get('continuous_fire_step_func');
 if(continuous?.type==='function'&&normalizeLua(continuous.raw).includes('returnmath.max(1,math.floor(max_ammunition_clip*0.1))')){
  numberRule(c,['stat_rule',name,'minimum_shots_per_step'],continuous.file,'return math.max(NUMBER, math.floor(max_ammunition_clip * 0.1))',continuous);
  c.rule(['stat_rule',name,'shots_rounding'],continuous.file,'return math.max(1, math.floor(max_ammunition_clip * 0.1))','floor',continuous);
 }
 if(['weapon_trait_parent_proc_buff','weapon_trait_activated_parent_proc_buff','weapon_trait_target_number_parent_proc_buff'].includes(cls)){
  if(get('child_duration'))c.rule(key('refresh'),parent,'self._remove_child_stack_start_t = t self._remove_child_stack_duration = child_duration','restart_shared_timer');
 }
 if(cls==='weapon_trait_target_number_parent_proc_buff'){
  const file='scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua';
  c.rule(key('timer_starts_at'),file,'local start_t = self._template_data.last_hit_time','last_hit');
 }
 if(cls==='weapon_trait_activated_parent_proc_buff'){
  const fn=r.get(get('active_proc_func'),'on_sweep_finish');
  if(fn?.type==='function'&&/^function\([^)]*\)returnparams\.num_hit_units>0end$/.test(normalizeLua(fn.raw))){
   const file='scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua';
   c.rule(key('clear_on_missed_sweep'),file,'else self:_remove_child_buff_stack(t, self._num_child_stacks - 1) end',true);
   if(get('child_duration'))c.rule(key('refresh_on_successful_sweep'),parent,'self:set_start_time(t)',true);
  }
 }
 // A min/max function is accepted only as an entire literal return, so a
 // changed condition or dynamic cap cannot silently retain the former bound.
 if(cls==='stepped_stat_buff'){
  const fn=get('min_max_step_func'),raw=fn?.type==='function'?normalizeLua(fn.raw):'';
  if(/^function\([^)]*\)return0,\d+(?:\.\d+)?end$/.test(raw))numberRule(c,key('step_cap'),fn.file,fn.raw.replace(/(return\s+0\s*,\s*)\d+(?:\.\d+)?/,'$1NUMBER'),fn);
  const bonus=get('bonus_step_func');
  if(bonus?.type==='function'&&/localsteps=math\.floor\(\(1-current_stamina_fraction\)\/[0-9.]+\)/.test(normalizeLua(bonus.raw))){
   numberRule(c,['stat_rule',name,'stamina_step_fraction'],bonus.file,'local steps = math.floor((1-current_stamina_fraction)/NUMBER)',bonus);
   c.rule(['stat_rule',name,'stamina_rounding'],bonus.file,normalizeLua(bonus.raw).match(/localsteps=math\.floor\(\(1-current_stamina_fraction\)\/[0-9.]+\)/)[0],'floor',bonus);
  }
 }
}
