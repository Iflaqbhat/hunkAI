import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { calculateMetrics } from './metrics.ts';
import { buildEvalReport } from './report.ts';

interface EvalCase {
  id: string;
  expectedFindings: number;
}

async function loadCases(): Promise<EvalCase[]> {
  const casesDir = join(process.cwd(), 'packages/eval-harness/dataset/cases');
  const entries = await readdir(casesDir);
  const files = entries.filter((entry) => entry.endsWith('.json'));
  const cases: EvalCase[] = [];

  for (const file of files) {
    const raw = await readFile(join(casesDir, file), 'utf8');
    const parsed = JSON.parse(raw) as EvalCase;
    cases.push(parsed);
  }

  return cases;
}

export async function runEval(): Promise<void> {
  const cases = await loadCases();
  const truePositives = 0;
  const falsePositives = 0;
  const falseNegatives = cases.reduce((sum, currentCase) => sum + currentCase.expectedFindings, 0);
  const metrics = calculateMetrics(truePositives, falsePositives, falseNegatives);

  console.log(buildEvalReport(metrics));
  console.log(`\nCases: ${cases.length}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runEval().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
