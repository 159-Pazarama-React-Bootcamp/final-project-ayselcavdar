import './App.css';
import AppRouter from './router/Router';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/actions/loginActions';
import { getApplications } from './redux/actions/crudActions';
import { auth } from './firebase.config';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
   onAuthStateChanged(auth, (user) => dispatch(setUser(user)));
    dispatch(getApplications());
  }, [dispatch]);
  
  return (
    <main>
      <AppRouter />
    </main>
  );
}

export default App;
