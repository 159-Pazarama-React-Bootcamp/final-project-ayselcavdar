import React, { useEffect } from 'react';
import styles from './AdminLoginComp.module.css';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../button/Button';
import FormInput from '../../form-input/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginInitiate } from '../../../redux/actions/loginActions';
import Alert from '../../alert/Alert';

const AdminLoginComp = () => {
  const navigate = useNavigate();
  const { currUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = Yup.object({
    email: Yup.string()
      .trim()
      .email('Lütfen geçerli e-posta giriniz.')
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
      .oneOf([Yup.ref('password'), null], 'Şifreniz eşleşemedi.')
      .required('Zorunlu alan')
  });

  useEffect(() => {
    if (!currUser) return;
    navigate('/admin/basvuru-listesi');
  }, [currUser, navigate]);

  const handleSubmit = (values) =>
    dispatch(loginInitiate(values.email, values.password));

  return (
    <>
      {error && <Alert error title="Hata lütfen tekrar deneyiniz" body={error} />}
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({});
        }}
      >
        {() => (
          <div className={styles['admin-login-container']}>
            <div>
              <h1>Adminastration</h1>
              <Form>
                <FormInput label="E-posta" name="email" type="email" />
                <FormInput label="Şifre" name="password" type="password" />
                <FormInput
                  label="Şifrenizi Onaylayın"
                  name="confirmPassword"
                  type="password"
                />
                <Button type="submit" content={'Giriş'} disabled={loading} />
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default AdminLoginComp;
