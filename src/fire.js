import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyD4fqB63KcH4-M7Uumh012Wr79mzxC_GA8",
    authDomain: "login1-3d572.firebaseapp.com",
    projectId: "login1-3d572",
    storageBucket: "login1-3d572.appspot.com",
    messagingSenderId: "38277576733",
    appId: "1:38277576733:web:9741d849a4925d9efdeef4"
});

const auth = app.auth();
const db = app.firestore();
export { auth, db };
export default app;