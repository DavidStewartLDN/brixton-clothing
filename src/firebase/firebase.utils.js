import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGMIlpvTbYIk0VsP3vT4XlBV6ptx9qtXQ",
  authDomain: "brixton-db.firebaseapp.com",
  databaseURL: "https://brixton-db.firebaseio.com",
  projectId: "brixton-db",
  storageBucket: "brixton-db.appspot.com",
  messagingSenderId: "395079789934",
  appId: "1:395079789934:web:073cdc7353e1aae53fe57f",
  measurementId: "G-P9V81LXJR5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;