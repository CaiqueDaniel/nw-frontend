export interface StorageService<T> {
    set(data: T): void;
    get(): T | undefined;
    clear(): void;
}
