import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks.ts';
import { checkAuth } from '@/features/Login/model/slice.ts';
import { getAccessToken } from '@/shared/token.helper.ts';

function RootLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      dispatch(checkAuth());
    } else {
      dispatch({ type: 'auth/checkAuth/rejected' });
    }
  }, []);

  return <Outlet />;
}

export default RootLayout;
