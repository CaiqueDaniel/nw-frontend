import { Mocked } from 'vitest';
import { GetProduct } from '~/modules/products/application/GetProduct';
import { Product } from '~/modules/products/domain/Product';
import { ProductRepository } from '~/modules/products/domain/ProductRepository';
import { NotFoundError } from '~/modules/shared/application/NotFoundError';

describe('GetProduct unit tests', () => {
  let sut: GetProduct;
  let repository: Mocked<ProductRepository>;

  beforeAll(() => {
    repository = { save: vi.fn(), get: vi.fn(), all: vi.fn() };
    sut = new GetProduct(repository);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should be able to get product', async () => {
    const product = Product.create({
      address: 'https://www.google.com',
      description: 'description',
      cover: new File([''], 'filename'),
      name: 'name',
    });

    repository.get.mockImplementation(async () => product);
    const result = await sut.execute({ id: product.id });
    expect(result.id).toBe(product.id);
  });

  it("should not be able to get a product that don't exists", async () => {
    const result = sut.execute({ id: 'invalid-id' });
    await expect(result).rejects.toThrow(NotFoundError);
  });
});
