import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { app } from '../firebase.config';

const auth = getAuth(app);

const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export { signin , logout, auth};