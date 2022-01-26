import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

const Dropdown = ({
  label,
  value,
  data,
  customClass,
  name,
  onChange,
  ...rest
}) => {
  return (
    <div className={`${styles['form-group--select']} ${customClass}`}>
      <select
        name={name}
        value={value}
        className="form-control"
        onChange={onChange}
        {...rest}
      >
        <option value="">{label}</option>
        {data.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  customClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  label: '',
  value: '',
  customClass: '',
  placeholder: '',
};

export default Dropdown;
