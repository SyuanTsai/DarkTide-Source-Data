import { parseWriteArgs, runWrite, WriteError } from './lib/write.mjs';
import { InputError } from './lib/verify/input.mjs';

try {
  const result = await runWrite(parseWriteArgs(process.argv.slice(2)));
  process.stdout.write(result.stdout);
  process.exitCode = result.exitCode;
} catch (error) {
  console.error(`寫入錯誤：${error instanceof InputError || error instanceof WriteError ? error.message : '無法完成寫入，請確認輸入與檔案權限'}`);
  process.exitCode = error instanceof InputError ? 2 : 1;
}
