import { UseCase } from '~/modules/shared/core/application/UseCase';
import { ProductRepository } from '../domain/ProductRepository';
import { ProductCheckoutService } from './ProductCheckoutService';
import { NotFoundError } from '~/modules/shared/core/application/NotFoundError';

export class GetProductUrl
  implements UseCase<AccessProductInput, Promise<string>>
{
  constructor(
    private readonly repository: ProductRepository,
    private readonly checkoutService: ProductCheckoutService
  ) {}

  async execute(input: AccessProductInput): Promise<string> {
    const product = await this.repository.get(input.productId);

    if (!product) throw new NotFoundError('Product not found');

    return product.allowAccess
      ? product.address
      : await this.checkoutService.createCheckoutURLForProduct(input.productId);
  }
}

export type AccessProductInput = {
  productId: string;
};
