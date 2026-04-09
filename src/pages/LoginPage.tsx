import s from './LoginPage.module.scss';
import Login from '../features/Login';

function LoginPage() {
  return (
    <div className={s.wrapper}>
      <Login />
    </div>
  );
}

export default LoginPage;
