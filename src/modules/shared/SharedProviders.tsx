import { PropsWithChildren, useMemo } from 'react';

import { AuthMiddlewareContext } from './infra/middlewares/AuthMiddleware/AuthMiddlewareContext';
import { useGlobalAccessToken } from './infra/hooks/useGlobalAccessToken';
import { NavbarContext } from './infra/features/Navbar/NavbarContext';
import { useGlobalUserRoles } from './infra/hooks/useGlobalUserRoles';
import { MemoryAccessTokenManager } from './infra/services/MemoryAccessTokenManager';
import { MemoryJWTDecoderTokenService } from './infra/services/MemoryJWTDecoderTokenService';

export function SharedProviders({ children }: PropsWithChildren) {
  const tokenManager = useMemo(() => new MemoryAccessTokenManager(), []);
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
