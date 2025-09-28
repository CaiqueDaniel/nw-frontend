import { act, renderHook, waitFor } from '@testing-library/react';
import { useFormTabsPresenter } from '~/modules/shared/infra/features/FormTabs/useFormTabsPresenter';

describe('useCharacterFormPresenter', () => {
  it('should be able to load first tab by default', () => {
    const { result } = renderHook(() => useFormTabsPresenter());

    expect(result.current.selectedChildrenIndex).toBe(0);
  });

  it('should be able to change tabs', async () => {
    const { result } = renderHook(() => useFormTabsPresenter());

    expect(result.current.selectedChildrenIndex).toBe(0);

    act(() => {
      result.current.onChange(1);
    });

    await waitFor(() => {
      expect(result.current.selectedChildrenIndex).toBe(1);
    });
  });
});
