import path from 'node:path';
import { parseArgs, REPO_ROOT, resolvePrivate, resolveSourceCode } from './lib/inputs.mjs';
import { readState, writeState, startRun, summarize } from './lib/state.mjs';

const SCRIPT_VERSION = 'pipeline/check-version.mjs@1.0.0';
async function main() {
  const a = parseArgs(process.argv.slice(2), { 'source-code-repo':'value', commit:'value', 'private-repo':'value', 'private-ref':'value', 'text-batch':'value', state:'value', json:'flag', summary:'flag' });
  const stateFile = path.resolve(a.state || path.join(REPO_ROOT, 'pipeline/state.json'));
  const state = await readState(stateFile);
  const source = resolveSourceCode({repo:a['source-code-repo'], ref:a.commit});
  const priv = resolvePrivate({repo:a['private-repo'], ref:a['private-ref'], batch:a['text-batch']});
  const meta = {gameVersion:source.gameVersion, sourceCommit:source.commit, textBatch:priv.batch};
  const same = x => x && Object.keys(meta).every(k => x[k] === meta[k]);
  let status;
  if (source.gameVersion !== priv.gameVersion) status = 'halted';
  else if (same(state.lastProcessed) && (!state.run || state.run.status === 'completed')) status = 'no-new-version';
  else {
    status = same(state.run) && ['running','halted'].includes(state.run.status) ? 'resume' : 'new';
    if (!a.summary) await writeState(stateFile, startRun(state, meta));
  }
  if (a.summary) {
    const current = !['halted','no-new-version'].includes(status), r = current ? state.run : null, s = current ? summarize(state) : {keptPrevious:[],categoriesKept:[]}, counts = Object.fromEntries(['skills','weapons','blessings','terms'].map(c => [c, Object.values(r?.items || {}).filter(i => i.category === c && i.outcome === 'updated').length]));
    console.log(`遊戲版本：${status === 'halted' ? `Source-Code ${source.gameVersion}／解包批次 ${priv.batch}（${priv.gameVersion}）` : status === 'no-new-version' ? source.gameVersion : r ? `${r.gameVersion}（${r.sourceCommit.slice(0, 7)}，批次 ${r.textBatch}）` : '無'}`);
    console.log(`結果：${status === 'halted' ? `整批停止（Source-Code ${source.gameVersion} 與解包批次 ${priv.batch}（${priv.gameVersion}）版本不一致）` : status === 'no-new-version' ? '沒有新版本' : r?.status === 'completed' ? '完成' : r?.status === 'halted' ? `整批停止（${r.haltReason}）` : r?.status || '無'}`);
    console.log(`更新項目數：技能 ${counts.skills}、武器 ${counts.weapons}、祝福 ${counts.blessings}、術語 ${counts.terms}`);
    console.log(`保留上一版的項目：${s.keptPrevious.map(x => `${x.id}：${x.reason}`).join('、') || '無'}`);
    console.log(`保留上一版的類別：${s.categoriesKept.map(x => `${x.category}：${x.reason}`).join('、') || '無'}`);
    if (status === 'halted') process.exitCode = 2;
    return;
  }
  if (a.json) console.log(JSON.stringify({status, ...meta, sourceGameVersion:source.gameVersion, textGameVersion:priv.gameVersion}));
  else if (status === 'halted') console.log(`整批停止：Source-Code ${source.gameVersion}（${source.commit.slice(0,7)}）與解包批次 ${priv.batch}（${priv.gameVersion}）遊戲版本不一致`);
  else console.log(`${{new:'有新版本',resume:'接續進行中的版本','no-new-version':'沒有新版本'}[status]}：${source.gameVersion}（${source.commit.slice(0,7)}，批次 ${priv.batch}）`);
  if (status === 'halted') process.exitCode = 2;
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
