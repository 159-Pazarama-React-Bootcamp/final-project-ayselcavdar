import {  useState } from 'react';
import styles from './AppDetails.module.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentBox from '../comment/CommentBox';

const AppDetails = ({ details, to = '/basvurular', isAdmin }) => {
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleComment = (e) => setComment(e.target.value);

  const submitCommentLine = () => {
    if(comment.length > 3){
        setIsSubmitted(true);
        setComment('');
    }
    return false;
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
                <span className={styles['detail-item--label']}>TC Num:</span>{' '}
                {details.tc}
              </li>
              <li>
                <span className={styles['detail-item--label']}>Yaş:</span>{' '}
                {details.age}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru nedeni:
                </span>{' '}
                {details.reason}
              </li>
              <li>
                <span className={styles['detail-item--label']}>Address:</span>{' '}
                {details.address}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru Durumu:
                </span>{' '}
                {isSubmitted ? 'cevaplandı' : 'değerlendiriliyor'}.
              </li>
              {isAdmin && !isSubmitted && (
                <CommentBox
                  comment={comment}
                  handleComment={handleComment}
                  submitCommentLine={submitCommentLine}
                />
              )}
            </ul>
          </div>
          <Button
            type="button"
            content={isAdmin ? 'Başvurular' : 'Başvurularım'}
            onClick={() => navigate(to)}
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

AppDetails.propTypes = {
  details: PropTypes.object.isRequired,
  to: PropTypes.string,
  isAdmin: PropTypes.bool,
};
