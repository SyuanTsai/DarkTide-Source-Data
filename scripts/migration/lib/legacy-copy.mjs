import { createHash } from 'node:crypto';
import { stringifyCanonical } from '../../../pipeline/lib/canonical-json.mjs';
import { EXPLANATION_SECTIONS } from '../../../pipeline/lib/verify/text.mjs';

export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
export const hashObject = value => sha256(stringifyCanonical(value));
export const emptyExplanation = () => Object.fromEntries(EXPLANATION_SECTIONS.map(key => [key, '']));
export const VERSION = Object.freeze({ schemaVersion: '1.1.0', gameVersion: '1.13.4',
  sourceCommit: 'e46b8926cfa3fa35503e4b80b15aab7a804314e4', textBatch: '26101089' });

/** Only the three part kinds observed in this fixed revision are supported. */
export function convertLegacy({ category, document, presentation, localization, extracted, path }) {
  const sections = Object.fromEntries(EXPLANATION_SECTIONS.map(key => [key, []])), fragments = [];
  const append = (section, text, sourcePath, original) => {
    if (typeof text !== 'string') throw new Error(`Invalid legacy text: ${sourcePath}`);
    sections[section].push(text);
    fragments.push({ section, path: sourcePath, text, original, sha256: sha256(text) });
  };
  const render = item => {
    if (typeof item.text === 'string') return item.text;
    if (!Array.isArray(item.parts)) throw new Error('Missing legacy text/parts');
    return item.parts.map(part => {
      if (part.kind === 'literal') {
        if (typeof part.text !== 'string') throw new Error('Invalid literal part');
        return part.text;
      }
      if (!['number', 'unsigned-percent'].includes(part.kind)) throw new Error(`Unknown part kind: ${part.kind}`);
      const matches = (document.source?.records ?? []).filter(record => record.recordId === part.bindingRef?.recordId);
      const record = matches[0], value = record?.payload?.value?.decimal;
      if (matches.length !== 1 || record.kind !== 'claim' || typeof value !== 'string' || !value.trim() ||
        !Number.isFinite(Number(value)) || (part.bindingRef.gameReleaseId && record.gameReleaseId !== part.bindingRef.gameReleaseId))
        throw new Error(`Missing/invalid binding: ${part.bindingRef?.recordId}`);
      return part.kind === 'unsigned-percent' ? `${Math.abs(Number(value))}%` : String(Number(value));
    }).join('');
  };
  const detail = (list, base, tier) => {
    for (const [i, section] of (list ?? []).entries()) {
      const key = section.sectionId === 'effects' ? 'effect' : section.sectionId;
      if (!EXPLANATION_SECTIONS.includes(key)) throw new Error(`Unknown section: ${section.sectionId}`);
      for (const [j, item] of section.items.entries()) append(key,
        `${tier === undefined ? '' : `第${tier}階：`}${render(item)}`, `${base}/${i}/items/${j}`, item);
    }
  };
  if (category === 'terms') append('effect', localization.definition, `${path}/definition`, localization.definition);
  else {
    detail(presentation.detailSections, `${path}/detailSections`);
    const tiers = new Set();
    for (const [i, option] of (presentation.tierPresentations?.options ?? []).entries()) {
      if (![1, 2, 3, 4].includes(option.tier) || tiers.has(option.tier)) throw new Error('Invalid/duplicate tier');
      tiers.add(option.tier);
      detail(option.detailSections, `${path}/tierPresentations/options/${i}/detailSections`, option.tier);
    }
    if (presentation.weaponView?.note) append('effect', presentation.weaponView.note, `${path}/weaponView/note`, presentation.weaponView.note);
    // This pinned revision has no errata. Stop rather than silently drop an unknown legacy format.
    if ((presentation.errata ?? []).length) throw new Error('Unsupported legacy errata');
  }
  const originalExplanation = Object.fromEntries(Object.entries(sections).map(([key, texts]) => [key, texts.join('\n')]));
  const explanation = structuredClone(originalExplanation);
  if (['blessings', 'skills'].includes(category)) {
    explanation.effect = extracted.official.zh ?? '';
    explanation.notes = [originalExplanation.effect, originalExplanation.notes].filter(Boolean).join('\n');
  }
  return { originalExplanation, explanation, errata: [], fragments };
}

/** Re-derive inv1/inv2 identities, including entities without handwritten copy. */
export function mapLegacy(documents, extracts) {
  const result = [], oldIds = new Set(), targetIds = new Set();
  const kinds = { 'weapon-family': ['weapons', 'weapon'], blessing: ['blessings', 'blessing'], skills: ['skills', 'skill'], terms: ['terms', 'term'] };
  for (const { path: file, value: document } of [...documents].sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0)) {
    if (!Object.hasOwn(kinds, document.kind)) continue;
    const [category, kind] = kinds[document.kind];
    for (const [recordIndex, record] of document.source.records.entries()) {
      if (record.kind !== kind) continue;
      const onlineId = record.recordId, identity = `${category}/${onlineId}`;
      if (oldIds.has(identity)) throw new Error(`Duplicate legacy mapping: ${identity}`);
      oldIds.add(identity);
      const localizations = (document.web?.termLocalizations ?? []).map((value, index) => ({ value, index }))
        .filter(({ value }) => value.termRef.recordId === onlineId && value.locale === 'zh-TW');
      const presentations = (document.web?.presentations ?? []).map((value, index) => ({ value, index }))
        .filter(({ value }) => value.entityRef.recordId === onlineId && value.locale === 'zh-TW');
      if (localizations.length > 1 || presentations.length > 1) throw new Error(`Ambiguous presentation mapping: ${onlineId}`);
      const p = presentations[0]?.value, loc = localizations[0]?.value;
      let matches;
      if (category === 'weapons') {
        const keys = [record.payload.markId, p?.retainedName?.currentIdentity?.templateKey, p?.retainedName?.sourceMarkId].filter(Boolean);
        matches = extracts[category].items.filter(item => keys.includes(item.key));
      } else if (category === 'blessings') {
        const key = 'weapon_trait_bespoke_' + onlineId.slice('darktide:blessing:'.length).replaceAll(':', '_').replaceAll('-', '_');
        matches = extracts[category].items.filter(item => item.key === key);
      } else if (category === 'skills') matches = extracts[category].items.filter(item => item.source.text?.keys?.name === record.payload.nameKey);
      else matches = extracts[category].items.filter(item => item.key === record.payload.termKey && item.values.context === loc?.contextKey);
      if (matches.length !== 1 || targetIds.has(matches[0]?.id)) throw new Error(`Missing/ambiguous mapping: ${onlineId} (${matches.length})`);
      const extracted = matches[0]; targetIds.add(extracted.id);
      const path = category === 'terms' ? `/web/termLocalizations/${localizations[0]?.index}` : `/web/presentations/${presentations[0]?.index}`;
      const hasExplanation = category === 'terms' ? Boolean(loc?.definition?.trim()) : Boolean(p?.weaponView?.note ||
        p?.detailSections?.some(s => s.items.length) || p?.tierPresentations?.options?.some(o => o.detailSections?.some(s => s.items.length)));
      const original = { record, ...(p ? { presentation: p } : {}), ...(loc ? { localization: loc } : {}) };
      result.push({ category, onlineId, id: extracted.id, file, path, recordPath: `/source/records/${recordIndex}`,
        original, originalHash: hashObject(original), hasExplanation,
        ...(hasExplanation ? { conversion: convertLegacy({ category, document, presentation: p, localization: loc, extracted, path }) } : {}) });
    }
  }
  return result.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}
