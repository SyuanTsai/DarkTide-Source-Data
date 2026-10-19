const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {createHash}=require('node:crypto');
function argument(name) { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : undefined; }
const sourceCodeRoot = argument('--source-code-repo');
if (!sourceCodeRoot) throw new Error('Usage: node scripts/content/imports/w07-static-facts.cjs --source-code-repo <pinned public-code clone> [--source-root <Source checkout>] [--commit <pinned commit>] [--out-root <output directory>]');
const codeRoot = path.resolve(sourceCodeRoot);
const sourceRoot = path.resolve(argument('--source-root') || path.resolve(__dirname, '../../..'));
const outRoot = path.resolve(argument('--out-root') || sourceRoot);
const PINNED_COMMIT='ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const commit=argument('--commit')||PINNED_COMMIT;
if(commit!==PINNED_COMMIT) throw new Error('W07 static facts are pinned to '+PINNED_COMMIT);
const oldSnapshot=JSON.parse(fs.readFileSync(path.join(sourceRoot,'content/imports/w07/source-code-snapshot.json'),'utf8'));
const weaponFacts=JSON.parse(fs.readFileSync(path.join(sourceRoot,'content/imports/w07/weapon-source-facts.json'),'utf8'));
const sha=(alg,data)=>createHash(alg).update(data).digest('hex');
const rawCache=new Map();
function raw(pathname){if(!rawCache.has(pathname))rawCache.set(pathname,execFileSync('git',['-C',codeRoot,'cat-file','blob',`${commit}:${pathname}`]));return rawCache.get(pathname);}
function text(pathname){return raw(pathname).toString('utf8');}
function gitBlob(pathname){return execFileSync('git',['-C',codeRoot,'rev-parse',`${commit}:${pathname}`],{encoding:'utf8'}).trim();}
function lineAt(value,offset){return value.slice(0,offset).split('\n').length;}
function balancedBlock(value,openAt){if(value[openAt]!=='{')throw new Error('Expected { at '+openAt);let depth=0,quote=null,escaped=false,lineComment=false;for(let i=openAt;i<value.length;i++){const c=value[i],n=value[i+1];if(lineComment){if(c==='\n')lineComment=false;continue;}if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;continue;}if(c==='-'&&n==='-'){lineComment=true;i++;continue;}if(c==='"'||c==="'"){quote=c;continue;}if(c==='{')depth++;else if(c==='}'&&--depth===0)return {raw:value.slice(openAt,i+1),offset:openAt,end:i+1};}throw new Error('Unclosed table');}
function tableAtAssignment(source,expression){const re=new RegExp(expression);const m=re.exec(source);if(!m)throw new Error('Missing static table assignment '+expression);const openAt=source.indexOf('{',m.index);if(openAt<0)throw new Error('Assignment has no table '+expression);return {...balancedBlock(source,openAt),line:lineAt(source,openAt),assignmentOffset:m.index};}
function listItems(table){
  const s=table.rawValue,items=[];
  if(s[0]!=='{'||s.at(-1)!=='}')throw new Error('Expected list table');
  let depth=0,quote=null,escaped=false,lineComment=false,start=-1;
  for(let i=0;i<s.length;i++){
    const c=s[i],n=s[i+1];
    if(lineComment){if(c==='\n')lineComment=false;continue;}
    if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;continue;}
    if(c==='-'&&n==='-'){lineComment=true;i++;continue;}
    if(c==='"'||c==="'"){quote=c;continue;}
    if(c==='{'){depth++;if(depth===2)start=i;}
    else if(c==='}'){if(depth===2&&start>=0){items.push({rawValue:s.slice(start,i+1),line:table.line+lineAt(s,start)-1,endLine:table.line+lineAt(s,i)-1});start=-1;}depth--;}
  }
  return items;
}
function topFields(table,withOffsets=false){const s=table.raw,rows=[];let i=1;while(i<s.length-1){while(i<s.length-1&&(/[\s,]/.test(s[i])||s[i]==='\n'))i++;if(s[i]==='-'&&s[i+1]==='-'){const n=s.indexOf('\n',i);i=n<0?s.length:n+1;continue;}const start=i;const keyMatch=/^[A-Za-z_][A-Za-z0-9_]*/.exec(s.slice(i));if(!keyMatch){i++;continue;}const key=keyMatch[0];i+=key.length;while(/\s/.test(s[i]??''))i++;if(s[i]!=='='){i=start+1;continue;}i++;while(/\s/.test(s[i]??''))i++;const valueStart=i;let valueEnd=i;if(s[i]==='{'){const b=balancedBlock(s,i);valueEnd=b.end;i=b.end;}else{let paren=0,bracket=0,quote=null,escaped=false;while(i<s.length-1){const c=s[i];if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;i++;continue;}if(c==='"'||c==="'"){quote=c;i++;continue;}if(c==='(')paren++;else if(c===')')paren--;else if(c==='[')bracket++;else if(c===']')bracket--;if(paren<=0&&bracket<=0&&(c===','||c==='\n'||c==='\r'))break;i++;}valueEnd=i;}const rawValue=s.slice(valueStart,valueEnd).trim();if(!rawValue)throw new Error('Empty field '+key);rows.push({key,line:table.line+lineAt(s,start)-1,rawValue,...(withOffsets&&Number.isInteger(table.offset)?{sourceStart:table.offset+start,sourceEnd:table.offset+valueEnd}:{})});while(i<s.length&&s[i]!==','&&s[i]!=='}')i++;if(s[i]===',')i++;}return rows;}
function parseMapRows(field, namespace){if(!field)return [];const rows=[];const re=new RegExp('\\[hit_zone_names\\.([A-Za-z0-9_]+)\\]\\s*=\\s*'+namespace+'\\.([A-Za-z0-9_]+)','g');let m;while((m=re.exec(field.rawValue)))rows.push({zoneId:m[1],value:m[2],line:field.line+lineAt(field.rawValue,m.index)-1,rawValue:m[0]});return rows;}
function parseMultiplierRows(field, breedSource, pathname){if(!field)return [];const rows=[];const constants=new Map();for(const match of breedSource.matchAll(/^\s*local\s+(hit_zone_damage_multiplier)\s*=\s*(-?\d+(?:\.\d+)?)\s*$/gm)){const key=match[1],items=constants.get(key)||[];items.push({symbol:key,decimal:match[2],rawValue:match[0].trim(),line:lineAt(breedSource,match.index)});constants.set(key,items);}const groupRe=/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\{/g;let group;while((group=groupRe.exec(field.rawValue))){const openAt=group.index+group[0].lastIndexOf('{');const block=balancedBlock(field.rawValue,openAt);const entryRe=/\[hit_zone_names\.([A-Za-z0-9_]+)\]\s*=\s*(-?\d+(?:\.\d+)?|[A-Za-z_][A-Za-z0-9_]*)/g;let entry;while((entry=entryRe.exec(block.raw))){const token=entry[2];let decimal=token,resolvedConstant;if(!/^-?\d+(?:\.\d+)?$/.test(token)){const matches=constants.get(token)||[];if(token!=='hit_zone_damage_multiplier'||matches.length!==1)throw new Error('Unsupported or ambiguous static multiplier constant '+pathname+':'+token);const definition=matches[0];decimal=definition.decimal;resolvedConstant={symbol:token,decimal,rawValue:definition.rawValue,sourceLocator:{path:pathname,line:definition.line,fieldPath:'breed_data.local.'+token}};}rows.push({attackType:group[1],zoneId:entry[1],rawValue:token,decimal,...(resolvedConstant?{resolvedConstant}:{}),line:field.line+lineAt(field.rawValue,openAt+entry.index)-1,sourceRaw:entry[0]});}groupRe.lastIndex=block.end;}return rows;}
function simpleTableFields(table){return topFields(table).map((row)=>({...row,fieldPath:row.key}));}
const registryPath='scripts/settings/breed/breeds.lua';const registryText=text(registryPath);const registryEntryRows=[...registryText.matchAll(/_create_breed_entry\("([^"]+)"\)/g)].map(m=>({modulePath:m[1]+'.lua',line:lineAt(registryText,m.index),rawValue:m[0]}));if(registryEntryRows.length!==59)throw new Error('Raw Git registry count expected 59, found '+registryEntryRows.length);
const registryMap=new Map(registryEntryRows.map(r=>[r.modulePath,r]));
function extractBreed(modulePath) {
  const source = text(modulePath);
  const block = tableAtAssignment(source, 'local\\s+breed_data\\s*=\\s*\\{');
  const fields = topFields(block);
  const fieldMap = new Map(fields.map((row) => [row.key, { ...row, fieldPath: 'breed_data.' + row.key }]));
  const localName = /\blocal\s+(?:breed_name|BREED_NAME)\s*=\s*"([^"]+)"/.exec(source)?.[1];
  const name = fieldMap.get('name')?.rawValue.match(/^"([^"]+)"$/)?.[1] ?? localName;
  if (!name) throw new Error('No static breed identity: ' + modulePath);
  const breedType = fieldMap.get('breed_type')?.rawValue.match(/breed_types\.([A-Za-z0-9_]+)/)?.[1];
  if (!breedType) throw new Error('No static breed_type: ' + modulePath);
  const registry = registryMap.get(modulePath);
  if (!registry) throw new Error('Breed not registered: ' + modulePath);
  const field = (key) => fieldMap.get(key) ?? null;
  const zoneField = field('hit_zones');
  if (breedType === 'minion' && !zoneField) throw new Error('Minion has no static hit_zones table: ' + name);
  const zones = [];
  if (zoneField) {
    for (const item of listItems({ rawValue: zoneField.rawValue, line: zoneField.line })) {
      const itemFields = topFields({ raw: item.rawValue, line: item.line });
      const itemMap = new Map(itemFields.map((row) => [row.key, row]));
      const nameToken = itemMap.get('name')?.rawValue.match(/^hit_zone_names\.([A-Za-z0-9_]+)$/);
      const actors = itemMap.get('actors');
      if (!nameToken || !actors || !actors.rawValue.startsWith('{')) throw new Error('Unsupported hit-zone item ' + name + ' line ' + item.line);
      const actorBlock = balancedBlock(actors.rawValue, 0);
      const actorNames = [...actorBlock.raw.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)].map((match) => match[1]);
      const zoneId = nameToken[1];
      const otherRawFields = itemFields.filter((row) => row.key !== 'name' && row.key !== 'actors').map((row) => ({
        fieldPath: 'hit_zones.' + zoneId + '.' + row.key,
        rawValue: row.rawValue,
        line: row.line
      }));
      zones.push({
        zoneId,
        actors: actorNames,
        actorsRawValue: actors.rawValue,
        source: { line: item.line, endLine: item.endLine, rawValue: item.rawValue },
        nameSourceLine: itemFields.find((row) => row.key === 'name').line,
        actorsSourceLine: actors.line,
        otherRawFields
      });
    }
  }
  const toughness = field('toughness_armor_type');
  const weak = field('hit_zone_weakspot_types');
  const override = field('hitzone_armor_override');
  const mult = field('hitzone_damage_multiplier');
  const weakRows = parseMapRows(weak, 'weakspot_types');
  const overrideRows = parseMapRows(override, 'armor_types');
  const multiplierRows = parseMultiplierRows(mult, source, modulePath);
  const zoneSet = new Set(zones.map((zone) => zone.zoneId));
  const unresolved = [
    ...weakRows.map((row) => ({ field: 'hit_zone_weakspot_types', ...row })),
    ...overrideRows.map((row) => ({ field: 'hitzone_armor_override', ...row })),
    ...multiplierRows.map((row) => ({ field: 'hitzone_damage_multiplier', ...row }))
  ].filter((row) => !zoneSet.has(row.zoneId));
  return {
    breedKey: name, breedType, path: modulePath, registryLine: registry.line, registryRawValue: registry.rawValue,
    breedNameLine: field('name')?.line ?? lineAt(source, (source.match(/\blocal\s+(?:breed_name|BREED_NAME)\s*=\s*"[^"]+"/) || { index: 0 }).index),
    fields: { armorType: field('armor_type'), toughnessArmor: toughness, hitZones: zoneField, weakspotTypes: weak, armorOverrides: override, damageMultipliers: mult },
    zones, weakspotTypes: weakRows, armorOverrides: overrideRows, damageMultipliers: multiplierRows, unmatchedZoneReferences: unresolved
  };
}
const breeds=registryEntryRows.map(r=>extractBreed(r.modulePath));const minions=breeds.filter(b=>b.breedType==='minion');const excluded=breeds.filter(b=>b.breedType!=='minion').map(b=>({breedKey:b.breedKey,breedType:b.breedType,path:b.path,registryLine:b.registryLine,reasonCode:'NON_MINION_REGISTRY_ENTRY'}));if(minions.length!==52||excluded.length!==7)throw new Error(`Expected 52 minions and 7 non-minions; found ${minions.length}/${excluded.length}`);const zoneCount=minions.reduce((n,b)=>n+b.zones.length,0);if(zoneCount!==624)throw new Error('Expected 624 static hit zones, found '+zoneCount);for(const b of minions){const ids=b.zones.map(z=>z.zoneId);if(new Set(ids).size!==ids.length)throw new Error('Duplicate static zone in '+b.breedKey);}
const armorPath='scripts/settings/damage/armor_settings.lua';const armorText=text(armorPath);const enumMatch=/types\s*=\s*table\.enum\(([\s\S]*?)\)/.exec(armorText);const enumBody=enumMatch?.[1];if(!enumBody)throw new Error('Could not read armor enum');const enumBodyOffset=enumMatch.index+enumMatch[0].indexOf(enumBody);const armorEnumEntries=[...enumBody.matchAll(/"([^"]+)"/g)].map((m)=>({classKey:m[1],enumRawValue:m[0],sourceLocator:{path:armorPath,line:lineAt(armorText,enumBodyOffset+m.index),fieldPath:'armor_settings.types.'+m[1]}}));const allArmorKeys=armorEnumEntries.map(row=>row.classKey);const usedArmorKeys=[...new Set(minions.flatMap(b=>[b.fields.armorType?.rawValue,b.fields.toughnessArmor?.rawValue,...b.armorOverrides.map(r=>`armor_types.${r.value}`)].filter(Boolean).map(v=>v.match(/armor_types\.([A-Za-z0-9_]+)/)?.[1]).filter(Boolean)))].sort((a,b)=>a.localeCompare(b,'en'));if(usedArmorKeys.length!==7||!usedArmorKeys.includes('void_shield')||usedArmorKeys.includes('player'))throw new Error('Armor closure mismatch: '+usedArmorKeys.join(','));
const oldPaths=new Set(oldSnapshot.files.map(f=>f.path));const paths=new Set(registryEntryRows.map(r=>r.modulePath));paths.add(registryPath);for(const p of [
'scripts/settings/damage/armor_settings.lua','scripts/settings/havoc/havoc_mutator_local_settings.lua','scripts/utilities/attack/armor.lua','scripts/utilities/attack/weakspot.lua','scripts/settings/damage/weakspot_settings.lua','scripts/utilities/attack/damage_profile.lua','scripts/foundation/utilities/math.lua',
'scripts/settings/equipment/weapon_templates/base_template_settings.lua','scripts/settings/equipment/weapon_templates/default_melee_action_input_setup.lua','scripts/settings/equipment/weapon_templates/melee_action_input_setup_mid.lua','scripts/utilities/action/action_input_hierarchy.lua','scripts/settings/equipment/haptic_trigger_templates.lua','scripts/settings/player_character/player_character_constants.lua','scripts/settings/projectile/projectile_templates.lua','scripts/settings/ability/special_rules_settings.lua','scripts/settings/projectile/player_projectile_templates.lua','scripts/settings/projectile/minion_projectile_templates.lua',
'scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua','scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua','scripts/extension_systems/weapon/actions/action_push.lua','scripts/utilities/attack/block.lua','scripts/utilities/attack/stamina.lua','scripts/utilities/alternate_fire.lua','scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua','scripts/ui/view_elements/view_element_player_stats/view_element_player_stats.lua','scripts/settings/equipment/weapon_tweak_stats_ui_data.lua','scripts/settings/damage/power_level_settings.lua','scripts/utilities/attack/stagger.lua','scripts/backend/master_data.lua','scripts/backend/gear.lua','scripts/backend/crafting.lua','scripts/backend/master_items.lua','scripts/settings/equipment/local_items_loader.lua','scripts/settings/item/crafting_settings.lua','scripts/settings/item/rank_settings.lua','scripts/settings/item/rarity_settings.lua','scripts/utilities/weapon_stats.lua','scripts/backend/store.lua','scripts/managers/data_service/services/crafting_service.lua','scripts/managers/data_service/services/store_service.lua','scripts/utilities/offer.lua','scripts/utilities/items.lua','scripts/ui/view_content_blueprints/item_stats_blueprints.lua'
])paths.add(p);for(const p of ['scripts/extension_systems/weapon/weapon.lua','scripts/extension_systems/weapon/player_unit_weapon_extension.lua','scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua'])paths.add(p);const allSourcePaths=[...paths];const fileRows=allSourcePaths.map(pathname=>{const b=raw(pathname);return {path:pathname,gitBlobSha1:gitBlob(pathname),byteCount:b.length,artifactSha256:sha('sha256',b)}}).sort((a,b)=>a.path.localeCompare(b.path,'en'));const supplementRows=fileRows.filter(f=>!oldPaths.has(f.path));const manifestRows=supplementRows.map(({path,gitBlobSha1,byteCount,artifactSha256})=>({path,gitBlobSha1,byteCount,artifactSha256}));const manifestSha256=sha('sha256',Buffer.from(JSON.stringify(manifestRows),'utf8'));const contentSha256=sha('sha256',Buffer.from(manifestRows.map(f=>`${f.path}\0${f.artifactSha256}\n`).join(''),'utf8'));const snapshot={schemaVersion:'w07-static-source-snapshot/1.0.0',snapshotId:'chainaxe-w07-static-1.13.2-ba6c148',currentCommit:commit,manifestSha256,contentSha256,files:supplementRows};
function entryTable(source,pattern){const t=tableAtAssignment(source,pattern);return {line:t.line,rawValue:t.raw,entries:topFields(t)};}
function rawHierarchyTable(source,pattern){const t=tableAtAssignment(source,pattern);const items=listItems({rawValue:t.raw,line:t.line});if(!items.length)throw new Error('Expected non-empty ordered action-input hierarchy '+pattern);return {line:t.line,rawValue:t.raw,representation:'ordered-list-raw',entries:[]};}
function rawLineRange(source, pathname, startLine, endLine, fieldPath) {
  const lines=source.split('\n');
  if(startLine<1||endLine>lines.length) throw new Error(`Invalid pinned source range ${pathname}:${startLine}-${endLine}`);
  return {sourceLocator:{path:pathname,line:startLine,fieldPath},endLine,rawValue:lines.slice(startLine-1,endLine).join('\n')};
}
function balancedCall(source, openAt) {
  let depth=0,quote=null,escaped=false,lineComment=false;
  for(let i=openAt;i<source.length;i++) {
    const c=source[i],n=source[i+1];
    if(lineComment){if(c==='\n')lineComment=false;continue;}
    if(quote){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c===quote)quote=null;continue;}
    if(c==='-'&&n==='-'){lineComment=true;i++;continue;}
    if(c==='"'||c==="'"){quote=c;continue;}
    if(c==='(')depth++;
    else if(c===')'&&--depth===0)return i;
  }
  throw new Error('Unclosed generator call at '+openAt);
}
function actionGeneratorDefinitions(basePath) {
  const source = text(basePath);
  const specs = [
    { generatorKey: 'generate_unwield_action', definitionIndex: 1, startLine: 110, endLine: 133, effectiveDefinitionIndex: 1 },
    { generatorKey: 'generate_wield_chain_actions', definitionIndex: 1, startLine: 341, endLine: 376, effectiveDefinitionIndex: 1 },
    { generatorKey: 'generate_inspect_action', definitionIndex: 1, startLine: 378, endLine: 399, effectiveDefinitionIndex: 2 },
    { generatorKey: 'generate_inspect_action', definitionIndex: 2, startLine: 401, endLine: 422, effectiveDefinitionIndex: 2 },
    { generatorKey: 'generate_inspect_3p_action', definitionIndex: 1, startLine: 424, endLine: 459, effectiveDefinitionIndex: 1 }
  ];
  const byKey = new Map();
  for (const spec of specs) {
    const row = rawLineRange(source, basePath, spec.startLine, spec.endLine, 'base_template_settings.' + spec.generatorKey);
    if (!row.rawValue.includes('base_template_settings.' + spec.generatorKey + ' = function')) throw new Error('Pinned generator definition moved: ' + spec.generatorKey + ' at ' + spec.startLine);
    const actionNames = [...row.rawValue.matchAll(/action_name\s*=\s*"([A-Za-z0-9_]+)"/g)].map((match) => ({
      actionKey: match[1],
      sourceLocator: { path: basePath, line: spec.startLine + lineAt(row.rawValue, match.index) - 1, fieldPath: 'base_template_settings.' + spec.generatorKey + '.action_name' },
      rawValue: match[0]
    }));
    const startInput = row.rawValue.match(/start_input\s*=\s*"([A-Za-z0-9_]+)"/)?.[1] ?? null;
    const stopInput = row.rawValue.match(/stop_input\s*=\s*"([A-Za-z0-9_]+)"/)?.[1] ?? null;
    const kind = row.rawValue.match(/kind\s*=\s*"([A-Za-z0-9_]+)"/)?.[1] ?? null;
    const returnKind = spec.generatorKey === 'generate_wield_chain_actions' ? 'continuation-list' : 'action-settings';
    const generatedContinuations = [];
    const actionList = /local\s+actions\s*=\s*\{/.exec(row.rawValue);
    if (actionList) {
      const openAt = row.rawValue.indexOf('{', actionList.index);
      const actionBlock = balancedBlock(row.rawValue, openAt);
      for (const item of listItems({ rawValue: actionBlock.raw, line: spec.startLine + lineAt(row.rawValue, openAt) - 1 })) {
        const target = /action_name\s*=\s*"([A-Za-z0-9_]+)"/.exec(item.rawValue);
        if (!target) throw new Error('Generated continuation is missing a literal target: ' + spec.generatorKey);
        const chainTime = /chain_time\s*=\s*([^,\n}]+)/.exec(item.rawValue)?.[1]?.trim();
        if (!chainTime) throw new Error('Generated continuation is missing a chain-time source expression: ' + target[1]);
        generatedContinuations.push({
          actionKey: target[1],
          chainTimeRawValue: chainTime,
          sourceLocator: { path: basePath, line: item.line + lineAt(item.rawValue, target.index) - 1, fieldPath: 'base_template_settings.' + spec.generatorKey + '.actions.action_name' }
        });
      }
    }
    const generatedActionFacts = [];
    const allowedChain = /allowed_chain_actions\s*=\s*\{/.exec(row.rawValue);
    const continuationEdges = [];
    if (allowedChain) {
      const openAt = row.rawValue.indexOf('{', allowedChain.index);
      const allowedBlock = balancedBlock(row.rawValue, openAt);
      const allowedLine = spec.startLine + lineAt(row.rawValue, openAt) - 1;
      for (const edge of topFields({ raw: allowedBlock.raw, line: allowedLine })) {
        const target = /action_name\s*=\s*"([A-Za-z0-9_]+)"/.exec(edge.rawValue);
        if (!target) throw new Error('Generated action continuation lacks a literal target: ' + spec.generatorKey + ':' + edge.key);
        const chainTime = /chain_time\s*=\s*([^,\n}]+)/.exec(edge.rawValue)?.[1]?.trim();
        if (!chainTime) throw new Error('Generated action continuation lacks a chain-time source value: ' + spec.generatorKey + ':' + edge.key);
        continuationEdges.push({
          inputKey: edge.key,
          actionKey: target[1],
          chainTimeRawValue: chainTime,
          sourceLocator: { path: basePath, line: edge.line + lineAt(edge.rawValue, target.index) - 1, fieldPath: 'base_template_settings.' + spec.generatorKey + '.allowed_chain_actions.' + edge.key + '.action_name' }
        });
      }
    }
    if (returnKind === 'action-settings') generatedActionFacts.push({ startInput, stopInput, kind, continuationEdges });
    const entry = {
      definitionIndex: spec.definitionIndex, sourceLocator: row.sourceLocator, rawValue: row.rawValue,
      returnKind, staticActionTargets: actionNames, generatedContinuations, generatedActionFacts,
      ...(startInput ? { startInput } : {}), ...(stopInput ? { stopInput } : {}), ...(kind ? { kind } : {})
    };
    const group = byKey.get(spec.generatorKey) ?? { generatorKey: spec.generatorKey, effectiveDefinitionIndex: spec.effectiveDefinitionIndex, definitions: [] };
    if (group.effectiveDefinitionIndex !== spec.effectiveDefinitionIndex) throw new Error('Inconsistent effective generator definition ' + spec.generatorKey);
    group.definitions.push(entry);
    byKey.set(spec.generatorKey, group);
  }
  const out = [...byKey.values()].sort((a, b) => a.generatorKey.localeCompare(b.generatorKey, 'en'));
  const inspect = out.find((item) => item.generatorKey === 'generate_inspect_action');
  if (inspect?.definitions.length !== 2 || inspect.effectiveDefinitionIndex !== 2) throw new Error('Both ordered inspect definitions must be retained and the second is effective.');
  return out;
}
function actionGeneratorBindings(source, pathname) {
  const keys=['generate_unwield_action','generate_wield_chain_actions','generate_inspect_action','generate_inspect_3p_action'];
  const rows=[];
  for(const generatorKey of keys) {
    const re=new RegExp(`(?:BaseTemplateSettings|base_template_settings)\\.${generatorKey}\\s*\\(`,'g');let match;
    while((match=re.exec(source))) {
      const openAt=match.index+match[0].lastIndexOf('(');const closeAt=balancedCall(source,openAt);const call=source.slice(match.index,closeAt+1);
      const args=source.slice(openAt+1,closeAt).trim();let additionalSettingsRawValue;
      if(args.startsWith('{')){const block=balancedBlock(args,0);if(args.slice(block.end+1).trim())throw new Error('Unsupported generator call arguments '+call);additionalSettingsRawValue=block.raw;}
      else if(args)throw new Error('Unsupported non-table generator call arguments '+call);
      const line=lineAt(source,match.index);const lineStart=source.lastIndexOf('\n',match.index)+1;const left=source.slice(lineStart,match.index);const assignedActionKey=left.match(/([A-Za-z_][A-Za-z0-9_]*)\s*=\s*$/)?.[1]??null;
      const actionTable=tableAtAssignment(source,pathname.includes('/chain_axes/')?'weapon_template\\.actions\\s*=\\s*\\{':'base_template_settings\\.actions\\s*=\\s*\\{');const actionRows=topFields(actionTable,true).filter(row=>/^action_[A-Za-z0-9_]+$/.test(row.key));const ownerRow=actionRows.find(row=>match.index>=row.sourceStart&&match.index<row.sourceEnd);const ownerAction=ownerRow?.key;if(!ownerAction)throw new Error('Generator callsite is not contained by exactly one source-declared action row at '+pathname+':'+line);const ownerFieldPath=(pathname.includes('/chain_axes/')?'weapon_template.actions.':'base_template_settings.actions.')+ownerAction;const ownerActionRange={path:pathname,line:ownerRow.line,endLine:ownerRow.line+(ownerRow.rawValue.match(/\n/g)||[]).length,fieldPath:ownerFieldPath};const fieldPath=pathname.includes('/chain_axes/')?(assignedActionKey==='wield'?'weapon_template.actions.'+ownerAction+'.allowed_chain_actions.wield':'weapon_template.actions.'+assignedActionKey):'base_template_settings.actions.'+ownerAction;
      const returnKind=generatorKey==='generate_wield_chain_actions'?'continuation-list':'action-settings';rows.push({generatorKey,ownerAction,ownerActionRange,assignedActionKey,returnKind,callsite:{sourceLocator:{path:pathname,line,fieldPath},rawValue:call},...(additionalSettingsRawValue?{additionalSettingsRawValue}:{})});
      re.lastIndex=closeAt+1;
    }
  }
  return rows.sort((a,b)=>a.callsite.sourceLocator.line-b.callsite.sourceLocator.line);
}function actionInputFacts(){
  const basePath='scripts/settings/equipment/weapon_templates/base_template_settings.lua';
  const defaultPath='scripts/settings/equipment/weapon_templates/default_melee_action_input_setup.lua';
  const midPath='scripts/settings/equipment/weapon_templates/melee_action_input_setup_mid.lua';
  const base=text(basePath),def=text(defaultPath),mid=text(midPath);
  const actionGenerators=actionGeneratorDefinitions(basePath);
  const baseGeneratorBindings=actionGeneratorBindings(base,basePath);
  const baseInputs=entryTable(base,'base_template_settings\\.action_inputs\\s*=\\s*\\{');
  const defaultInputs=entryTable(def,'default_melee_action_input_setup\\.action_inputs\\s*=\\s*\\{');
  const baseHierarchy=rawHierarchyTable(base,'base_template_settings\\.action_input_hierarchy\\s*=\\s*\\{');
  const defaultHierarchy=rawHierarchyTable(def,'default_melee_action_input_setup\\.action_input_hierarchy\\s*=\\s*\\{');
  const baseActions=entryTable(base,'base_template_settings\\.actions\\s*=\\s*\\{');baseActions.entries=baseActions.entries.map(row=>({...row,endLine:row.line+(row.rawValue.match(/\n/g)||[]).length}));
  if(baseInputs.entries.length!==7||defaultInputs.entries.length!==14||baseActions.entries.length!==3)
    throw new Error('Unexpected base/default input/action counts '+baseInputs.entries.length+'/'+defaultInputs.entries.length+'/'+baseActions.entries.length);
  const requireClosure=[
    {path:basePath,requires:['scripts/settings/equipment/haptic_trigger_templates.lua','scripts/settings/player_character/player_character_constants.lua','scripts/settings/projectile/projectile_templates.lua','scripts/settings/ability/special_rules_settings.lua']},
    {path:defaultPath,requires:['scripts/utilities/action/action_input_hierarchy.lua',basePath]},
    {path:midPath,requires:[defaultPath]}
  ];
  const marks=[];
  for(const [key,mark] of [['m1','chainaxe_p1_m1'],['m2','chainaxe_p1_m2']]){
    const templatePath='scripts/settings/equipment/weapon_templates/chain_axes/'+mark+'.lua';
    const source=text(templatePath);
    const actions=entryTable(source,'weapon_template\\.actions\\s*=\\s*\\{');
    const inputAssignments=[];
    const assignmentRe=/^[ \t]*weapon_template\.(action_inputs(?:\.start_attack\.buffer_time)?|action_input_hierarchy)\s*=.*$/gm;
    let m;
    while((m=assignmentRe.exec(source))) inputAssignments.push({line:lineAt(source,m.index),rawValue:m[0].trim(),fieldPath:'weapon_template.'+m[1]});
    const bindings=weaponFacts.actionBindings[key];
    if(!bindings||actions.entries.length!==(key==='m1'?20:13)) throw new Error('Action table mismatch '+mark);
    const profileActions=new Set(bindings.profileBindings.map(r=>r.fieldPath.match(/^weapon_template\.actions\.(action_[A-Za-z0-9_]+)/)?.[1]).filter(Boolean));
    const missing=[...profileActions].filter(a=>!actions.entries.some(e=>e.key===a));
    if(missing.length) throw new Error('Profile bindings reference missing local action '+missing.join(','));
    const generatorBindings=actionGeneratorBindings(source,templatePath);
    if(key==='m1')for(const [line,owner] of [[261,'action_melee_start_left_special'],[867,'action_right_heavy'],[1346,'action_right_heavy_2']]){const binding=generatorBindings.find(row=>row.callsite.sourceLocator.line===line);if(binding?.ownerAction!==owner)throw new Error('Generator callsite owner mismatch at '+mark+':'+line+' expected '+owner+' found '+binding?.ownerAction);}
    const expected=key==='m1'
      ? {generate_wield_chain_actions:17,generate_inspect_action:1,generate_inspect_3p_action:1}
      : {generate_wield_chain_actions:10,generate_inspect_action:1,generate_inspect_3p_action:1};
    for(const [name,count] of Object.entries(expected)){
      const actual=generatorBindings.filter(row=>row.generatorKey===name).length;
      if(actual!==count) throw new Error('Generator binding count mismatch for '+mark+' '+name+': '+actual+' != '+count);
    }
    if(generatorBindings.some(row=>row.generatorKey==='generate_unwield_action')) throw new Error('Weapon templates must not redefine the base unwield generator binding.');
    marks.push({
      markId:mark,path:templatePath,
      localActions:actions.entries.map(e=>({
        key:e.key,line:e.line,endLine:e.line+(e.rawValue.match(/\n/g)||[]).length,rawValue:e.rawValue,
        startInput:e.rawValue.match(/\bstart_input\s*=\s*"([^"]+)"/)?.[1]??null,
        declaredActionTargets:[...e.rawValue.matchAll(/action_name\s*=\s*"([^"]+)"/g)].map(m=>m[1]),
        damageProfileSymbols:[...e.rawValue.matchAll(/damage_profile(?:_on_abort|_special_active)?\s*=\s*DamageProfileTemplates\.([A-Za-z0-9_]+)/g)].map(m=>m[1])
      })),
      inputAssignments,profileBindings:bindings.profileBindings,actionEdges:bindings.actionEdges,
      localActionCount:actions.entries.length,profileBindingCount:bindings.profileBindings.length,
      continuationEdgeCount:bindings.actionEdges.length,generatorBindings
    });
  }
  const generatorExpectations={
    generate_unwield_action:{targets:0,start:'wield',stop:null},
    generate_wield_chain_actions:{targets:3,start:null,stop:null},
    generate_inspect_action:{targets:1,start:'inspect_start',stop:'inspect_stop'},
    generate_inspect_3p_action:{targets:1,start:null,stop:'inspect_stop'}
  };
  for(const [name,expected] of Object.entries(generatorExpectations)){
    const group=actionGenerators.find(item=>item.generatorKey===name);
    if(!group) throw new Error('Missing static generator definition '+name);
    const definitions=group.definitions.filter(item=>item.definitionIndex===group.effectiveDefinitionIndex);
    if(definitions.length!==1) throw new Error('Expected one effective definition for '+name);
    const definition=definitions[0];
    if(definition.staticActionTargets.length!==expected.targets
      ||(definition.startInput??null)!==expected.start||(definition.stopInput??null)!==expected.stop)
      throw new Error('Static generated action/input facts mismatch for '+name);
  }
  const inspect=actionGenerators.find(item=>item.generatorKey==='generate_inspect_action');
  if(inspect.definitions.length!==2||inspect.effectiveDefinitionIndex!==2)
    throw new Error('Both ordered inspect definitions must be preserved and the second marked effective.');
  if(baseGeneratorBindings.length!==1||baseGeneratorBindings[0].generatorKey!=='generate_unwield_action'
    ||baseGeneratorBindings[0].assignedActionKey!=='action_unwield')
    throw new Error('Base generated unwield action must retain its exact generator callsite.');
  return {
    baseTemplateSettings:{
      path:basePath,actionInputs:baseInputs,actions:baseActions,actionInputHierarchy:baseHierarchy,
      generatedUnwieldFunction:actionGenerators.find(item=>item.generatorKey==='generate_unwield_action').definitions[0]
    },
    defaultActionInputSetup:{path:defaultPath,actionInputs:defaultInputs,actionInputHierarchy:defaultHierarchy,rawMidSetup:{path:midPath,line:1,rawValue:mid}},
    requireClosure,actionGenerators,baseGeneratorBindings,marks
  };
}
const inputFacts=actionInputFacts();
const relationRanges=[
['scripts/foundation/utilities/math.lua',72,78,'math.lerp and math.lerp_clamped'],['scripts/utilities/attack/damage_profile.lua',83,96,'cleave distribution multiplied by scaled cleave power'],['scripts/utilities/attack/damage_profile.lua',379,385,'DamageProfile.lerp_damage_profile_entry'],['scripts/utilities/attack/damage_calculation.lua',208,217,'five-point damage boost curve indexing and interpolation'],['scripts/utilities/attack/damage_calculation.lua',700,704,'finesse boost amount cap and positive amount gate'],['scripts/utilities/attack/stagger.lua',364,408,'stagger duration modifier is added to duration'],['scripts/utilities/attack/armor.lua',25,74,'Armor.armor_type'],['scripts/settings/havoc/havoc_mutator_local_settings.lua',514,525,'Havoc rotten armor zone overrides'],['scripts/utilities/attack/weakspot.lua',9,44,'Weakspot.weakspot_type'],['scripts/settings/damage/weakspot_settings.lua',4,27,'WeakspotSettings types and modifiers'],['scripts/utilities/attack/damage_calculation.lua',672,785,'finesse and critical boost relation, all static gates and fallbacks'],['scripts/utilities/attack/damage_calculation.lua',795,834,'hit-zone damage multiplier relation'],['scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua',49,59,'dodge diminishing-return ratio and count parameters'],['scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua',117,127,'dodge speed and distance-scale application'],['scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua',261,267,'consecutive dodge reset time accumulation'],['scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua',324,350,'sprint speed addend and stat input use'],['scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua',412,448,'normalized sprint speed acceleration and dt update'],['scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',553,596,'weapon stat endpoint interpolation using trait parameter'],['scripts/settings/equipment/weapon_tweak_stats_ui_data.lua',5,35,'weapon damage stat percentage display metadata'],['scripts/utilities/attack/stamina.lua',71,85,'stamina additive and cost unit consumers'],['scripts/utilities/attack/block.lua',130,210,'block stamina drain consumer'],['scripts/utilities/attack/block.lua',292,312,'block cost table and inner/outer selection'],['scripts/extension_systems/weapon/actions/action_push.lua',56,97,'push stamina drain consumer'],['scripts/ui/view_elements/view_element_player_stats/view_element_player_stats.lua',510,511,'stamina points display consumer'],['scripts/ui/view_elements/view_element_player_stats/view_element_player_stats.lua',542,571,'sprint cost and dodge distance display consumers'],['scripts/utilities/weapon_stats.lua',424,426,'weapon stat table display inputs'],['scripts/utilities/weapon_stats.lua',641,646,'weapon stat display value assignment'],['scripts/utilities/weapon_stats.lua',687,709,'maximum trait values are not attainable range evidence'],['scripts/utilities/weapon_stats.lua',815,850,'normalized item-stat comparison fraction and metadata range'],['scripts/utilities/alternate_fire.lua',177,185,'movement curve modifier application'],['scripts/settings/damage/power_level_settings.lua',123,137,'default damage boost curve table'],['scripts/settings/damage/power_level_settings.lua',142,151,'default finesse boost amount'],['scripts/settings/damage/power_level_settings.lua',172,194,'no-base finesse and default critical boost settings'],['scripts/backend/master_data.lua',183,194,'master-data request boundary'],['scripts/backend/master_items.lua',91,120,'master item override validation'],['scripts/backend/master_items.lua',122,149,'cached master items and gear overrides merge'],['scripts/backend/master_items.lua',419,467,'backend master-data items cache'],['scripts/managers/data_service/services/crafting_service.lua',262,281,'server-provided item crafting metadata'],['scripts/managers/data_service/services/store_service.lua',103,120,'server-backed store interface request'],['scripts/backend/gear.lua',36,57,'gear backend data path'],['scripts/backend/gear.lua',92,112,'gear response handling'],['scripts/backend/crafting.lua',10,29,'crafting backend data path'],['scripts/backend/crafting.lua',37,58,'crafting response handling'],['scripts/settings/equipment/local_items_loader.lua',34,60,'local RMD item loading'],['scripts/settings/item/crafting_settings.lua',129,169,'crafting configuration'],['scripts/settings/item/rank_settings.lua',1,87,'item rank configuration'],['scripts/settings/item/rarity_settings.lua',1,85,'item rarity configuration'],['scripts/utilities/weapon_stats.lua',687,709,'placeholder maximum traits are not obtainable range'],['scripts/backend/store.lua',185,208,'storefront server response'],['scripts/utilities/offer.lua',38,83,'offer item extraction'],['scripts/utilities/items.lua',14,15,'item preview expertise multiplier and default cap'],['scripts/utilities/items.lua',37,43,'expertise preview accessors'],['scripts/utilities/items.lua',722,724,'maximum expertise level'],['scripts/utilities/items.lua',1815,1966,'item preview stat budget, cap, rounding and output clamp'],['scripts/ui/view_content_blueprints/item_stats_blueprints.lua',2030,2080,'item stat preview panel default invocation and display cap']];
relationRanges.push(['scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',85,142,'base weapon stat value mapping'],['scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',318,345,'selected weapon tweak accumulator clamp'],['scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',434,454,'trait parameter mapping into selected weapon tweaks'],['scripts/extension_systems/weapon/weapon.lua',68,82,'weapon damage profile lerp value transfer'],['scripts/extension_systems/weapon/player_unit_weapon_extension.lua',442,460,'action and profile lerp value lookup fallback'],['scripts/utilities/attack/damage_profile.lua',316,359,'damage profile empty/default lerp fallback path'],['scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua',7,11,'default trait and fallback lerp coordinates']);
function snippet(pathname,start,end,summary){const lines=text(pathname).split('\n');if(start<1||end>lines.length)throw new Error(`Invalid line snippet ${pathname}:${start}-${end}`);return {path:pathname,line:start,endLine:end,fieldPath:`source.${summary.replace(/[^a-z0-9]+/gi,'_').toLowerCase()}`,summary,rawValue:lines.slice(start-1,end).join('\n')};}
const relationshipEvidence=relationRanges.map(([p,s,e,label])=>snippet(p,s,e,label));

const importerPath='scripts/content/imports/w07-static-facts.cjs';const importerRaw=fs.readFileSync(__filename,'utf8');const normalizedSourceSha=(value)=>sha('sha256',Buffer.from(String(value).replace(/\r\n/g,'\n'),'utf8'));const importerSha256=normalizedSourceSha(importerRaw);const lfEquivalent=importerRaw.replace(/\r\n/g,'\n');if(normalizedSourceSha(lfEquivalent.replace(/\n/g,'\r\n'))!==importerSha256)throw new Error('Importer SHA-256 must be stable across LF and CRLF checkout bytes.');function evidenceFor(pathname,startLine){const item=relationshipEvidence.find((row)=>row.path===pathname&&row.line===startLine);if(!item)throw new Error('Missing expected relationship evidence '+pathname+':'+startLine);return structuredClone(item);}
function sourceBranchRows(pathname,start,end,pattern,prefix){const lines=text(pathname).split('\n');return lines.slice(start-1,end).map((rawValue,index)=>({line:start+index,fieldPath:prefix+'.sourceLine.'+(start+index),rawValue})).filter((row)=>pattern.test(row.rawValue));}
const havocPath='scripts/settings/havoc/havoc_mutator_local_settings.lua';
const havocTable=tableAtAssignment(text(havocPath),'breed_armor_type_overrides\\s*=\\s*\\{');
const havocArmorOverrides=topFields(havocTable).map((row)=>{const armorClassKey=row.rawValue.match(/^"([^"]+)"$/)?.[1];if(!armorClassKey)throw new Error('Unexpected Havoc armor override '+row.rawValue);return {zoneId:row.key,armorClassKey,rawValue:row.rawValue,path:havocPath,line:row.line,fieldPath:'mutator_havoc_rotten_armor.breed_armor_type_overrides.'+row.key};});
if(havocArmorOverrides.length!==10||havocArmorOverrides.some((row)=>row.armorClassKey!=='disgustingly_resilient'))throw new Error('Havoc rotten armor map must contain its ten fixed zone entries.');
const staticCombatRelations={
  armor:{source:evidenceFor('scripts/utilities/attack/armor.lua',25),conditionRows:sourceBranchRows('scripts/utilities/attack/armor.lua',25,74,/^\s*(?:if\b|elseif\b|else\b|return\b|local armor_type\b|armor_type\s*=)/,'Armor._character_armor_type'),havocSource:evidenceFor(havocPath,514),havocArmorOverrides},
  weakspot:{source:evidenceFor('scripts/utilities/attack/weakspot.lua',9),conditionRows:sourceBranchRows('scripts/utilities/attack/weakspot.lua',9,44,/^\s*(?:if\b|elseif\b|else\b|return\b|local hit_weakspot\b|local hit_shield\b|local modifier\b)/,'Weakspot.static_relation'),settings:evidenceFor('scripts/settings/damage/weakspot_settings.lua',4)},
  finesseCrit:{source:evidenceFor('scripts/utilities/attack/damage_calculation.lua',672),conditionRows:sourceBranchRows('scripts/utilities/attack/damage_calculation.lua',672,785,/^\s*(?:if\b|elseif\b|else\b|local\s+[A-Za-z_][A-Za-z0-9_]*\s*=)/,'damage_calculation._finesse_boost_damage'),execution:'not-evaluated'},
  curves:{damageProfile:evidenceFor('scripts/utilities/attack/damage_profile.lua',379),mathLerp:evidenceFor('scripts/foundation/utilities/math.lua',72),weaponStatInterpolation:evidenceFor('scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',553),boostCurveTable:evidenceFor('scripts/settings/damage/power_level_settings.lua',123),boostCurveInterpolation:evidenceFor('scripts/utilities/attack/damage_calculation.lua',208),boostCurveCaller:evidenceFor('scripts/utilities/attack/damage_calculation.lua',700),cleaveDistribution:evidenceFor('scripts/utilities/attack/damage_profile.lua',83)},stagger:{source:evidenceFor('scripts/utilities/attack/stagger.lua',364)}
};const statGroupEvidence={
  dps:[evidenceFor('scripts/utilities/attack/damage_profile.lua',379),evidenceFor('scripts/utilities/attack/damage_calculation.lua',795),evidenceFor('scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',553)],
  armorPierce:[evidenceFor('scripts/utilities/attack/damage_profile.lua',379),evidenceFor('scripts/utilities/attack/damage_calculation.lua',795),evidenceFor('scripts/utilities/attack/armor.lua',25)],
  defence:[evidenceFor('scripts/utilities/attack/stamina.lua',71),evidenceFor('scripts/utilities/attack/block.lua',130),evidenceFor('scripts/utilities/attack/block.lua',292),evidenceFor('scripts/extension_systems/weapon/actions/action_push.lua',56)],
  sawing:[evidenceFor('scripts/utilities/attack/damage_profile.lua',379),evidenceFor('scripts/utilities/attack/damage_calculation.lua',795)],
  mobility:[evidenceFor('scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua',49),evidenceFor('scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua',324),evidenceFor('scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua',412),evidenceFor('scripts/utilities/alternate_fire.lua',177)]
};
const panelPreviewRules={schemaVersion:'w07-panel-preview-rules/1.0.0',scope:'client-preview-defaults-only',perStatIncrementCap:{decimal:'0.8',unit:'ratio',source:evidenceFor('scripts/utilities/items.lua',14),consumer:evidenceFor('scripts/utilities/items.lua',1815),override:{fieldPath:'Items.preview_stats_change.max_stat_value',rawValue:'max_stat_value or Items.get_max_weapon_preview()',panelCaller:evidenceFor('scripts/ui/view_content_blueprints/item_stats_blueprints.lua',2030)}},itemBudget:{decimal:'380',unit:'item-stat-rating',source:evidenceFor('scripts/utilities/items.lua',1815)},expertiseBudget:{formula:'expertise_increase / expertise_multiplier * 6',expertiseMultiplier:{decimal:'10',unit:'expertise-level-per-rank',source:evidenceFor('scripts/utilities/items.lua',14)},maxExpertise:{decimal:'500',unit:'expertise-level',source:evidenceFor('scripts/utilities/items.lua',722)},capByRemainingItemBudget:true,lowerBound:'0',source:evidenceFor('scripts/utilities/items.lua',1815)},displayCap:{decimal:'100',unit:'percent',formula:'fraction = min(value / 100, 1); value = min(value, 100)',source:evidenceFor('scripts/utilities/items.lua',1815),panelSource:evidenceFor('scripts/ui/view_content_blueprints/item_stats_blueprints.lua',2030)},rounding:{rawValue:'math.floor(value + 0.5)',source:evidenceFor('scripts/utilities/items.lua',1815)},conditionalBranches:[{key:'no-current-item-total',rawValue:'if not item_current_level then',behavior:'round and clamp values to display cap; no expertise budget distribution',source:evidenceFor('scripts/utilities/items.lua',1815)},{key:'current-item-total-present',rawValue:'if item_max_level < remaining_budget + item_current_level then',behavior:'cap remaining expertise budget by item_max_level-current_total, then lower-bound at zero',source:evidenceFor('scripts/utilities/items.lua',1815)}],storedExpertiseOverride:{rawValue:'item.gear.masterDataInstance.overrides.expertise_stat_increases',behavior:'stored per-stat expertise affects allocation order',source:evidenceFor('scripts/utilities/items.lua',1815)},attainability:{status:'unknown',reasonCode:'NOT_EXPOSED_BY_SOURCE',source:evidenceFor('scripts/backend/master_items.lua',122),impact:'Client preview rules do not establish server-generated or player-obtainable item ranges.'}};
const statGroupDefinitions=[
  {statKey:'chainaxe_dps_stat',groupKey:'dps',consumerEvidence:statGroupEvidence.dps},
  {statKey:'chainaxe_armor_pierce_stat',groupKey:'armor-pierce',consumerEvidence:statGroupEvidence.armorPierce},
  {statKey:'chainaxe_defence_stat',groupKey:'defence',consumerEvidence:statGroupEvidence.defence},
  {statKey:'chainaxe_sawing_stat',groupKey:'sawing',consumerEvidence:statGroupEvidence.sawing},
  {statKey:'chainaxe_mobility_stat',groupKey:'mobility',consumerEvidence:statGroupEvidence.mobility}
];
const importerProvenance={path:importerPath,version:'1.0.0',sha256:importerSha256,sourceCommit:commit};const helperFacts={schemaVersion:'w07-static-source-facts/1.0.0',sourceCommit:commit,sourceSnapshot:{snapshotId:snapshot.snapshotId,currentCommit:commit,manifestSha256,contentSha256},registry:{path:registryPath,file:{path:registryPath,gitBlobSha1:gitBlob(registryPath),byteCount:raw(registryPath).length,artifactSha256:sha('sha256',raw(registryPath))},entryCount:registryEntryRows.length,entries:registryEntryRows},minions,excluded,zoneCount,armorEnum:{path:armorPath,allEnumKeys:allArmorKeys,usedMinionClassKeys:usedArmorKeys,entries:armorEnumEntries},havocArmorOverrides,staticCombatRelations,statGroupDefinitions,statGroupEvidence,importer:importerProvenance,relationshipEvidence,panelPreviewRules,inputFacts,checkedAvailabilitySources:['scripts/backend/master_data.lua','scripts/backend/gear.lua','scripts/backend/crafting.lua','scripts/backend/master_items.lua','scripts/backend/store.lua','scripts/managers/data_service/services/crafting_service.lua','scripts/managers/data_service/services/store_service.lua','scripts/settings/equipment/local_items_loader.lua','scripts/settings/item/crafting_settings.lua','scripts/settings/item/rank_settings.lua','scripts/settings/item/rarity_settings.lua','scripts/utilities/offer.lua'],availabilityConclusion:{status:'unknown',reasonCode:'NOT_EXPOSED_BY_SOURCE',boundary:'The fixed public client source fetches and processes item, gear, catalog, store, and crafting data, but does not define the server-side roll-generation or offer-entitlement range for an actual chainaxe item.',impact:'No player-attainable rating interval is asserted; server-provided item state can include generated values, and this snapshot does not establish which values a player can obtain.'},curveSemantics:{rawProfileFunction:{path:'scripts/utilities/attack/damage_profile.lua',line:379,endLine:385,fieldPath:'DamageProfile.lerp_damage_profile_entry',summary:'Passes entry[1] and entry[2] to math.lerp with caller-supplied t.'},lerp:{path:'scripts/foundation/utilities/math.lua',line:72,endLine:74,fieldPath:'math.lerp',summary:'Returns a*(1-p)+b*p without a local clamp; nominal endpoint parameters do not prove caller range.'},traitTemplates:'scripts/settings/equipment/weapon_templates/weapon_trait_templates/damage_trait_templates.lua'}};
helperFacts.curveSemantics.selectedTweakPath={status:'known',accumulatorRange:{min:'0',max:'1',unit:'ratio',inclusive:{min:true,max:true}},fallbacks:{noWeaponOrAction:'NO_LERP_VALUES',emptyProfilePath:'0',defaultTraitValue:'0.5',defaultProfileLerpValue:'0.5'},source:{baseStat:evidenceFor('scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',85),accumulatorClamp:evidenceFor('scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',318),traitMapping:evidenceFor('scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua',434),weaponTransfer:evidenceFor('scripts/extension_systems/weapon/weapon.lua',68),actionProfileLookup:evidenceFor('scripts/extension_systems/weapon/player_unit_weapon_extension.lua',442),emptyProfileFallback:evidenceFor('scripts/utilities/attack/damage_profile.lua',316),profileLerpFallback:evidenceFor('scripts/utilities/attack/damage_profile.lua',316),traitDefaults:evidenceFor('scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua',7)}};
const factsText=JSON.stringify(helperFacts,null,2)+'\n';const snapshotText=JSON.stringify(snapshot,null,2)+'\n';fs.mkdirSync(path.join(outRoot,'content/imports/w07'),{recursive:true});fs.writeFileSync(path.join(outRoot,'content/imports/w07/source-static-snapshot.json'),snapshotText,'utf8');fs.writeFileSync(path.join(outRoot,'content/imports/w07/source-static-facts.json'),factsText,'utf8');console.log(JSON.stringify({files:supplementRows.length,manifestSha256,contentSha256,registry:registryEntryRows.length,minions:minions.length,excluded:excluded.length,zones:zoneCount,armor:usedArmorKeys,input:{base:inputFacts.baseTemplateSettings.actionInputs.entries.length,default:inputFacts.defaultActionInputSetup.actionInputs.entries.length,marks:inputFacts.marks.map(m=>({id:m.markId,local:m.localActionCount,bindings:m.profileBindingCount,edges:m.continuationEdgeCount,generatorBindings:m.generatorBindings.length})),generators:inputFacts.actionGenerators.map(g=>({key:g.generatorKey,definitions:g.definitions.length,effective:g.effectiveDefinitionIndex,targets:g.definitions.map(d=>d.staticActionTargets.length)}))},unmatched:minions.reduce((n,b)=>n+b.unmatchedZoneReferences.length,0)},null,2));
