import {  useState } from 'react';
import styles from './AppDetails.module.css';
import Button from '../button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentBox from '../comment/CommentBox';
import { editApplication } from '../../redux/actions/crudActions';
import { useDispatch, useSelector } from 'react-redux';
import { n, statusEnum } from '../../constants/enum';

const AppDetails = ({ isAdmin }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { basvuruNo } = useParams();
  const { applications } = useSelector((state) => state?.data);
  const details = applications?.find((item) => item.id == basvuruNo);

  const handleComment = (e) => setComment(e.target.value);

  const submitCommentLine = () => {
    const data = {
      ...details,
      hasResponse:true,
      responseText:comment,
      status: statusEnum.ANSWERED.name,
    };
    if(comment.length > 3){
        dispatch(editApplication(data));
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
            {details?.id.slice(-n).toLowerCase()} numaralı başvuru bilgileriniz.
          </h3>
          <div>
            <ul className={styles['detail-items']}>
              <li>
                <span style={{ fontWeight: '500', fontSize: '1.2rem' }}>
                  Ad-Soyad:
                </span>{' '}
                {details?.firstName} {details?.lastName}
              </li>
              <li>
                <span className={styles['detail-item--label']}>TC Num:</span>{' '}
                {details?.tcNum}
              </li>
              <li>
                <span className={styles['detail-item--label']}>Yaş:</span>{' '}
                {details?.age}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru nedeni:
                </span>{' '}
                {details?.reason}
              </li>
              <li>
                <span className={styles['detail-item--label']}>Address:</span>{' '}
                {details?.address}
              </li>
              <li>
                <span className={styles['detail-item--label']}>
                  Başvuru Durumu:
                </span>{' '}
                {statusEnum[details?.status].descr}.
              </li>
              {isAdmin && !details?.hasResponse && (
                <CommentBox
                  comment={comment}
                  handleComment={handleComment}
                  submitCommentLine={submitCommentLine}
                />
              )}
              {details?.responseText && (
                <li>
                  <span className={styles['detail-item--label']}>
                    Cevap:
                  </span>{' '}
                  {details?.responseText}.
                </li>
              )}
            </ul>
          </div>
          <Button
            type="button"
            content={isAdmin ? 'Başvurular' : 'Başvurularım'}
            onClick={() => navigate(-1)}
          />
        </div>
        <div>
          {details?.photo ? (
            <img
              className={styles['avatar']}
              src={details?.photo}
              alt={`photo of ${details?.name}`}
            />
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
  isAdmin: PropTypes.bool,
};
