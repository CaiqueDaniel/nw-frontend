import { PropsWithChildren, useMemo } from 'react';
import Keycloak from 'keycloak-js';

import { AuthMiddlewareContext } from './infra/middlewares/AuthMiddleware/AuthMiddlewareContext';
import { KeycloakAccessTokenManager } from './infra/services/KeycloakAccessTokenManager';
import { useGlobalAccessToken } from './infra/hooks/useGlobalAccessToken';
import { NavbarContext } from './infra/features/Navbar/NavbarContext';
import { useGlobalUserRoles } from './infra/hooks/useGlobalUserRoles';
import { JWTDecoderTokenDecoderService } from './infra/services/JWTDecoderTokenDecoderService';

export function SharedProviders({ children }: PropsWithChildren) {
  //const isDevEnv = import.meta.env.VITE_ENV === 'development';
  const tokenManager = useMemo(
    () =>
      new KeycloakAccessTokenManager(
        new Keycloak({
          url: import.meta.env.VITE_KC_SERVER,
          realm: import.meta.env.VITE_KC_REALM,
          clientId: import.meta.env.VITE_KC_CLIENT_ID,
        })
      ),
    []
  );

  const tokenDecoderService = useMemo(
    () => new JWTDecoderTokenDecoderService(),
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
