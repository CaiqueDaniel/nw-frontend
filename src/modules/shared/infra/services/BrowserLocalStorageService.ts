import { StorageService } from '../../core/application/StorageService';

export class BrowserLocalStorageService<T> implements StorageService<T> {
  constructor(private readonly storageName: string) {}

  set(data: T): void {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  get(): T | undefined {
    const data = localStorage.getItem(this.storageName);
    if (!data) return;

    try {
      return JSON.parse(data);
    } catch (error) {
      return;
    }
  }

  clear(): void {
    localStorage.clear();
  }
}
