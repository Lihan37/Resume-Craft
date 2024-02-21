import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjDjlA-ej4LdZd8H4QirDkauWGQSMEe_w",
  authDomain: "resumecraft-f2b45.firebaseapp.com",
  projectId: "resumecraft-f2b45",
  storageBucket: "resumecraft-f2b45.appspot.com",
  messagingSenderId: "104209902639",
  appId: "1:104209902639:web:465a86227918e3b03eeada",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
