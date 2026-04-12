import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FieldType } from '@/features/Login/model/types.ts';
import { useAppDispatch } from '@/shared/hooks.ts';
import { loginUser } from '@/features/Login/model/slice.ts';
import s from '@/features/Login/Login.module.scss';
import {
  EyeInvisibleOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Link} from "react-router";
import { ROUTES } from '@/shared/routes.ts';

function Login() {
  const dispatch = useAppDispatch();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    dispatch(loginUser(values));
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img alt="logo" src="/login-logo.png" />
        <h1 className={s.title}>Добро пожаловать!</h1>
        <p className={s.subtitle}>Пожалуйста, авторизируйтесь</p>
        <Form
          className={s.form}
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            className={s.field}
            label="Логин"
            name="username"
            layout='vertical'
            rules={[{ required: true, message: 'Введите свой логин!' }]}
          >
            <Input
              className={s.input}
              prefix={<UserOutlined className={s.prefixIcon} />}
              allowClear
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            layout='vertical'
            rules={[{ required: true, message: 'Введите пароль!' }]}
            className={s.field}
          >
            <Input.Password
              className={s.input}
              prefix={<LockOutlined className={s.prefixIcon} />}
              iconRender={(visible) =>
                visible ? (
                  <EyeInvisibleOutlined className={s.suffixIcon} />
                ) : (
                  <EyeInvisibleOutlined className={s.suffixIcon} />
                )
              }
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            label={null}
            className={s.remember}
          >
            <Checkbox className={s.checkbox}>Запомнить данные</Checkbox>
          </Form.Item>

          <Form.Item className={s.submitRow} label={null}>
            <Button className={s.submitBtn} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
          <div className={s.separator}>
            <span />
            <span>или</span>
            <span />
          </div>
          <div className={s.bottomText}>
            <span>Нет аккаунта?</span>
            <Link to={ROUTES.REGISTER}>Создать</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
