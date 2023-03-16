import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDc-YKGOSlUGBfvblF71MGOGeHvhVxwFn4",
  authDomain: "linkidin-clone-68fc5.firebaseapp.com",
  projectId: "linkidin-clone-68fc5",
  storageBucket: "linkidin-clone-68fc5.appspot.com",
  messagingSenderId: "114946347056",
  appId: "1:114946347056:web:c2c79db1e259dcb6865df5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();


export { auth, provider , storage};
export default db;