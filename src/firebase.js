
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,  signInWithEmailAndPassword 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATv0p2OFx5bB7tti1n-YLVASLQYARA5Nw",
  authDomain: "careerguidance-7042c.firebaseapp.com",
  projectId: "careerguidance-7042c",
  storageBucket: "careerguidance-7042c.appspot.com",
  messagingSenderId: "1096184351136",
  appId: "1:1096184351136:web:7e855143617550907efcc5",
  measurementId: "G-JP0Z5G8DXX",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 


export { auth, googleProvider, signInWithPopup,  signInWithEmailAndPassword 
};


