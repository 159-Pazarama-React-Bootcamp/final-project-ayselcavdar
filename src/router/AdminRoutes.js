import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = () => {
  const { currUser } = useSelector((state) => state.user);
  
  return currUser ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminRoutes;
