import { Mocked } from 'vitest';
import { SaveProduct } from '~/modules/products/application/SaveProduct';
import { Product } from '~/modules/products/domain/Product';
import { MemoryProductRepository } from '~/modules/products/repositories/MemoryProductRepository';
import { BusDispacher } from '~/modules/shared/core/application/BusDispacher';

describe('SaveProduct unit tests', () => {
  let sut: SaveProduct;
  let repository: MemoryProductRepository;
  let dispatcher: Mocked<BusDispacher>;

  beforeAll(() => {
    dispatcher = { dispatch: vitest.fn() };
    repository = new MemoryProductRepository();
    sut = new SaveProduct(repository, dispatcher);
  });

  beforeEach(() => {
    repository.clear();
  });

  it('should be able to create a product', async () => {
    await sut.execute({
      address: 'https://www.google.com',
      description: 'description',
      cover: null,
      name: 'name',
    });

    expect(await repository.all()).toHaveLength(1);
    expect(dispatcher.dispatch).toHaveBeenCalledWith('product-list-updated');
    expect(dispatcher.dispatch).toHaveBeenCalledWith(
      'new-product-token-created',
      { token: expect.any(String) }
    );
  });

  it('should be able to update a product', async () => {
    const product = Product.create({
      address: 'https://www.google.com',
      description: 'description',
      cover: null,
      name: 'name',
    });
    await repository.save(product);
    await sut.execute({
      id: product.id,
      address: 'https://www.google2.com',
      description: 'description2',
      cover: null,
      name: 'name2',
    });

    const result = await repository.get(product.id);

    expect(await repository.all()).toHaveLength(1);
    expect(result?.id).toBe(product.id);
    expect(result?.name).toBe('name2');
    expect(result?.description).toBe('description2');
    expect(result?.address).toBe('https://www.google2.com');
    expect(dispatcher.dispatch).toHaveBeenCalled();
  });
});
