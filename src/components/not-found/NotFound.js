import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import Button from '../button/Button';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const { currUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className={styles['notFound-container']}>
      <h1 className={styles['notFound-header']}>Sayfa Bulunamadı</h1>
      <img src={require('../../assets/images/not_found.png')} width={'500px'} />
      <p className={styles['notFound-content']}>
        Sayfa kaldırılmış veya değiştirilmiş olabilir.
      </p>
      <div>
        <Button
          type="button"
          content={currUser ? 'Başvurular' : 'Başvurularım'}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default NotFound;
