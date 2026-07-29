import type { UnifiedDiffHunk } from '@hunk/diff-parser';
import type { ReviewResult } from '@hunk/types';

export async function scoreHunk(_hunk: UnifiedDiffHunk): Promise<ReviewResult> {
  return { score: 0, findings: [] };
}
