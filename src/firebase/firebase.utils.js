import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqI8k8zjOxz_9OsTOPB-CgxRdCsibXy6E",
    authDomain: "abedulgemstone-db.firebaseapp.com",
    projectId: "abedulgemstone-db",
    storageBucket: "abedulgemstone-db.appspot.com",
    messagingSenderId: "307449063038",
    appId: "1:307449063038:web:e538b0bce443cc9d5e5a2f",
    measurementId: "G-W9MMN4869N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;