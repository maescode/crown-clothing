import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyAa5R1h-nriYC_QKXy2xP3TR3ohYeIGQds',
  authDomain: 'crown-db-dc57f.firebaseapp.com',
  projectId: 'crown-db-dc57f',
  storageBucket: 'crown-db-dc57f.appspot.com',
  messagingSenderId: '874421372562',
  appId: '1:874421372562:web:5bf03adda38dc9de2d084b',
  measurementId: 'G-9V9160YZZN',
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
