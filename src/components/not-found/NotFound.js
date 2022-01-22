import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import Button from '../button/Button';

const NotFound = () => {
  return (
    <div className={styles['notFound-container']}>
      <h1 className={styles['notFound-header']}>Sayfa Bulunamadı</h1>
      <img src={require('../../assets/images/not_found.png')} width={'500px'} />
      <p className={styles['notFound-content']}>
        Sayfa kaldırılmış veya değiştirilmiş olabilir.
      </p>
      <Link to="/basvuru-basarili">
        <Button type="button" content={'Başvurularım'} />
      </Link>
    </div>
  );
};

export default NotFound;
