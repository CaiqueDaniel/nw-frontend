import { createContext } from 'react';
import { AccessTokenManager } from '~/modules/shared/core/application/AccessTokenManager';
import { useContextHandler } from '../../hooks/useContextHandler';
import { TokenDecoderService } from '~/modules/shared/core/application/TokenDecoderService';

export const AuthMiddlewareContext = createContext<Context | undefined>(
  undefined
);

export function useAuthMiddlewareContext() {
  return useContextHandler<Context>(AuthMiddlewareContext);
}

type Context = {
  tokenManager: AccessTokenManager;
  tokenDecoderService: TokenDecoderService;
  setGlobalAccessToken: (token: string) => void;
  setGlobalUserRoles: (roles: string[]) => void;
};
