import { useState } from 'react/cjs/react.development';
import styles from './ApplicationListComp.module.css';
import ApplicationCard from '../../applications/ApplicationCard';
import Button from '../../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../../redux/actions/logoutActions';


const ApplicationListComp = () => {
  const [applications] = useState([
    {
      id: 0,
      queryCode: '000000',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 1,
      queryCode: '111111',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 2,
      queryCode: '222222',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 3,
      queryCode: '111111',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 4,
      queryCode: '222222',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 5,
      queryCode: '111111',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 6,
      queryCode: '222222',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
  ]);
  const [applicationCode, setApplicationCode] = useState('');
  const { currUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleFilterByAppCode = (e) => setApplicationCode(e.target.value);

  const handleLogout = () => {
    currUser && dispatch(logoutInitiate());
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
        {applications
          .filter((item) => item.queryCode.includes(applicationCode))
          ?.map((item) => (
            <ApplicationCard
              key={item.id}
              app={item}
              to={`/admin/basvuru-listesi/${item.queryCode}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ApplicationListComp;
