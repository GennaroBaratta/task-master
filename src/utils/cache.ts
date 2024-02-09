// utils/cache.ts

export class Cache<T> {
    private store: Map<string, T>;

    constructor() {
        this.store = new Map<string, T>();
    }

    get(key: string): T | undefined {
        return this.store.get(key);
    }

    set(key: string, value: T, ttl: 300000): void { // Default TTL 5 minutes
        this.store.set(key, value);
        setTimeout(() => this.store.delete(key), ttl);
    }

    has(key: string): boolean {
        return this.store.has(key);
    }
}

const cache = new Cache<object>();
export default cache;
