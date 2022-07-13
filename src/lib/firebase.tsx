import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCslftU2kP7i3-m3syUmmREF4LdkOedIa4",
  authDomain: "instagram-1d9d6.firebaseapp.com",
  projectId: "instagram-1d9d6",
  storageBucket: "instagram-1d9d6.appspot.com",
  messagingSenderId: "1604964613",
  appId: "1:1604964613:web:da868a8bd75b324f32a76c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where the seed file is called ONCE. Do not uncomment.
// seedDatabase(firebase);

export { firebase, FieldValue };
