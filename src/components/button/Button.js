import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ disabled = false, content, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={styles.btn}
      style={
        props.type === 'reset'
          ? {
              backgroundColor: '#E6E6E6',
              color: '#6B63FF',
            }
          : {}
      }
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
