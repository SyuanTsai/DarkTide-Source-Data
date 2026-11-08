export const RELEASE_SCHEMA_VERSION = '1.2.0';
const supported = new Set(['1.0.0', '1.1.0', RELEASE_SCHEMA_VERSION]);

// Historical same-schema releases remain replayable. Only the current contract
// accepts an older supported shape; callers must still validate the final data.
export function checkSchemaMigration(from, to) {
  if (!supported.has(from) || !supported.has(to) ||
      (from !== to && to !== RELEASE_SCHEMA_VERSION))
    throw new Error(`schemaVersion 不允許保留提升：${from} → ${to}`);
}

export function releaseSchemaVersion(versions) {
  const selected = versions.filter(version => version !== undefined && version !== null);
  const target = selected[0] ?? RELEASE_SCHEMA_VERSION;
  if (!supported.has(target) || selected.some(version => version !== target))
    throw new Error('發布目標 schemaVersion 不支援或不一致');
  return target;
}
