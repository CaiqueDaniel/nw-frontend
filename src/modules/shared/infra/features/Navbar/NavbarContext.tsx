import { createContext } from 'react';
import { AccessTokenManager } from '~/modules/shared/core/application/AccessTokenManager';
import { useContextHandler } from '../../hooks/useContextHandler';

export const NavbarContext = createContext<Context | undefined>(undefined);

export function useNavbarContext() {
  return useContextHandler(NavbarContext);
}

type Context = {
  tokenManager: AccessTokenManager;
};
