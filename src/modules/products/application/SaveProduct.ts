import { UseCase } from '~/modules/shared/core/application/UseCase';
import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';
import { BusDispacher } from '~/modules/shared/core/application/BusDispacher';

export class SaveProduct implements UseCase<SaveProductInput, Promise<void>> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly bus: BusDispacher
  ) {}

  async execute(input: SaveProductInput): Promise<void> {
    if (!input.id) {
      await this.create(input);
      return;
    }

    const product = await this.repository.get(input.id);

    if (!product) {
      await this.create(input);
      return;
    }

    await this.update(input, product);
  }

  private async create(input: SaveProductInput) {
    const savedProduct = await this.repository.save(Product.create(input));
    this.bus.dispatch('product-list-updated');
    this.bus.dispatch('new-product-token-created', {
      token: savedProduct.token,
    });
  }

  private async update(input: SaveProductInput, product: Product) {
    product.update(input);
    await this.repository.save(product);
    this.bus.dispatch('product-list-updated');
  }
}

export type SaveProductInput = {
  id?: string;
  name: string;
  description: string;
  address: string;
  cover: File | null;
};
