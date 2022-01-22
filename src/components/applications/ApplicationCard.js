import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({ app }) => {
  return (
    <div key={app.id} className={styles['card-container']}>
      {app?.imageUrl && (
        <div className={styles['image-container']}>
          <img src={app.imageUrl} alt={`${app.name}'s image`} />
        </div>
      )}
      <div className={styles['card-content']}>
        <div className={styles['card-title']}>
          <h3>{app.date}&apos;li başvuru</h3>
        </div>
        <div className={styles['card-body']}>
          <p>{app.reason}</p>
        </div>
      </div>
      <div className={styles['details']}>
        <Link to={`/basvurular/${app.queryCode}`}>
          <Button type="button" content="Detaylar" />
        </Link>
      </div>
    </div>
  );
};

export default ApplicationCard;

ApplicationCard.propTypes = {
  app: PropTypes.object.isRequired,
};
