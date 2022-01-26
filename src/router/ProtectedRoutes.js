import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { currUser } = useSelector((state) => state.user);

  return !currUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
