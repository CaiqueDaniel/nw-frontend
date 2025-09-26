import { useEffect, useState } from 'react';
import { useAuthMiddlewareContext } from './AuthMiddlewareContext';

export function useAuthMiddlewarePresenter() {
  const {
    tokenManager,
    setGlobalAccessToken,
    setGlobalUserRoles,
    tokenDecoderService,
  } = useAuthMiddlewareContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    tokenManager.getToken().then(async (token) => {
      const payload = await tokenDecoderService.decodeJWT(token);
      const roles = payload?.resource_access?.['payment-manager']?.roles ?? [];

      setGlobalAccessToken(token);
      setGlobalUserRoles(roles);
      setIsLoading(false);
    });
  }, []);

  return { isLoading };
}
