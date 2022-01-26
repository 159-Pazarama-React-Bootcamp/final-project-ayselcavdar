import { useState } from 'react/cjs/react.development';
import styles from './ApplicationListComp.module.css';
import ApplicationCard from '../../applications/ApplicationCard';
import Button from '../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../../redux/actions/logoutActions';


const ApplicationListComp = () => {
  const [applicationCode, setApplicationCode] = useState('');
  const {user, data} = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleFilterByAppCode = (e) => setApplicationCode(e.target.value);
  const n = 5;

  const handleLogout = () => {
    user.currUser && dispatch(logoutInitiate());
  };

  return (
    <div className={styles['main-container']}>
      <div className={styles['header-container']}>
        <div className={styles['title-admin']}>
          <h2>Cevap bekleyen başvurular</h2>
          <Button onClick={handleLogout} type="reset" content={'çıkış'} />
        </div>
        <div>
          <input
            type={'text'}
            placeholder="Başvuru kodu ile filtreleyiniz."
            value={applicationCode}
            onChange={handleFilterByAppCode}
            className={styles['filter-input--admin']}
          />
        </div>
      </div>
      <div className={styles['card-container']}>
        {data?.applications?.filter((item) => 
          item?.id?.toLowerCase().slice(-n).includes(applicationCode))
          ?.map((item) => (
            <ApplicationCard
              key={item.id}
              app={item}
              to={`/admin/basvuru-listesi/${item.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ApplicationListComp;
