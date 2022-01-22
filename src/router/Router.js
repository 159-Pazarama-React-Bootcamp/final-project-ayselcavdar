import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import CreateApplication from '../pages/create-application';
import SuccessfullApplication from '../pages/applications';
import ApplicationDetail from '../pages/application-detail';
import NotFound from '../components/not-found/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateApplication />} />
        <Route path="basvurular" element={<SuccessfullApplication />} />
        <Route path="basvurular/:id" element={<ApplicationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
