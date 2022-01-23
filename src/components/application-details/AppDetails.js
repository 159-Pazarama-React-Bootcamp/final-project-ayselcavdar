import styles from './AppDetails.module.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const AppDetails = () => {
  const details = {
    id: 0,
    queryCode: '000000',
    name: 'obi',
    surname: 'one',
    age: '19',
    tc: '12345678901',
    reason: 'sadasdasdasdsd',
    address: 'Apartment, street, floor city/State',
    date: '10.11.2021',
    imgUrl: '',
  };

  const navigate = useNavigate();
  
  return (
    <div className={styles['details-container']}>
      <div className={styles['subdetails-container']}>
        <div>
          <h3 className={styles['detail-title']}>
            {details.date} tarihli başvuru bilgileriniz
          </h3>
          <div>
            <ul className={styles['detail-items']}>
              <li>
                <span style={{ fontWeight: '500', fontSize: '1.2rem' }}>
                  Ad-Soyad:
                </span>{' '}
                {details.name} {details.surname}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  TC Num:
                </span>{' '}
                {details.tc}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Yaş:
                </span>{' '}
                {details.age}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru nedeni:
                </span>{' '}
                {details.reason}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Address:
                </span>{' '}
                {details.address}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru Durumu:
                </span>{' '}
                değerlendiriliyor.
              </li>
            </ul>
          </div>
          <Button
            type="button"
            content={'Başvurularım'}
            onClick={() => navigate('/basvurular')}
          />
        </div>
        <div>
          {details.imgUrl ? (
            <img className={styles['avatar']} src={details.imgUrl} />
          ) : (
            <img
              className={styles['avatar']}
              src="https://www.w3schools.com/howto/img_avatar2.png"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
