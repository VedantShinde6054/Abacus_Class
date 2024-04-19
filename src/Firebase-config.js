import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBJao8mEIjKtWYQ4e66cBnbSn6AnvtU0Fs",
  authDomain: "acharya-classes.firebaseapp.com",
  projectId: "acharya-classes",
  storageBucket: "acharya-classes.appspot.com",
  messagingSenderId: "376193480755",
  appId: "1:376193480755:web:01a927a0269e87ac1acb46",
  measurementId: "G-23KE3KRYH8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
