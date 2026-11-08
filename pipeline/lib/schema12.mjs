import { atPointer, escapePointer } from './json-pointer.mjs';

export function anchorTarget(item, anchor) {
  if (anchor?.field !== 'displayParameter') return item?.[anchor?.field]?.[anchor?.locale];
  const values = typeof item?.id === 'string' && item.id.startsWith('darktide:blessing:')
    ? (Array.isArray(item.values?.tiers) ? item.values.tiers.find(t => t?.tier === anchor.tier) : undefined) : item?.values;
  const param = values?.params?.[anchor.param];
  return param && Object.hasOwn(param, 'value') ? String(param.value) : undefined;
}

export function checkSchema12(category, file, item, path, items, add) {
  const modern = file.schemaVersion === '1.2.0';
  const fields = [
    [item.citations, '/citations'], [item.source?.valueSources, '/source/valueSources'],
    [item.source?.codeRefs, '/source/codeRefs'], [item.values?.mechanics, '/values/mechanics'],
    ...(Array.isArray(item.values?.tiers) ? item.values.tiers.map((t,i) => [t?.mechanics, `/values/tiers/${i}/mechanics`]) : []),
  ];
  for (const [value, field] of fields)
    if (!modern && value !== undefined) add(path + field, 'Field requires schema 1.2.0');
  if (!['skills','blessings'].includes(category) && item.values && Object.hasOwn(item.values,'mechanics'))
    add(path + '/values/mechanics', 'mechanics requires skills or blessings');
  if (!['skills','blessings'].includes(category))
    for (const field of ['valueSources', 'codeRefs'])
      if (Object.hasOwn(item.source ?? {}, field))
        add(`${path}/source/${field}`, `${field} requires skills or blessings`);
  const sources = item.source?.valueSources;
  for (const [pointer] of Object.entries(sources ?? {}))
    if (atPointer(item.values, pointer) === undefined)
      add(`${path}/source/valueSources/${escapePointer(pointer)}`, 'Referenced value does not exist');
  const mechanics = [[item.values?.mechanics, '/mechanics'],
    ...(Array.isArray(item.values?.tiers) ? item.values.tiers.map((t,i) => [t?.mechanics, `/tiers/${i}/mechanics`]) : [])];
  for (const [values, prefix] of mechanics)
    for (const key of Object.keys(values ?? {})) {
      const pointer = `${prefix}/${escapePointer(key)}`;
      if (!Object.hasOwn(sources ?? {}, pointer)) add(`${path}/values${pointer}`, 'Mechanics requires valueSources');
    }
  for (const [id, ref] of Object.entries(item.source?.codeRefs ?? {})) {
    const [refPath, symbol] = id.split('#');
    if (ref?.path !== refPath || ref?.symbol !== symbol)
      add(`${path}/source/codeRefs/${escapePointer(id)}`, 'Code reference path and symbol must match ref id');
  }
  if (Array.isArray(item.errata)) item.errata.forEach((entry, i) => {
    const p = `${path}/errata/${i}`, anchor = entry?.anchor;
    const target = anchor?.itemId === undefined ? item : items.find(x => x?.id === anchor.itemId);
    if (!target) add(`${p}/anchor/itemId`, 'Anchor item does not exist in this version');
    for (const [j, pointer] of (Array.isArray(entry?.valueRefs) ? entry.valueRefs : []).entries())
      if (target && atPointer(target.values, pointer) === undefined) add(`${p}/valueRefs/${j}`, 'Referenced value does not exist');
    if (!anchor || typeof anchor !== 'object') return;
    if (anchor.locale !== entry.locale) add(`${p}/anchor`, 'Anchor locale must match errata locale');
    if (anchor.field === 'displayParameter') {
      if (typeof target?.id === 'string' && target.id.startsWith('darktide:blessing:') && !Number.isInteger(anchor.tier))
        add(`${p}/anchor/tier`, 'Blessing displayParameter requires tier');
      if (!Object.hasOwn(target?.values?.params ?? {}, anchor.param))
        add(`${p}/anchor/param`, 'Display parameter must refer to values.params');
    }
    if (!target || typeof anchor.text !== 'string' || !anchor.text.length || !Number.isInteger(anchor.occurrence)) return;
    const text = anchorTarget(target, anchor);
    if (typeof text !== 'string') add(`${p}/anchor`, 'Anchor target text does not exist');
    else {
      let count=0, from=0, found;
      while ((found=text.indexOf(anchor.text,from)) !== -1) { count++; from=found+1; }
      if (count < anchor.occurrence) add(`${p}/anchor`, 'Anchor text not found at occurrence');
    }
  });
}
