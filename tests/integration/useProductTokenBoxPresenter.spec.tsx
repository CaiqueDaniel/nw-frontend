import { act, renderHook, waitFor } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Mocked } from 'vitest';
import { ProductTokenBoxContext } from '~/modules/products/features/ProductTokenBox/ProductTokenBoxContext';
import { useProductTokenBoxPresenter } from '~/modules/products/features/ProductTokenBox/useProductTokenBoxPresenter';
import { TextClipboardService } from '~/modules/shared/application/ClipboardService';

describe('useProductTokenBoxPresenter unit tests', () => {
  let clipboard: Mocked<TextClipboardService>;

  beforeAll(() => {
    clipboard = {
      write: vi.fn(),
      read: vi.fn(),
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be able to copy token to clipboard', async () => {
    const token = crypto.randomUUID();
    const { result } = renderHook(
      () => useProductTokenBoxPresenter({ token }),
      { wrapper: ProductTokenBoxProvider }
    );

    act(() => {
      result.current.onClickBtnCopyToClipboard();
    });

    await waitFor(() => {
      expect(result.current.wasCopied).toBeTruthy();
      expect(clipboard.write).toHaveBeenCalledWith(token);
    });
  });

  function ProductTokenBoxProvider({ children }: PropsWithChildren) {
    return (
      <ProductTokenBoxContext.Provider value={{ clipboard }}>
        {children}
      </ProductTokenBoxContext.Provider>
    );
  }
});
