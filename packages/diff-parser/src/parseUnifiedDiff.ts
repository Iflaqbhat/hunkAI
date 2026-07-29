export interface UnifiedDiffHunk {
  filePath: string;
  additions: number;
  deletions: number;
}

export function parseUnifiedDiff(diff: string): UnifiedDiffHunk[] {
  if (!diff.trim()) return [];
  return [{ filePath: 'unknown.ts', additions: 0, deletions: 0 }];
}
