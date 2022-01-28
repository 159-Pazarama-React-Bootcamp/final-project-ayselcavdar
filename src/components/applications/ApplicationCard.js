import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { statusEnum } from '../../constants/enum';
import { deleteApplication } from '../../redux/actions/crudActions';
import Button from '../button/Button';
import styles from './ApplicationCard.module.css';

const ApplicationCard = ({ app, to }) => {
  // admin authenticate kontrolü yapılması için currUser'a ulaşıyoruz
  const { currUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  
  const onDelete = (id) => {
    if (window?.confirm('Başvurunuzu silmek istediğinizden emin misiniz?')) {
      dispatch(deleteApplication(id));
    }
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-content']}>
        {!currUser && (
          <span
            className={styles['delete-btn']}
            onClick={() => onDelete(app?.id)}
          >
            &#10007;
          </span>
        )}
        <div>
          <p className={styles['card-title']}>
            <span>{app?.id}</span> numaralı başvurunuz
          </p>
        </div>
        <div className={styles['card-body']}>
          <ul>
            <li>
              <span>Başvuru nedeni:</span>
              {app.reason}
            </li>
            <li>
              <span>Başvuru durumu:</span> {statusEnum[app.status].descr}
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
