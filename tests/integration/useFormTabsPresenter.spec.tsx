import { act, renderHook, waitFor } from '@testing-library/react';
import { useFormTabsPresenter } from '~/modules/shared/infra/features/FormTabs/useFormTabsPresenter';

describe('useCharacterFormPresenter', () => {
  it('should be able to load first tab by default', () => {
    const { result } = renderHook(() => useFormTabsPresenter({}));

    expect(result.current.selectedChildrenIndex).toBe(0);
  });

  it('should be able to change tabs', async () => {
    const { result } = renderHook(() => useFormTabsPresenter({}));

    expect(result.current.selectedChildrenIndex).toBe(0);

    act(() => {
      result.current.onChange(1);
    });

    await waitFor(() => {
      expect(result.current.selectedChildrenIndex).toBe(1);
    });
  });

  it('should be able load with a given tab index', async () => {
    const { result } = renderHook(() => useFormTabsPresenter({ tabIndex: 1 }));

    expect(result.current.selectedChildrenIndex).toBe(1);
  });

  it('should be able call lambda on tab change', async () => {
    const callback = vi.fn();
    const { result } = renderHook(() =>
      useFormTabsPresenter({ onTabChange: callback })
    );

    expect(result.current.selectedChildrenIndex).toBe(0);
    expect(callback).not.toHaveBeenCalled();

    act(() => result.current.onChange(1));
    await waitFor(() => expect(callback).toHaveBeenCalled());

    act(() => result.current.onChange(0));
    await waitFor(() => expect(callback).toHaveBeenCalled());
  });
});
