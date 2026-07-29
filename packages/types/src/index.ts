export type RiskCategory =
  | 'correctness'
  | 'security'
  | 'test-coverage'
  | 'performance'
  | 'ai-authorship';

export type Severity = 'info' | 'low' | 'medium' | 'high' | 'critical';

export interface Finding {
  id: string;
  category: RiskCategory;
  severity: Severity;
  title: string;
  summary: string;
  filePath: string;
  lineStart: number;
  lineEnd: number;
  confidence: number;
}

export interface ReviewResult {
  score: number;
  findings: Finding[];
}

export interface Installation {
  id: string;
  githubInstallationId: number;
  organizationId: string;
  accountLogin: string;
}
