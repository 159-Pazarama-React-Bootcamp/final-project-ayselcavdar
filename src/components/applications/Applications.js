import { useState } from 'react';
import styles from './Applications.module.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import ApplicationCard from './ApplicationCard';
import ThanksMessage from './ThanksMessage';

const Applications = () => {
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
    
   
  ]);
  const [userQueryCode, setUserQueryCode] = useState('');
  const handleQueryCodeChange = (e) => setUserQueryCode(e.target.value);

  return (
    <div className={styles['applications-main--container']}>
      <div className={styles['header-container']}>
        <ThanksMessage />
        <div className={styles['subheader-section']}>
          <div>
            <input
              type="text"
              id="queryCode"
              maxLength="10"
              value={userQueryCode}
              onChange={handleQueryCodeChange}
              placeholder="Başvuru kodunuzu giriniz.."
              className={styles['query-input']}
            />
          </div>
          <div className={styles['btn-container']}>
            <Link to={`/basvurular/${userQueryCode}`}>
              <Button type="button" content={'Sorgula'} />
            </Link>
            <div className={styles['new-app-btn']}>
              <Link to={'/'}>
                <Button type="reset" content={'Yeni Basvuru Oluştur'}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles['appList-container']}>
          {applications
            .filter((item) => item.queryCode.includes(userQueryCode))
            .map((app) => (
              <ApplicationCard app={app} key={app.id} title="card title" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
