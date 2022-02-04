import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { currUser } = useSelector((state) => state.user);
  // burada admin olmayan kullancılara özel route belirlendi
  return !currUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
