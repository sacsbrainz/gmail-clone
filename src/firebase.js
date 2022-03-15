import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqH1gGDnCCKus1MiAahdtn9YYi4jAFqt0",
    authDomain: "clone-220ae.firebaseapp.com",
    projectId: "clone-220ae",
    storageBucket: "clone-220ae.appspot.com",
    messagingSenderId: "673517160837",
    appId: "1:673517160837:web:1327391994cf31f32cdcec"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};