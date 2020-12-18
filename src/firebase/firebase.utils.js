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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error creating user', err.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;