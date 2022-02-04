import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateApplication from '../pages/create-application';
import Applications from '../pages/applications';
import ApplicationDetail from '../pages/application-detail';
import NotFound from '../components/not-found/NotFound';
import ProtectedRoutes from './ProtectedRoutes';
import AdminLogin from '../pages/admin/login';
import ApplicationList from '../pages/admin/application-list';
import AdminApplicationDetail from '../pages/admin/application-detail';
import AdminRoutes from './AdminRoutes';

const AppRouter = () => {  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<CreateApplication />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="basvurularim/:tcNum" element={<Applications />} />
          <Route
            path="basvurularim/:tcNum/:basvuruNo"
            element={<ApplicationDetail />}
          />
        </Route>
        <Route path="admin" element={<AdminLogin />} />
        <Route element={<AdminRoutes />}>
          <Route path="admin/basvuru-listesi" element={<ApplicationList />} />
          <Route
            path="admin/basvuru-listesi/:basvuruNo"
            element={<AdminApplicationDetail />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
