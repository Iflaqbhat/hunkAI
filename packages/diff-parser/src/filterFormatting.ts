import type { UnifiedDiffHunk } from './parseUnifiedDiff';

export function filterFormattingOnlyHunks(hunks: UnifiedDiffHunk[]): UnifiedDiffHunk[] {
  return hunks;
}
