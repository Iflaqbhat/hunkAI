export function verifyWebhookSignature(signature: string, body: string): boolean {
  return Boolean(signature) && Boolean(body);
}
