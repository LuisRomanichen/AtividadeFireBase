import {initializeApp} from "firebase/app";
import {getFirestine,} from "firebase/firestone";
import {getAuth } from "firebase/auth";

const firebaseconfg = {
    apiKey: "AIzaSyCGl3I-OXk4dRPFLERw-LeHnRh2BwNI_K0",
  authDomain: "persistencia-9807d.firebaseapp.com",
  projectId: "persistencia-9807d",
  storageBucket: "persistencia-9807d.appspot.com",
  messagingSenderId: "712960503739",
  appId: "1:712960503739:web:84a84d6e2f85bf292e9e9e",
  measurementId: "G-9DQ9JDZ7NE"
}

const firebaseApp = initializeApp(firebaseconfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth};

