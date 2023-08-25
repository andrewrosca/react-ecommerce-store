// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGdsuX8sofzAZgSR6fuPRqN8Cumm6n-U",
  authDomain: "crwn-clothing-db-edf11.firebaseapp.com",
  projectId: "crwn-clothing-db-edf11",
  storageBucket: "crwn-clothing-db-edf11.appspot.com",
  messagingSenderId: "65330538828",
  appId: "1:65330538828:web:f4e0aee22d208e373c87e9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
