import type { RiskCategory, Severity } from '@hunk/types';

export interface RubricCategory {
  category: RiskCategory;
  weight: number;
  severityThresholds: Record<Severity, number>;
}

export const rubric: RubricCategory[] = [
  {
    category: 'correctness',
    weight: 0.3,
    severityThresholds: { info: 0.05, low: 0.15, medium: 0.35, high: 0.6, critical: 0.85 }
  },
  {
    category: 'security',
    weight: 0.25,
    severityThresholds: { info: 0.05, low: 0.15, medium: 0.35, high: 0.6, critical: 0.85 }
  },
  {
    category: 'test-coverage',
    weight: 0.15,
    severityThresholds: { info: 0.05, low: 0.15, medium: 0.35, high: 0.6, critical: 0.85 }
  },
  {
    category: 'performance',
    weight: 0.15,
    severityThresholds: { info: 0.05, low: 0.15, medium: 0.35, high: 0.6, critical: 0.85 }
  },
  {
    category: 'ai-authorship',
    weight: 0.15,
    severityThresholds: { info: 0.05, low: 0.15, medium: 0.35, high: 0.6, critical: 0.85 }
  }
];
