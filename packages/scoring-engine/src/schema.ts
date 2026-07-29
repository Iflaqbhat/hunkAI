import type { Finding } from '@hunk/types';

export interface LlmFinding extends Finding {
  rationale: string;
}

export interface LlmReviewPayload {
  findings: LlmFinding[];
}
