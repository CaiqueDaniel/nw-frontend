import { renderHook } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Mocked } from 'vitest';
import { AccessTokenManager } from '~/modules/shared/core/application/AccessTokenManager';
import { NavbarContext } from '~/modules/shared/infra/features/Navbar/NavbarContext';
import { useNavbarPresenter } from '~/modules/shared/infra/features/Navbar/useNavbarPresenter';

describe('useNavbarPresenter integration tests', () => {
  let tokenManager: Mocked<AccessTokenManager>;
  const options = {
    wrapper: NavbarProvider,
  };

  beforeAll(() => {
    tokenManager = { getToken: vi.fn(), revokeToken: vi.fn() };
  });

  it('should be able to logout', async () => {
    const { result } = renderHook(() => useNavbarPresenter(), options);
    await result.current.onClickBtnLogout();

    expect(tokenManager.revokeToken).toHaveBeenCalled();
  });

  function NavbarProvider({ children }: PropsWithChildren) {
    return (
      <NavbarContext.Provider value={{ tokenManager }}>
        {children}
      </NavbarContext.Provider>
    );
  }
});
