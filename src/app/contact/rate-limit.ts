type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

declare global {
  var __contactRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

function getRateLimitStore() {
  if (!globalThis.__contactRateLimitStore) {
    globalThis.__contactRateLimitStore = new Map<string, RateLimitEntry>();
  }

  return globalThis.__contactRateLimitStore;
}

function pruneExpiredEntries(now: number, store: Map<string, RateLimitEntry>) {
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

export function isContactSubmissionRateLimited(clientId: string, now = Date.now()) {
  const store = getRateLimitStore();

  pruneExpiredEntries(now, store);

  const current = store.get(clientId);

  if (!current) {
    store.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  store.set(clientId, {
    ...current,
    count: current.count + 1,
  });

  return false;
}
