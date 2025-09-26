import { PropsWithChildren } from 'react';
import { useAuthMiddlewarePresenter } from './useAuthMiddlewarePresenter';
import { LoadingScreen } from '../../components/LoadingScreen';

export function AuthMiddleware({ children }: PropsWithChildren) {
  const { isLoading } = useAuthMiddlewarePresenter();

  if (isLoading) return <LoadingScreen />;

  return children;
}
