import { useNavigate, useLocation } from 'react-router-dom';
import { RouteNavigator } from '../../application/RouteNavigator';

export function useReactRouterRouteNavigator(): RouteNavigator {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    navigateTo: (path: string) => {
      navigate(path);
    },
    getCurrentPath() {
      return location.pathname;
    },
  };
}
