
import { initializeApp } from "firebase/app";

import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCBrIKVuKXXwFH-6IgSV2E4SzcqnkIZBM",
  authDomain: "nyay-portal.firebaseapp.com",
  projectId: "nyay-portal",
  storageBucket: "nyay-portal.firebasestorage.app",
  messagingSenderId: "133484099867",
  appId: "1:133484099867:web:fe336cb762b6e29c727bbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Failed to set auth persistence:', error);
});

export { auth };