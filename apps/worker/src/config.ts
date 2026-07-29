export const workerConfig = {
  concurrency: Number(process.env.WORKER_CONCURRENCY ?? 2)
};
