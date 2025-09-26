import { Mocked } from 'vitest';
import { GetProductUrl } from '~/modules/products/application/GetProductUrl';
import { ProductCheckoutService } from '~/modules/products/application/ProductCheckoutService';
import { Product } from '~/modules/products/domain/Product';
import { ProductRepository } from '~/modules/products/domain/ProductRepository';
import { NotFoundError } from '~/modules/shared/core/application/NotFoundError';

describe('GetProductUrl use case unit', () => {
  let sut: GetProductUrl;
  let repository: Mocked<ProductRepository>;
  let checkoutService: Mocked<ProductCheckoutService>;

  beforeAll(() => {
    checkoutService = { createCheckoutURLForProduct: vi.fn() };
    repository = { save: vi.fn(), all: vi.fn(), get: vi.fn() };
    sut = new GetProductUrl(repository, checkoutService);
  });

  it('should be able to get product url', async () => {
    repository.get.mockResolvedValueOnce(
      Product.hydrate({
        address: 'https://www.google.com',
        description: 'description',
        imageCover: '',
        name: 'name',
        allowAccess: true,
        id: crypto.randomUUID(),
      })
    );

    const url = await sut.execute({ productId: crypto.randomUUID() });
    expect(url).toBe('https://www.google.com');
  });

  it('should be able to redirect to product checkout given user has not access to it', async () => {
    checkoutService.createCheckoutURLForProduct.mockResolvedValueOnce(
      'http://test.com'
    );
    repository.get.mockResolvedValueOnce(
      Product.hydrate({
        address: 'https://www.google.com',
        description: 'description',
        imageCover: '',
        name: 'name',
        allowAccess: false,
        id: crypto.randomUUID(),
      })
    );

    const url = await sut.execute({ productId: crypto.randomUUID() });
    expect(url).toBe('http://test.com');
  });

  it("should not be able to get url for a product that don't exists", async () => {
    const result = sut.execute({ productId: crypto.randomUUID() });
    await expect(result).rejects.toThrowError(NotFoundError);
  });
});
