import { atPointer, failure, params, walk } from './common.mjs';

export function normalizeNumbers(text) {
  return text.replace(/[０-９＋－．％]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
}
export function extractNumbers(text) {
  const normalized = normalizeNumbers(typeof text === 'string' ? text : '');
  const result = [];
  for (const match of normalized.matchAll(/[+\-−]?\d+(?:\.\d+)?/g)) {
    const before = normalized.slice(0, match.index), after = normalized.slice(match.index + match[0].length);
    const raw = /^[+\-−]/.test(match[0]) && /[\d%]\s*$/.test(before) ? match[0].slice(1) : match[0];
    const value = Number(raw.replace('−', '-'));
    if (/^[1-4]$/.test(raw) && (/(?:LV|Lv|第)\s*$/.test(before) || /^\s*階/.test(after))) continue;
    const suffix = /^\s*(%|秒)/.exec(after)?.[1];
    result.push({ value, raw, signed: /^[+\-−]/.test(raw), decimals: raw.split('.')[1]?.length ?? 0, suffix });
  }
  return result;
}
export const derived = (n) => [n, n * 100, (n - 1) * 100, (1 - n) * 100].filter(Number.isFinite);
export const near = (token, n) => Math.abs(token.value - n) <= 0.5 * 10 ** -token.decimals + 1e-9;
const sameSign = (token, n) => /^[\-−]/.test(token.raw) ? n <= 0 : n >= 0;
export function matches(token, numbers) {
  return numbers.some((n) => (!token.signed || sameSign(token, n)) && near(token, n)) ||
    (!token.signed && numbers.some((n) => near(token, Math.abs(n))));
}
export function isGameValuePath(values, path) {
  if (typeof path !== 'string' || /^\/curves\/\d+\/input(?:\/|$)/.test(path) ||
      /^\/curves\/\d+\/knots\/\d+\/input(?:\/|$)/.test(path) ||
      /^\/attackCombos\/\d+\/loopsTo(?:\/|$)/.test(path)) return false;
  for (const match of path.matchAll(/(?:^|\/)source(?=\/|$)/g)) {
    const source = atPointer(values, path.slice(0, match.index + match[0].length));
    if (source && typeof source === 'object' && !Array.isArray(source) &&
        Object.hasOwn(source, 'path') && Object.hasOwn(source, 'line')) return false;
  }
  return true;
}
export function derivable(values) {
  const numbers = [];
  walk(values, (v, path) => {
    if (isGameValuePath(values, path) && typeof v === 'number' && Number.isFinite(v)) numbers.push(...derived(v));
  });
  return numbers;
}
function directionCandidates(token, value, unit) {
  if (unit === undefined) return derived(value);
  if (unit === 'percent' && token.suffix === '%') return [value];
  if (unit === 'ratio' && token.suffix === '%') return derived(value);
  if (unit === 'seconds' && token.suffix === '秒') return [value];
  return [];
}
export function checkNumbers(values, text, lockedEffect, sections) {
  const tokens = sections ? sections.flatMap(extractNumbers) : extractNumbers(text), numbers = derivable(values), failures = [];
  const wrong = [], direction = [], warnings = [], positiveValues = [];
  walk(values, (v, path) => {
    if (isGameValuePath(values, path) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
      const paramPath = path.replace(/\/value(?:\/\d+)?$/, '');
      const param = paramPath !== path ? atPointer(values, paramPath) : undefined;
      positiveValues.push({ value: v, path, unit: param?.unit });
    }
  });
  const lockedCount = typeof lockedEffect === 'string' ? extractNumbers(lockedEffect).length : 0;
  for (const [index, token] of tokens.entries()) {
    if (matches(token, numbers)) continue;
    if (token.signed && numbers.some((n) => !sameSign(token, n) && near({ ...token, value: Math.abs(token.value) }, Math.abs(n)))) {
      const matching = index < lockedCount && /^[\-−]/.test(token.raw) ? positiveValues.filter(({ value, unit }) => directionCandidates(token, value, unit).some((n) => n > 0 && near({ ...token, value: Math.abs(token.value) }, n))) : [];
      if (matching.length) warnings.push({ code: 'W_OFFICIAL_TEXT_DIRECTION', path: '/explanation/effect', message: `官方原文數字 ${token.raw}；values：${[...new Set(matching.map(({ value }) => value))].join('、')}` });
      else direction.push(token.raw);
    }
    else wrong.push(token.raw);
  }
  if (wrong.length) failures.push(failure('text', 'T_NUMBER', '/explanation', `說明數字無法由資料推導：${[...new Set(wrong)].sort().join('、')}`));
  if (direction.length) failures.push(failure('text', 'T_DIRECTION', '/explanation', `說明數字方向相反：${[...new Set(direction)].sort().join('、')}`));
  const uncovered = params(values).filter(({ path, param }) =>
    /^(\/params\/[^/]+|\/tiers\/\d+\/params\/[^/]+)$/.test(path) &&
    typeof param.value === 'number' && Number.isFinite(param.value) && param.value !== 0 &&
    !tokens.some((token) => matches({ ...token, signed: false, value: Math.abs(token.value) }, derived(param.value))));
  if (uncovered.length) failures.push(failure('text', 'T_COVERAGE', '/values', `說明未涵蓋參數：${uncovered.map(({ path }) => `/values${path}`).sort().join('、')}`));
  return { failures, tokens, numbers, warnings };
}
