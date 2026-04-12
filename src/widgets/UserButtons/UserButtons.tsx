import { useAppDispatch, useAppSelector } from '@/shared/hooks.ts';
import s from '@/widgets/UserButtons/UserButtons.module.scss';
import { Button } from 'antd';
import { logout } from '@/features/Login/model/slice.ts';

function UserButtons() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrapper}>
      <h2>{user?.username}</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default UserButtons;
