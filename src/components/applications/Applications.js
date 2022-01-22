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
    {
      id: 3,
      queryCode: '333333',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 4,
      queryCode: '44444',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
    {
      id: 5,
      queryCode: '555555',
      name: 'obi',
      reason: 'sadasdasdasdsd',
      date: '10.11.2021',
    },
  ]);
  const [userQueryCode, setUserQueryCode] = useState('');
  const handleQueryCodeChange = (e) => setUserQueryCode(e.target.value);

  return (
    <>
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
          <div>
            <Link to={`/basvurular/${userQueryCode}`}>
              <Button type="button" content={'Sorgula'} />
            </Link>
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
    </>
  );
};

export default Applications;
