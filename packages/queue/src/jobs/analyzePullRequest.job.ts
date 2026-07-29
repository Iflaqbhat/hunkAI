export const analyzePullRequestJobName = 'analyzePullRequest' as const;

export interface AnalyzePullRequestJob {
  organizationId: string;
  repositoryId: string;
  pullRequestId: string;
  installationId: string;
}
