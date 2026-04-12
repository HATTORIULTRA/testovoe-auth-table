import { Navigate, Outlet } from 'react-router';
import { ROUTES } from '@/shared/routes.ts';
import { useAppSelector } from '@/shared/hooks.ts';
import { getAccessToken } from '@/shared/token.helper.ts';

function ProtectedLayout() {
  const { user, isAuthChecked } = useAppSelector((state) => state.auth);
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}

export default ProtectedLayout;
