/**
 * In-memory sliding-window rate limiter, keyed per IP + route.
 * Good enough for a single long-running Node process (e.g. Railway) — resets on
 * redeploy/restart, and won't coordinate across multiple instances if this ever
 * scales horizontally. For that, swap this for a shared store (Redis/Upstash).
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const buckets = new Map<string, { count: number; resetAt: number }>();

// Periodically drop expired entries so the map doesn't grow unbounded on a long-lived process.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}, 30 * 60 * 1000).unref();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}
