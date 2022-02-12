import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACo-XPtMtJsC_0qEGz5jAqEGqcFzAyRyY",
  authDomain: "netflix-clone-7ede9.firebaseapp.com",
  projectId: "netflix-clone-7ede9",
  storageBucket: "netflix-clone-7ede9.appspot.com",
  messagingSenderId: "845342124595",
  appId: "1:845342124595:web:45110b794c9a15640e1146"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
