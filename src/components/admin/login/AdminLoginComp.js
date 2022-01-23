import styles from './AdminLoginComp.module.css';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../button/Button';
import FormInput from '../../form-input/FormInput';

const AdminLoginComp = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validate = Yup.object({
    username: Yup.string()
      .trim()
      .min(2, 'Cok kisa')
      .max(50, '50 karakter veya daha az olmalı')
      .required('Zorunlu alan'),
    password: Yup.string()
      .trim()
      .min(8, 'Şifre en az 8 karakterden oluşmalı.')
      .matches(/\d+/, 'Şifreniz en az 1 rakam içermelidir.')
      .matches(/[a-z]+/, 'Şifreniz küçük harf içermelidir')
      .test('password', 'Password is an invalid', (value) => !/\s+/.test(value))
      .required('Zorunlu alan'),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref('password'), null], 'Password must match')
  });

  // simulate api request for now
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = () => navigate('/admin/basvuru-listesi');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async () => {
        await sleep(2500);
        handleSubmit();
      }}
    >
      {() => (
        <div className={styles['admin-login-container']}>
          <div>
            <h1>Adminastration</h1>
            <Form>
              <FormInput label="Kullanıcı Adı" name="username" type="text" />
              <FormInput label="Şifre" name="password" type="password" />
              <FormInput
                label="Şifrenizi Onaylayın"
                name="confirmPassword"
                type="password"
              />
              <Button type="submit" content={'Giriş'} />
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AdminLoginComp;
