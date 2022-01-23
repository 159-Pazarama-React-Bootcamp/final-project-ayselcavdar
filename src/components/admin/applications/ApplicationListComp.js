import { useState } from 'react/cjs/react.development';
import styles from './ApplicationListComp.module.css';
import ApplicationCard from '../../applications/ApplicationCard';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';

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
  ]);
  const [applicationCode, setApplicationCode] = useState('');

  const handleFilterByAppCode = (e) => setApplicationCode(e.target.value);

  return (
    <div className={styles['main-container']}>
      <div className={styles['header-container']}>
        <div className={styles['title-admin']}>
          <h2>
            Cevap bekleyen başvurular
          </h2>
          <Link to="/admin">
            <Button type="reset" content={'çıkış'} /> 
          </Link>
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
              key={item}
              app={item}
              to={`/admin/basvuru-listesi/${item.queryCode}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ApplicationListComp;
