import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteApplication } from '../../redux/actions/crudActions';
import Button from '../button/Button';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({ app, to = `/basvurular/${app?.id}` }) => {
  const n = 5;
  const dispatch = useDispatch();
  const onDelete = (id) => {
    if (window?.confirm('Başvurunuzu silmek istediğinizden emin misiniz?')) {
      dispatch(deleteApplication(id));
    }
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-content']}>
        <div onClick={() => onDelete(app?.id)}>X</div>
        <div>
          <p className={styles['card-title']}>
            <span>{app?.id?.slice(-n)?.toLowerCase()}</span> sorgu numaralı
            başvurunuz
          </p>
        </div>
        <div className={styles['card-body']}>
          <ul>
            <li>
              <span>Başvuru nedeni:</span>
              {app.reason}
            </li>
            <li>
              <span>Başvuru durumu:</span> {app.status}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['details']}>
        <Link to={to}>
          <Button type="button" content="Detaylar" />
        </Link>
      </div>
    </div>
  );
};

export default ApplicationCard;

ApplicationCard.propTypes = {
  app: PropTypes.object.isRequired,
  to: PropTypes.string,
};
