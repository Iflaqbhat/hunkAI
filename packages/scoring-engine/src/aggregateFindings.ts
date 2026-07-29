import type { ReviewResult } from '@hunk/types';

export function aggregateFindings(results: ReviewResult[]): ReviewResult {
  return results.reduce<ReviewResult>(
    (acc, result) => ({
      score: Math.max(acc.score, result.score),
      findings: [...acc.findings, ...result.findings]
    }),
    { score: 0, findings: [] }
  );
}
