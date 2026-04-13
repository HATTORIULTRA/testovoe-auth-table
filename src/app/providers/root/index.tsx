import { createBrowserRouter } from 'react-router';
import App from '@/app/App.tsx';
import { ROUTES } from '@/shared/routes.ts';
import RootLayout from '@/app/layouts/RootLayout.tsx';
import ProtectedLayout from '@/app/layouts/ProtectedLayout.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import PublicLayout from '@/app/layouts/PublicLayout.tsx';
import RegisterPage from '@/pages/RegisterPage.tsx';

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        Component: ProtectedLayout,
        children: [{ path: ROUTES.HOME, Component: App }],
      },
      {
        Component: PublicLayout,
        children: [
          {
            path: ROUTES.LOGIN,
            Component: LoginPage,
          },
          {
            path: ROUTES.REGISTER,
            Component: RegisterPage,
          },
        ],
      },
    ],
  },
]);
