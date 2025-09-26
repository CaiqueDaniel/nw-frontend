import { Product } from './Product';

export interface ProductRepository {
  save(entity: Product): Promise<Product>;
  get(id: string): Promise<Product | undefined>;
  all(): Promise<Product[]>;
}
