import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { SharedProviders } from './modules/shared/SharedProviders';
import { AuthMiddleware } from './modules/shared/infra/middlewares/AuthMiddleware/AuthMiddleware';
import { CharactersProviders } from './modules/characters/CharactersProviders';
import { CharactersHomePage } from './modules/characters/pages/CharactersHomePage';

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
      children: [
        {
          path: '',
          element: (
            <CharactersProviders>
              <CharactersHomePage />
            </CharactersProviders>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
