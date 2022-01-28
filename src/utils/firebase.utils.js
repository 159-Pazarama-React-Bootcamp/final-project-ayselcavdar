import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

// yalnızca sisteme kayıtlı admin kullanıcıları için
// oluşturulmuş fonksiyonlardır
const signin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export { signin, logout, auth };
