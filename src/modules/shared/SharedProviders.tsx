import { PropsWithChildren, useMemo } from 'react';

import { AuthMiddlewareContext } from './infra/middlewares/AuthMiddleware/AuthMiddlewareContext';
import { useGlobalAccessToken } from './infra/hooks/useGlobalAccessToken';
import { NavbarContext } from './infra/features/Navbar/NavbarContext';
import { useGlobalUserRoles } from './infra/hooks/useGlobalUserRoles';
import { MemoryJWTDecoderTokenService } from './infra/services/MemoryJWTDecoderTokenService';
import { BrowserAccessTokenManager } from './infra/services/BrowserAccessTokenManager';

export function SharedProviders({ children }: PropsWithChildren) {
  const tokenManager = useMemo(() => new BrowserAccessTokenManager(), []);
  const tokenDecoderService = useMemo(
    () => new MemoryJWTDecoderTokenService(),
    []
  );

  return (
    <AuthMiddlewareContext.Provider
      value={{
        tokenManager,
        setGlobalAccessToken: useGlobalAccessToken(),
        setGlobalUserRoles: useGlobalUserRoles(),
        tokenDecoderService,
      }}
    >
      <NavbarContext.Provider value={{ tokenManager }}>
        {children}
      </NavbarContext.Provider>
    </AuthMiddlewareContext.Provider>
  );
}
