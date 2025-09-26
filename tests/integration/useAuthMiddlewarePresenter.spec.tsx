import { renderHook, waitFor } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Mocked } from 'vitest';
import { AccessTokenManager } from '~/modules/shared/application/AccessTokenManager';
import { TokenDecoderService } from '~/modules/shared/application/TokenDecoderService';
import { AuthMiddlewareContext } from '~/modules/shared/infra/middlewares/AuthMiddleware/AuthMiddlewareContext';
import { useAuthMiddlewarePresenter } from '~/modules/shared/infra/middlewares/AuthMiddleware/useAuthMiddlewarePresenter';

describe('useAuthMiddlewarePresenter tests', () => {
  let tokenManager: Mocked<AccessTokenManager>;
  let setGlobalAccessToken: Mocked<(token: string) => void>;
  let setGlobalUserRole: Mocked<(roles: string[]) => void>;
  let tokenDecoderService: Mocked<TokenDecoderService>;
  const options = {
    wrapper: AuthMiddlewareProvider,
  };

  beforeAll(() => {
    setGlobalAccessToken = vi.fn();
    setGlobalUserRole = vi.fn();
    tokenManager = {
      getToken: vi.fn(),
      revokeToken: vi.fn(),
    };
    tokenDecoderService = {
      decodeJWT: vi.fn(),
    };
  });

  beforeEach(() => {
    tokenDecoderService.decodeJWT.mockResolvedValue({});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be able to get access token', async () => {
    tokenManager.getToken.mockResolvedValueOnce('token');

    renderHook(() => useAuthMiddlewarePresenter(), options);

    await waitFor(() => {
      expect(setGlobalAccessToken).toHaveBeenCalledWith('token');
    });
  });

  it('should be able to get user role', async () => {
    tokenManager.getToken.mockResolvedValueOnce('token');
    tokenDecoderService.decodeJWT.mockResolvedValue({
      resource_access: {
        'payment-manager': {
          roles: ['customer'],
        },
        account: {
          roles: ['manage-account', 'manage-account-links', 'view-profile'],
        },
      },
    });

    renderHook(() => useAuthMiddlewarePresenter(), options);

    await waitFor(() => {
      expect(setGlobalUserRole).toHaveBeenCalledWith(['customer']);
    });
  });

  function AuthMiddlewareProvider({ children }: PropsWithChildren) {
    return (
      <AuthMiddlewareContext.Provider
        value={{
          setGlobalAccessToken,
          setGlobalUserRoles: setGlobalUserRole,
          tokenDecoderService,
          tokenManager,
        }}
      >
        {children}
      </AuthMiddlewareContext.Provider>
    );
  }
});
