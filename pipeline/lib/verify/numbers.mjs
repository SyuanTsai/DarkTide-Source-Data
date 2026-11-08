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
    const suffix = extractSuffix(after);
    result.push({ value, raw, signed: /^[+\-−]/.test(raw), decimals: raw.split('.')[1]?.length ?? 0, suffix });
  }
  return result;
}
const segmenter = new Intl.Segmenter('zh', { granularity: 'word' });
function extractSuffix(after) {
  const separated = /^\s/u.test(after);
  const rest = after.trimStart();
  if (/^[+\-−]?\d|^[/／]\s*[+\-−]?\d/u.test(rest)) return undefined;
  if (/^[/／]/u.test(rest)) return rest.match(/^[/／]\s*[%\p{L}\p{N}\p{M}\p{S}_]*/u)[0];
  const first = [...segmenter.segment(rest)][0]?.segment ?? '';
  const hanPrefix = /^[\p{Script=Han}]/u.test(first);
  const prefix = hanPrefix ? first : /^(?:%|[a-z]+|[\p{N}\p{M}\p{S}_]+)/iu.exec(rest)?.[0];
  if (!prefix) return undefined;
  const normalizedPrefix = prefix.toLowerCase();
  if (/^[a-z]/iu.test(prefix) && separated && !units.has(normalizedPrefix) &&
      !multiplierSuffixes.has(normalizedPrefix) && !unsupportedLatinUnits.has(normalizedPrefix)) return undefined;
  const tail = rest.slice(prefix.length);
  if (hanPrefix) {
    const modifier = /^[²³]+/u.exec(tail)?.[0] ?? '';
    const compound = /^\s*[/／]\s*[%\p{L}]+/iu.exec(tail.slice(modifier.length))?.[0] ?? '';
    return prefix + modifier + compound;
  }
  return prefix + (/^(?:(?:\s*[/／]\s*[%\p{L}]+)|[\p{N}\p{M}\p{S}a-z_])+/iu.exec(tail)?.[0] ?? '');
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
const units = new Map(Object.entries({ '%':'percent', '%/秒':'percent', '%/s':'percent', 秒:'seconds', s:'seconds', sec:'seconds', second:'seconds', seconds:'seconds', 公尺:'meters', 米:'meters', m:'meters', meter:'meters', meters:'meters', metre:'meters', metres:'meters', 次:'次', 層:'層' }));
const unsupportedChineseUnits = ['公斤', '公克', '克', '公分', '釐米', '厘米', '毫米', '公里', '平方', '立方', '小時', '分鐘', '毫秒', '度'];
const unsupportedLatinUnits = new Set([
  'kg', 'kgs', 'kilogram', 'kilograms', 'g', 'gram', 'grams', 'cm', 'centimeter', 'centimeters', 'centimetre', 'centimetres',
  'mm', 'millimeter', 'millimeters', 'millimetre', 'millimetres', 'km', 'kilometer', 'kilometers', 'kilometre', 'kilometres',
  'h', 'hr', 'hrs', 'hour', 'hours', 'min', 'mins', 'minute', 'minutes', 'ms', 'millisecond', 'milliseconds',
  'deg', 'degree', 'degrees', 'lb', 'lbs', 'pound', 'pounds', 'oz', 'ounce', 'ounces', 'mi', 'mile', 'miles',
  'in', 'inch', 'inches', 'ft', 'foot', 'feet', 'yd', 'yard', 'yards', 'percent', 'percentage'
]);
const multiplierSuffixes = new Set(['倍', 'x', '×']);
const unitName = suffix => {
  if (!suffix) return undefined;
  const normalized = suffix.toLowerCase();
  if (multiplierSuffixes.has(normalized)) return 'multiplier';
  const supported = units.get(normalized);
  if (supported !== undefined) return supported;
  if (/[/／²³]/u.test(suffix) || /^[a-z]/i.test(suffix) || unsupportedChineseUnits.some(unit => suffix.startsWith(unit))) return null;
  return /^[\p{Script=Han}]+$/u.test(suffix) ? undefined : null;
};
function normalizedValue(value, parentUnit) {
  if (typeof value === 'number') return Number.isFinite(value) ? {value, unit:parentUnit} : null;
  if (typeof value !== 'string') return null;
  const normalized = normalizeNumbers(value).trim();
  const match = /^([+\-−]?\d+(?:\.\d+)?)\s*(\S+)?$/u.exec(normalized);
  if (!match) return null;
  const number = Number(match[1].replace('−', '-'));
  const unit = unitName(match[2]);
  if (!Number.isFinite(number) || (match[2] && !units.has(match[2].toLowerCase())) || unit === null || (unit !== undefined && parentUnit !== undefined && unit !== parentUnit)) return null;
  return {value:number, unit:parentUnit ?? unit};
}
function directionCandidates(token, value, unit) {
  const tokenUnit = unitName(token.suffix);
  if (tokenUnit === null) return [];
  if (tokenUnit === 'multiplier') return unit === undefined ? derived(value) : [];
  if (unit === undefined) return derived(value);
  if (unit === 'ratio' && token.suffix === '%') return derived(value);
  if (unit === 'ratio' && token.suffix === undefined) return [value];
  if (unit === unitName(token.suffix)) return [value];
  return [];
}
export function checkNumbers(values, text, lockedEffect, sections) {
  const tokens = sections ? sections.flatMap(extractNumbers) : extractNumbers(text), failures = [];
  const wrong = [], direction = [], warnings = [], normalizedValues = [], numericValues = [];
  walk(values, (v, path) => {
    if (!isGameValuePath(values, path)) return;
    const paramPath = path.replace(/\/value(?:\/\d+)?$/, '');
    const param = paramPath !== path ? atPointer(values, paramPath) : undefined;
    const parsed = normalizedValue(v, param?.unit);
    if (parsed) {
      normalizedValues.push(parsed);
      if (typeof v === 'number') numericValues.push(parsed);
    }
  });
  const numbers = numericValues.flatMap(({value}) => derived(value));
  const directionNumbers = normalizedValues.flatMap(({value}) => derived(value));
  const lockedCount = typeof lockedEffect === 'string' ? extractNumbers(lockedEffect).length : 0;
  for (const [index, token] of tokens.entries()) {
    const candidates = normalizedValues.flatMap(({value, unit}) => directionCandidates(token, value, unit));
    if (matches(token, candidates)) continue;
    if (token.signed && unitName(token.suffix) !== null && directionNumbers.some((n) => !sameSign(token, n) && near({ ...token, value: Math.abs(token.value) }, Math.abs(n)))) {
      const matching = index < lockedCount && /^[\-−]/.test(token.raw) ? normalizedValues.filter(({ value, unit }) => value > 0 && directionCandidates(token, value, unit).some((n) => n > 0 && near({ ...token, value: Math.abs(token.value) }, n))) : [];
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
    !tokens.some((token) => unitName(token.suffix) !== null && matches({ ...token, signed: false, value: Math.abs(token.value) }, derived(param.value))));
  if (uncovered.length) failures.push(failure('text', 'T_COVERAGE', '/values', `說明未涵蓋參數：${uncovered.map(({ path }) => `/values${path}`).sort().join('、')}`));
  return { failures, tokens, numbers, warnings };
}
