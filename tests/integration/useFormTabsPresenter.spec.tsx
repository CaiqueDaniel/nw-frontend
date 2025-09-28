import { act, renderHook, waitFor } from '@testing-library/react';
import { useFormTabsPresenter } from '~/modules/shared/infra/features/FormTabs/useFormTabsPresenter';

describe('useCharacterFormPresenter', () => {
  it('should be able to handle when no children is provided', () => {
    const { result } = renderHook(() => useFormTabsPresenter({ children: [] }));

    expect(result.current.selectedChildren).toBeUndefined();
  });

  it('should be able to load first tab by default', () => {
    const { result } = renderHook(() =>
      useFormTabsPresenter({ children: ['tab1', 'tab2'] })
    );

    expect(result.current.selectedChildrenIndex).toBe(0);
    expect(result.current.selectedChildren).toEqual('tab1');
  });

  it('should be able to change tabs', async () => {
    const { result } = renderHook(() =>
      useFormTabsPresenter({ children: ['tab1', 'tab2'] })
    );

    expect(result.current.selectedChildrenIndex).toBe(0);
    expect(result.current.selectedChildren).toEqual('tab1');

    act(() => {
      result.current.onChange(1);
    });

    await waitFor(() => {
      expect(result.current.selectedChildrenIndex).toBe(1);
      expect(result.current.selectedChildren).toEqual('tab2');
    });
  });
});
