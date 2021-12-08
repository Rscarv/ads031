import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA_e2psaWj0Wrsx_Mg-Yh_6ufAHkj8GTRQ",
    authDomain: "projetopi-3a6c9.firebaseapp.com",
    projectId: "projetopi-3a6c9",
    storageBucket: "projetopi-3a6c9.appspot.com",
    messagingSenderId: "981166471935",
    appId: "1:981166471935:web:e35b69499e81632ae5eaca"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database