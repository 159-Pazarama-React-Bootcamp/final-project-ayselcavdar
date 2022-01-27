import { useState } from 'react';
import styles from './Applications.module.css';
import { Link, useParams } from 'react-router-dom';
import Button from '../button/Button';
import ApplicationCard from './ApplicationCard';
import ThanksMessage from './ThanksMessage';
import { useSelector } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
import { options } from '../../constants/enum';
import Loader from '../loader/Loader';
import Alert from '../alert/Alert';

const Applications = () => {
  const [values, setValues] = useState({
    queryCode: '',
    filterVal: '',
  });
  const { applications, error, loading } = useSelector((state) => state.data);
  const { tcNum } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const userSpecifApps = applications?.filter((item) => item.tcNum === tcNum);
  const applicationList = userSpecifApps
    ?.filter((item) => {
      if (values.filterVal !== '' && item.status !== values.filterVal)
        return false;
      if (!item.id.toLowerCase().includes(values.queryCode.toLowerCase()))
        return false;
      return true;
    })
    .map((app) => <ApplicationCard app={app} key={app.id} to={`${app.id}`} />);

  return (
    <div className={styles['applications-main--container']}>
      <div className={styles['header-container']}>
        <ThanksMessage
          title={'Teşekkürler! Başvurunuz başarıyla alınmıştır.'}
          content={'Başvuru durumunuzu detaya tıklayarak öğrenebilirsiniz.'}
        />
        <div className={styles['subheader-section']}>
          <div>
            <input
              type="text"
              id="queryCode"
              name="queryCode"
              maxLength="10"
              value={values.queryCode}
              onChange={handleChange}
              placeholder="Başvuru kodunuz ile filtreleyiniz.."
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
            <div className={styles['animation-container']}>
              <Loader />
            </div>
          ) : applicationList.length === 0 && !error ? (
            <Alert
              title="Bilgilendirme"
              info
              body={'Herhangi bir başvuru bulunamadı.'}
            />
          ) : error ? (
            <Alert title="Hata" error body={`${error}`} />
          ) : (
            applicationList
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;
