import { fileURLToPath } from 'node:url';
import { readState } from './lib/state.mjs';
import { retainedExplanations } from './lib/retained-explanations.mjs';

try {
  const args = process.argv.slice(2);
  if (args.length && (args.length !== 2 || args[0] !== '--state' || !args[1] || args[1].startsWith('--')))
    throw new Error('用法：node pipeline/retained-explanations.mjs [--state <state.json>]');
  const state = await readState(args[1] ?? fileURLToPath(new URL('./state.json', import.meta.url)));
  console.log(JSON.stringify(retainedExplanations(state)));
} catch (error) { console.error(error.message); process.exitCode = 1; }
