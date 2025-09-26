import { act, renderHook, waitFor } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { GetProduct } from '~/modules/products/application/GetProduct';
import { SaveProduct } from '~/modules/products/application/SaveProduct';
import { ProductFormContext } from '~/modules/products/features/ProductForm/ProductFormContext';
import { useProductFormPresenter } from '~/modules/products/features/ProductForm/useProductFormPresenter';
import { MemoryProductRepository } from '~/modules/products/repositories/MemoryProductRepository';
import { EventBus } from '~/modules/shared/infra/services/EventBus';

describe('useProductFormPresenter integration tests', () => {
  let bus: EventBus;
  let repository: MemoryProductRepository;

  beforeAll(() => {
    bus = EventBus.getInstance();
    repository = new MemoryProductRepository();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should be able to set a file', async () => {
    const expectedFile = new File(['content'], 'text.txt');
    //@ts-expect-error - interface not fully implemented
    const files: FileList = {
      item: () => expectedFile,
      length: 1,
    };
    const setFieldValue = vi.fn();
    const { result } = renderHook(
      () => useProductFormPresenter({ onCancel: () => {} }),
      { wrapper: ProductFormProvider }
    );

    act(() => result.current.onInputFile(setFieldValue, files));
    await waitFor(() => {
      expect(setFieldValue).toHaveBeenCalledWith('cover', expectedFile);
    });
  });

  function ProductFormProvider({ children }: PropsWithChildren) {
    return (
      <ProductFormContext.Provider
        value={{
          getProduct: new GetProduct(repository),
          saveProduct: new SaveProduct(repository, bus),
        }}
      >
        {children}
      </ProductFormContext.Provider>
    );
  }
});
