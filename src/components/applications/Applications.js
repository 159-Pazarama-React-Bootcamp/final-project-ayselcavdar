import { useEffect, useState } from 'react';
import styles from './Applications.module.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import ApplicationCard from './ApplicationCard';
import ThanksMessage from './ThanksMessage';
import { useSelector, useDispatch } from 'react-redux';
import { getApplications } from '../../redux/actions/crudActions';
import Dropdown from '../dropdown/Dropdown';

const n = 5;
const options = ['EVALUATING', 'ANSWERED'];
const Applications = () => {
  const [values, setValues] = useState({
    queryCode: '',
    filterVal: '',
  });
  const { applications, error, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const applicationList = applications
    .filter((item) => {
      if (values.filterVal !== '' && item.status !== values.filterVal) return false;
      if (!item.id.toLowerCase().slice(-n).includes(values.queryCode))
        return false;
      return true;
    })
    .map((app) => <ApplicationCard app={app} key={app.id} />);

  return (
    <div className={styles['applications-main--container']}>
      <div className={styles['header-container']}>
        <ThanksMessage />
        <div className={styles['subheader-section']}>
          <div>
            <input
              type="text"
              id="queryCode"
              name="queryCode"
              maxLength="10"
              value={values.queryCode}
              onChange={handleChange}
              placeholder="Başvuru kodunuzu giriniz.."
              className={styles['query-input']}
            />
            <Dropdown
              label="Başvuru durumuna göre filtereleyiniz"
              name="filterVal"
              data={options}
              onChange={handleChange}
              value={values.filterVal}
            />
          </div>
          <div className={styles['btn-container']}>
            <Link to={`/basvurular/${values.queryCode}`}>
              <Button type="button" content={'Sorgula'} />
            </Link>
            <div className={styles['new-app-btn']}>
              <Link to={'/'}>
                <Button type="reset" content={'Yeni Basvuru Oluştur'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles['appList-container']}>
          {loading ? (
            <p>Loading...</p>
          ) : applications.length === 0 && !error ? (
            <p>Nothing found..</p>
          ) : error ? (
            <p style={{ color: 'red' }}>error</p>
          ) : (
            applicationList
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;
