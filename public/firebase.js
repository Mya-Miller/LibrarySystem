import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  connectAuthEmulator,
  signOut 
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBF6lNqLqnuODHitwq7yr_wmzrbxn_JJm8",
  authDomain: "librarysystem-c9b1a.firebaseapp.com",
  databaseURL: "https://librarysystem-c9b1a-default-rtdb.firebaseio.com",
  projectId: "librarysystem-c9b1a",
  storageBucket: "librarysystem-c9b1a.appspot.com",
  messagingSenderId: "633030572821",
  appId: "1:633030572821:web:de3a3bf5004330a6a9871c",
  measurementId: "G-DFWFEX0CY6"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099")

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);

  try{
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log('There was an error: ${error}');
    showLoginError(error);
  }
}

btnLogin.addEventListener("click, loginEmailPassword");

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try{
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

btnRegister.addEventListener("click", createAccount)

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
    }
    else{
      showLoginForm();
      lblAuthState.innerHTML = "You're not logged in."
    }
  });
}

monitorAuthState();

const logout = async () => {
  await signOut(auth);
}

btnLogout.addEventListener("click", logout);

