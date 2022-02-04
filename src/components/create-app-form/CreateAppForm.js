import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './CreateAppForm.module.css';
import FormInput from '../form-input/FormInput';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { imgHandler } from '../../helper/imgUpload';
import { useDispatch } from 'react-redux';
import { createApplication } from '../../redux/actions/crudActions';

const CreateAppForm = () => {
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tcRegx = /^[1-9]{1}[0-9]{9}[02468]{1}$/;

  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    tcNum: '',
    reason: '',
    address: '',
    photo: '',
    tc: '',
  };

  // Realtime database dosya boyutu limiti
  const FILE_SIZE = 1e7;

  const validate = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(2, 'Cok kisa')
      .max(50, '50 karakter veya daha az olmalı')
      .required('Zorunlu alan'),
    lastName: Yup.string()
      .trim()
      .min(2, 'Cok kisa')
      .max(50, '50 karakter veya daha az olmalı')
      .required('Zorunlu alan'),
    age: Yup.number()
      .min(18, '18 veya daha üzeri olmalı')
      .max(105, '105 veya daha altı olmalı')
      .required('Zorunlu alan'),
    tcNum: Yup.string()
      .trim()
      .matches(tcRegx, 'Tc kimlik numarası geçerli değil.')
      .required('Zorunlu alan'),
    reason: Yup.string()
      .trim()
      .min(10, '10 karakter veya daha üzeri olmalı')
      .max(255, '255 karater veya daha altı olmalı')
      .required('Zorunlu alan'),
    address: Yup.string()
      .trim()
      .min(10, '10 karakter veya daha üzeri olmalı')
      .max(255, '255 karater veya daha altı olmalı')
      .required('Zorunlu alan'),
    tc: Yup.string()
      .trim()
      .matches(tcRegx, 'Tc kimlik numarası geçerli değil.'),
    photo: Yup.mixed().required('Zorunlu alan'),
  });

  const handleSubmit = (values) => {
    dispatch(createApplication(values));
    navigate(`/basvurularim/${values.tcNum}`);
  };

  const showApplications = (values) => {
    tcRegx.test(values.tc) ? navigate(`/basvurularim/${values.tc}`) : false;
  };

  return (
    <div
      className={styles['application-container']}
      style={{
        justifyContent: width < 1024 && 'center',
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({});
        }}
        validate={(values) => {
          const errors = {};
          // kullanıcının yüklediği fotoğraf boyutu kontrol ediliyor.
          if (values?.photo) {
            const base64str = values?.photo?.split('base64,')[1];
            const decoded = atob(base64str);
            if (decoded?.length > FILE_SIZE) {
              errors.photo =
                'Fotoğraf boyutunuz çok büyük 9MB altı yüklemeyi deneyin.';
              return errors;
            }
          }
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <div>
            <p className={styles['already-have']}>
              Mevcut başvurularımı görüntülemek istiyorum.
            </p>
            <div className={styles['query-container']}>
              <FormInput
                name="tc"
                placeholder="Tc kimlik numaranızı giriniz"
                type="text"
                label={''}
                customClass={styles['custom-input']}
              />
              <Button
                type="button"
                content={'Görüntüle'}
                onClick={() => showApplications(values)}
              />
            </div>
            <hr />
            <h1
              style={{
                textAlign: width < 1024 && 'center',
                color: 'rgb(107, 99, 255)',
                marginTop: '0px',
              }}
            >
              Basvuru Olustur
            </h1>
            <Form>
              <FormInput label="Ad" name="firstName" type="text" />
              <FormInput label="Soyad" name="lastName" type="text" />
              <FormInput label="Yaş" name="age" type="number" />
              <FormInput label="TC" name="tcNum" type="text" />
              <FormInput label="Basvuru Nedeni" name="reason" type="textarea" />
              <FormInput label="Adress" name="address" type="textarea" />
              <div className={styles['main-file--container']}>
                <div className={styles['file-input--container']}>
                  <label style={{ marginBottom: '1rem' }}>Fotoğraf</label>
                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => imgHandler(e, 'photo', setFieldValue)}
                  />
                  {errors.photo && touched.photo && (
                    <ErrorMessage
                      component="div"
                      name={'photo'}
                      className={styles.error}
                    />
                  )}
                </div>
                {values?.photo && (
                  <div className={styles['uploaded-img--container']}>
                    <img
                      src={values?.photo}
                      alt="uploaded_image"
                      width={'160px'}
                      height={'160px'}
                    />
                  </div>
                )}
              </div>
              <div className={styles['btn-container']}>
                <Button type="submit" content={'Gönder'} />
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <div>
        <img
          src={require('../../assets/images/form1.png')}
          style={{ display: width < 1024 && 'none', borderRadius: '1rem' }}
          width={width / 2}
        />
      </div>
    </div>
  );
};

export default CreateAppForm;
