import { contentHash } from './diff-core.mjs';
import { stringifyCanonical } from './canonical-json.mjs';

// Reuse the diff fingerprint algorithm, restricted to values (names/text/source do not count).
export const valuesFingerprint = (category, values) => contentHash(category, { values });
export function retainedExplanations(state) {
  return Object.entries(state.retainedExplanations ?? {}).map(([id, marker]) => ({ id,
    category: marker.category, explanationFrom: marker.explanationFrom, valuesChanged: marker.valuesChanged }))
    .sort((a, b) => Number(b.valuesChanged) - Number(a.valuesChanged) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

// Track the actual selected values, including whole-item/category fallbacks. Never publish these markers.
export function trackExplanations(state, loaded, report, merged) {
  const next = structuredClone(state);
  for (const [category, file] of Object.entries(merged)) for (const item of file.items) {
    const entry = loaded[category], previous = entry.previous?.items?.find(x => x.id === item.id);
    const row = report.items.find(x => x.id === item.id && x.category === category);
    const runItem = next.run.items[item.id];
    if (runItem?.stage === 'written') continue;
    const existing = next.retainedExplanations?.[item.id];
    const rewritten = row?.decision === 'pass' && (!previous ||
      stringifyCanonical(item.explanation) !== stringifyCanonical(previous.explanation));
    if (rewritten) {
      if (next.retainedExplanations) delete next.retainedExplanations[item.id];
      if (runItem) { delete runItem.explanationFrom; delete runItem.valuesChanged; }
      continue;
    }
    const retained = report.categories[category].status === 'kept-previous' ||
      ['combined', 'kept-previous'].includes(row?.decision);
    if (!previous || (!retained && !existing)) continue;
    const explanationFrom = existing?.explanationFrom ?? runItem?.explanationFrom ?? previous.retainedFrom ?? {
      gameVersion: entry.previous.gameVersion, sourceCommit: entry.previous.sourceCommit, textBatch: entry.previous.textBatch,
    };
    const valuesAtExplanation = existing?.valuesFingerprint ?? valuesFingerprint(category, previous.values);
    const marker = { category, explanationFrom, valuesFingerprint: valuesAtExplanation,
      valuesChanged: valuesFingerprint(category, item.values) !== valuesAtExplanation };
    (next.retainedExplanations ??= {})[item.id] = marker;
    if (runItem) Object.assign(runItem, { explanationFrom: structuredClone(explanationFrom), valuesChanged: marker.valuesChanged });
  }
  return next;
}
