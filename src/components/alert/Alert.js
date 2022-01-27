import styles from './Alert.module.css';
import PropTypes from 'prop-types';

const Alert = ({ info, error, title, body }) => {
  return (
    <div
      className={`${styles["alert-container"]} ${
        info ? styles["alert-info"] : ""
      } ${error ? styles["alert-error"] : ""}`}
    >
      {title && (
        <div className={styles["title-container"]}>
          <h3 className={styles["title-text"]}>{title}</h3>
        </div>
      )}
      <div className={styles["body-container"]}>
        <p className={styles["body-text"]}>{body}</p>
      </div>
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  info: PropTypes.bool,
  error: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
};
