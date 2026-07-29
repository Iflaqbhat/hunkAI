export interface EvalMetrics {
  precision: number;
  recall: number;
  f1: number;
}

export function calculateMetrics(truePositives: number, falsePositives: number, falseNegatives: number): EvalMetrics {
  const precision = truePositives + falsePositives > 0 ? truePositives / (truePositives + falsePositives) : 0;
  const recall = truePositives + falseNegatives > 0 ? truePositives / (truePositives + falseNegatives) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  return { precision, recall, f1 };
}
