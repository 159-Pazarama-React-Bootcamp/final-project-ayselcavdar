import React from 'react';
import AppDetails from '../../../components/application-details/AppDetails';

const AdminApplicationDetail = () => {
      const details = {
        id: 0,
        queryCode: '000000',
        name: 'obi',
        surname: 'one',
        age: '19',
        tc: '12345678901',
        reason: 'sadasdasdasdsd',
        address: 'Apartment, street, floor city/State',
        date: '10.11.2021',
        imgUrl: '',
      };
  return <AppDetails details={details} to={'/admin/basvuru-listesi}'} isAdmin />;
};

export default AdminApplicationDetail;
