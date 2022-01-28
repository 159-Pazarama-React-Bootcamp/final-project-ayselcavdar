import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const signin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export { signin, logout, auth };
