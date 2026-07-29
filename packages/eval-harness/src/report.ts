import type { EvalMetrics } from './metrics';

export function buildEvalReport(metrics: EvalMetrics): string {
  return [
    '# Hunk Eval Report',
    '',
    `- Precision: ${metrics.precision.toFixed(2)}`,
    `- Recall: ${metrics.recall.toFixed(2)}`,
    `- F1: ${metrics.f1.toFixed(2)}`
  ].join('\n');
}
