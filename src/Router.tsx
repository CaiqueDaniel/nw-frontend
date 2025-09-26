import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ProductListPage } from './modules/products/pages/ProductListPage';
import { ProductProviders } from './modules/products/ProductProviders';
import { SharedProviders } from './modules/shared/SharedProviders';
import { AuthMiddleware } from './modules/shared/infra/middlewares/AuthMiddleware/AuthMiddleware';

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
            <ProductProviders>
              <ProductListPage />
            </ProductProviders>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
