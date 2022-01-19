import { useField, ErrorMessage } from 'formik';
import styles from './FormInput.module.css';
import PropTypes from 'prop-types';

export default function FormInput({ label, ...props }) {
  const { type } = props;
  const [field, meta] = useField(props);

  return (
    <div className={styles['form-container']}>
      <label className={styles['form-container--label']} htmlFor={field.name}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={`${styles['form-control']} ${
            meta.touched && meta.error && styles['is-invalid']
          } `}
          id={field.name}
          rows="4"
          cols="50"
          {...field}
          {...props}
        />
      ) : (
        <input
          className={`${styles['form-control']} ${
            meta.touched && meta.error && styles['is-invalid']
          }`}
          id={field.name}
          {...field}
          {...props}
          autoComplete="off"
        />
      )}
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
