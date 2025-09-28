import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { SharedProviders } from './modules/shared/SharedProviders';
import { AuthMiddleware } from './modules/shared/infra/middlewares/AuthMiddleware/AuthMiddleware';
import { CharactersRouter } from './modules/characters/CharactersRouter';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '',
      element: (
        <SharedProviders>
          <AuthMiddleware>
            <Outlet />
          </AuthMiddleware>
        </SharedProviders>
      ),
      children: [...CharactersRouter],
    },
  ]);

  return <RouterProvider router={router} />;
}
