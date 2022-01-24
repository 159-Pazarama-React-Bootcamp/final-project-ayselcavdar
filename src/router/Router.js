import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateApplication from '../pages/create-application';
import SuccessfullApplication from '../pages/applications';
import ApplicationDetail from '../pages/application-detail';
import NotFound from '../components/not-found/NotFound';
import ProtectedRoutes from './ProtectedRoutes';
import AdminLogin from '../pages/admin/login';
import ApplicationList from '../pages/admin/application-list';
import AdminApplicationDetail from '../pages/admin/application-detail';


const AppRouter = () => {
  const isAdmin = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateApplication />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="basvurular" element={<SuccessfullApplication />} />
          <Route path="basvurular/:basvuruNo" element={<ApplicationDetail />} />
        </Route>
        {isAdmin && (
          <>
            <Route path="admin" element={<AdminLogin />} />
            <Route path="admin/basvuru-listesi" element={<ApplicationList />} />
            <Route path="admin/basvuru-listesi/:basvuruNo" element={<AdminApplicationDetail />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
