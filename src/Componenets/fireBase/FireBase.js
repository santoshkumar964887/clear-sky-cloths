import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    
        apiKey: "AIzaSyAqDUBykbBxO9buXQdvFW-s8JwLfPbQ5q4",
        authDomain: "clear-sky-cloths.firebaseapp.com",
        databaseURL: "https://clear-sky-cloths.firebaseio.com",
        projectId: "clear-sky-cloths",
        storageBucket: "clear-sky-cloths.appspot.com",
        messagingSenderId: "650138559344",
        appId: "1:650138559344:web:1dd4c5e6a1dcd3848225b5",
        measurementId: "G-FPFQNPPCSX"
      

};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;