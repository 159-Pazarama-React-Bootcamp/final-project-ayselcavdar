import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import CreateApplication from '../pages/create-application';
import SuccessfullApplication from '../pages/applications';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateApplication />} />
        <Route path="basvuru-basarili" element={<SuccessfullApplication />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
