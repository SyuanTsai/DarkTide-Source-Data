import path from 'node:path';
import { StructureError } from './errors.mjs';
import { parseRequires } from './lua-closure.mjs';
import { parseLuaStatic, getTableArray, getTableEntries, tokenizeLua, findLuaTableAssignment, getLuaListItems } from './lua-static-reader.mjs';
const ROOT = 'scripts/settings/equipment/weapon_templates/';
const REGISTRY = ROOT + 'weapon_templates.lua';
const TRAITS = 'scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua';
const BESPOKE = 'scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_';
const lexical = (a,b) => a < b ? -1 : a > b ? 1 : 0;
function requireStructure(ok, detail) { if (!ok) throw new StructureError('weapons','INVALID_INVENTORY',detail); }
function parse(source, file) {
  try { return parseLuaStatic(source, {filename:file,allowUnsupported:true}); }
  catch (e) { if (e.name !== 'LuaStaticError') throw e; throw new StructureError('weapons','INVALID_TABLE',`${file}: ${e.message}`); }
}
function registry(reader) {
  // Inventory describes the literal lists consumed by the loader, before its
  // call. Do not inspect mutable list values after an unproven loader returns.
  const source=reader.read(REGISTRY),tokens=tokenizeLua(source);
  const loader=tokens.findIndex((t,i)=>t.value==='_require_weapon_templates'&&tokens[i-1]?.value!=='function'&&
    tokens.slice(i,i+8).map(t=>t.value).join(' ')==='_require_weapon_templates ( path_prefix , template_groups , template_names )');
  const p = parse(loader<0?source:source.slice(0,tokens[loader].start),REGISTRY), files = new Set();
  requireStructure(p.locals.template_groups?.type === 'table' && p.locals.template_names?.type === 'table', '找不到武器 registry tables');
  for (const group of getTableArray(p.locals.template_groups)) {
    const nodes = getTableArray(group);
    requireStructure(nodes.length && nodes.every(n => n.type === 'string'), '武器 registry group 不是靜態字串清單');
    const [directory,...names] = nodes.map(n => n.value);
    for (const name of names) files.add(`${ROOT}${directory}/${name}.lua`);
  }
  for (const node of getTableArray(p.locals.template_names)) {
    requireStructure(node.type === 'string', '武器 registry name 不是字串');
    files.add(`${ROOT}${node.value}.lua`);
  }
  requireStructure(files.size, '武器 registry 沒有模板');
  return files;
}
/** Return all player templates, including unregistered files, sorted by name.
 * @returns {{name:string,file:string,registered:boolean}[]}
 */
export function playerWeaponTemplates(reader) {
  const registered = registry(reader), result = [];
  for (const file of reader.list(ROOT).filter(f => f.endsWith('.lua'))) {
    if (file.slice(ROOT.length).split('/').some(p => /^(?:bot(?:_weapons)?|combat_abilities|abilit(?:y|ies)|devices?|grenades?|luggables?|pocketables?|unarmed)$/.test(p))) continue;
    const t = tokenizeLua(reader.read(file)), s = t.map(x => x.type === 'string' ? JSON.stringify(x.value) : x.value).join(' ');
    if (!/\blocal weapon_template\b/.test(s) || !/\breturn weapon_template\b/.test(s) || /\bis_grenade_ability_weapon = true\b/.test(s)) continue;
    result.push({name:path.posix.basename(file,'.lua'),file,registered:registered.has(file)});
  }
  requireStructure(result.length, '解析後沒有玩家武器模板');
  requireStructure(new Set(result.map(t => t.name)).size === result.length, '玩家武器名稱重複');
  return result.sort((a,b) => lexical(a.name,b.name));
}
/** Split the last _m<number> suffix; never infer a missing mark. */
export function weaponPattern(name) {
  const m = /^(.+)_(m\d+)$/.exec(name);
  requireStructure(m, `武器名稱沒有 mark：${name}`);
  return {family:m[1],mark:m[2]};
}
function traitDefinitions(reader, file) {
  const p = parse(reader.read(file), file);
  requireStructure(p.returned?.type === 'table', `${file} 沒有回傳靜態 traits table`);
  const entries = getTableEntries(p.returned);
  requireStructure(entries.every(e => e.key?.type === 'string'), `${file} traits key 結構不符`);
  return entries.map(e => ({traitKey:e.key.value,file,line:e.startLine}));
}
function registryBespokePaths(reader) {
  const t = tokenizeLua(reader.read(TRAITS)), files = [];
  for (let i=0;i<t.length-3;i++) if (t[i].value === '_create_entry' && t[i+1].value === '(' && t[i+2].type === 'string' && t[i+2].value.startsWith(BESPOKE)) files.push(t[i+2].value + '.lua');
  requireStructure(files.length && new Set(files).size === files.length, 'bespoke registry 沒有唯一靜態模組清單');
  return files;
}
/** All trait keys defined by bespoke _create_entry modules, sorted by key/file/line. */
export function bespokeTraitDefinitions(reader) {
  const rows = registryBespokePaths(reader).flatMap(f => traitDefinitions(reader,f));
  requireStructure(rows.length, 'bespoke registry 沒有任何 trait 定義');
  return sortTraits(rows);
}
function sortTraits(rows) { return rows.sort((a,b) => lexical(a.traitKey,b.traitKey) || lexical(a.file,b.file) || a.line-b.line); }
/** Resolve bespoke modules actually assigned/appended to weapon_template.traits.
 * template is a playerWeaponTemplates entry (or its repo-relative file path).
 * @returns {{traitKey:string,file:string,line:number}[]}
 */
export function bespokeTraitsForTemplate(reader, template) {
  const file = typeof template === 'string' ? template : template.file;
  const source = reader.read(file), tokens = tokenizeLua(source), aliases = new Map(Object.entries(parseRequires(source)).filter(([,p]) => p.startsWith(BESPOKE)));
  // Propagate keys/ukeys and simple local aliases to a fixed point.
  let changed;
  do {
    changed = false;
    for (let i=0;i<tokens.length-4;i++) {
      if (tokens[i].value !== 'local' || tokens[i+1].type !== 'identifier' || tokens[i+2].value !== '=') continue;
      const rhs = tokens[i+3].value === 'table' && tokens[i+4]?.value === '.' && ['keys','ukeys'].includes(tokens[i+5]?.value) && tokens[i+6]?.value === '(' ? tokens[i+7]?.value : tokens[i+3].value;
      if (!aliases.has(tokens[i+1].value) && aliases.has(rhs)) { aliases.set(tokens[i+1].value, aliases.get(rhs)); changed=true; }
    }
  } while (changed);
  const modules = new Set(), direct = [];
  for (let i=0;i<tokens.length;i++) {
    // Only append calls whose first argument is weapon_template.traits.
    if (tokens.slice(i,i+8).map(t => t.value).join(' ') !== 'table . append ( weapon_template . traits ,') continue;
    let depth=1;
    for (let j=i+8;j<tokens.length && depth;j++) {
      if (tokens[j].value === '(') depth++;
      else if (tokens[j].value === ')') depth--;
      if (aliases.has(tokens[j].value)) modules.add(aliases.get(tokens[j].value));
      if (depth === 1 && tokens[j].value === '{') {
        // Only a directly appended literal list has statically certain members.
        let k = j + 1;
        const members = [];
        while (tokens[k]?.type === 'string' && [',','}'].includes(tokens[k+1]?.value)) {
          members.push(tokens[k]);
          if (tokens[k+1].value === '}') { k++; break; }
          k += 2;
        }
        if (tokens[k]?.value === '}') for (const member of members) {
          if (member.value.startsWith('weapon_trait_bespoke_')) direct.push({traitKey:member.value,file,line:member.line});
        }
      }
    }
  }
  // Static trait list assignments, including explicit bespoke trait string keys.
  for (let i=0;i<tokens.length-4;i++) {
    if (tokens.slice(i,i+4).map(t => t.value).join(' ') !== 'weapon_template . traits =') continue;
    if (aliases.has(tokens[i+4].value)) modules.add(aliases.get(tokens[i+4].value));
    if (tokens[i+4].value === 'table' && ['keys','ukeys'].includes(tokens[i+6]?.value) && aliases.has(tokens[i+8]?.value)) modules.add(aliases.get(tokens[i+8].value));
    if (tokens[i+4].value === '{') {
      const occurrence = tokens.slice(0,i).filter((t,j,a) => a.slice(j,j+5).map(v => v.value).join(' ') === 'weapon_template . traits = {').length + 1;
      const table = findLuaTableAssignment(source,'weapon_template.traits',{occurrence});
      for (const row of getLuaListItems(table)) {
        const ts = tokenizeLua(row.rawValue);
        if (ts[0]?.type === 'string' && ts[0].value.startsWith('weapon_trait_bespoke_') && ts[1]?.type === 'eof') direct.push({traitKey:ts[0].value,file,line:row.startLine});
      }
    }
  }
  const rows = [...modules].flatMap(f => traitDefinitions(reader,f));
  // Module definitions take precedence over use sites for the same key.
  const seen = new Set(rows.map(r => r.traitKey));
  return sortTraits([...rows,...direct.filter(r => !seen.has(r.traitKey) && seen.add(r.traitKey))]);
}
