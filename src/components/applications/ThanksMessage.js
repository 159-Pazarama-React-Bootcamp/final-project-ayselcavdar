import styles from './Applications.module.css';
import PropTypes from 'prop-types';

const ThanksMessage = ({
  title = 'Teşekkürler! Başvurunuz başarıyla alınmıştır.',
  content,
}) => {
  return (
    <div className={styles['message-container']}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default ThanksMessage;

ThanksMessage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
