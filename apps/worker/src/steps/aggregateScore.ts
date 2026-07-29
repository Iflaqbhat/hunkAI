export function aggregateScoreStep(scores: number[]): number {
  return scores.reduce((max, score) => Math.max(max, score), 0);
}
