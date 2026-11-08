import { runVerify } from './lib/verify/index.mjs';
import { summary } from './lib/verify/report.mjs';
import { InputError } from './lib/verify/input.mjs';
import { parse } from './lib/verify/args.mjs';

try {
  const options = parse(process.argv.slice(2));
  const result = await runVerify(options);
  process.stdout.write(summary(result.report, options.issues));
  for (const id of result.writtenWarnings) process.stdout.write(`已寫入的項目與本次檢查結果不同：${id}\n`);
  process.exitCode = result.exitCode;
} catch (error) {
  console.error(`檢查錯誤：${error instanceof InputError ? error.message : '無法完成檢查，請確認輸入與檔案權限'}`);
  process.exitCode = 2;
}
