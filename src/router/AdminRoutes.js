import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = () => {
  // sistemimizde yalnızca bir tane yetkili kullanıcı olan adminin
  // authenticate olup olmadığına göre root belirlendi
  const { currUser } = useSelector((state) => state.user);
  
  return currUser ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminRoutes;
