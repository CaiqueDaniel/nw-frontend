import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

export class MemoryProductRepository implements ProductRepository {
  private items: Map<string, Product> = new Map();

  constructor() {
    this.save(
      Product.hydrate({
        id: '1',
        address: 'https://www.google.com',
        description: 'description',
        imageCover: 'https://dummyimage.com/600x400/000/fff',
        name: 'name',
      })
    );
  }

  async save(entity: Product): Promise<Product> {
    const id = entity.id ?? crypto.randomUUID();
    this.items.set(id, entity.clone());
    return Product.hydrate({
      ...entity,
      token: crypto.randomUUID(),
    });
  }

  async get(id: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 10));
    return this.items.get(id);
  }

  async all(): Promise<Product[]> {
    return Array.from(this.items.values());
  }

  clear() {
    this.items.clear();
  }
}
