import { Navigate, Outlet } from 'react-router';
import { ROUTES } from '@/shared/routes.ts';
import { useAppSelector } from '@/shared/hooks.ts';

function PublicLayout() {
  const { user, isAuthChecked } = useAppSelector((state) => state.auth);
  if (!isAuthChecked) return <div>Loading...</div>;

  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
}

export default PublicLayout;
