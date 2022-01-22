import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './CreateAppForm.module.css';
import FormInput from '../form-input/FormInput';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useState } from 'react';
import { imgHandler, removeImg } from '../../helper/imgUpload';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const CreateAppForm = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    tcNum: '',
    reason: '',
    address: '',
    photo: '',
  };

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
      .matches(
        /^[1-9][0-9]*$/,
        'Tc kimlik numarası yalnızca rakamlardan olusmalıdır ve sıfır ile baslayamaz.'
      )
      .min(11, 'Tc kimlik numarası 11 haneli olmalıdır')
      .max(11, 'Tc kimlik numarası 11 haneli olmalıdır')
      .required('Zorunlu alan'),
    reason: Yup.string()
      .trim()
      .min(20, '20 karakter veya daha üzeri olmalı')
      .max(255, '255 karater veya daha altı olmalı')
      .required('Zorunlu alan'),
    address: Yup.string()
      .trim()
      .min(20, '20 karakter veya daha üzeri olmalı')
      .max(255, '255 karater veya daha altı olmalı')
      .required('Zorunlu alan'),
  });

  // simulate api request for now
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = () => {
    navigate('/basvuru-basarili');
  };
  return (
    <div
      className={styles['application-container']}
      style={{ justifyContent: width < 1024 && 'center' }}
    >
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={async () => {
            await sleep(2500);
            handleSubmit();
          }}
        >
          {(formik) => (
            <div>
              <h1 style={{ textAlign: width < 1024 && 'center' }}>
                Basvuru Olustur
              </h1>
              <Form>
                <FormInput label="Ad" name="firstName" type="text" />
                <FormInput label="Soyad" name="lastName" type="text" />
                <FormInput label="Yaş" name="age" type="number" />
                <FormInput label="TC" name="tcNum" type="text" />
                <FormInput
                  label="Basvuru Nedeni"
                  name="reason"
                  type="textarea"
                />
                <FormInput label="Adress" name="address" type="textarea" />
                <div className={styles['main-file--container']}>
                  <div className={styles['file-input--container']}>
                    <FormInput
                      label="Fotograf Yükle"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => imgHandler(e, setProfileImg)}
                      className={styles['file-input']}
                    />
                  </div>
                  {profileImg && (
                    <div className={styles['uploaded-img--container']}>
                      <div
                        className={styles['remove-image']}
                        onClick={() => removeImg(setProfileImg)}
                      >
                        &#x2715;
                      </div>
                      <img
                        src={profileImg}
                        alt="uploaded_image"
                        width={'160px'}
                        height={'160px'}
                      />
                    </div>
                  )}
                </div>
                <div className={styles['btn-container']}>
                  <Button type="submit" content={'Gönder'} />
                  <Button
                    type="reset"
                    onClick={() => formik.resetForm({ values: '' })}
                    content={'Temizle'}
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div>
        <img
          src={require('../../assets/images/form1.png')}
          style={{ display: width < 1024 && 'none' }}
          width={width / 2}
        />
      </div>
    </div>
  );
};

export default CreateAppForm;
