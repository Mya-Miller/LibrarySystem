import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  connectAuthEmulator,
  setPersistence,
  browserSessionPersistence,
  signOut 
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

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
//connectAuthEmulator(auth, "http://localhost:9099");

//logs user in
const loginEmailPassword = async () => {
  const loginEmail = txtLoginEmail.value
  const loginPassword = txtLoginPassword.value

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  console.log(userCredential.user)

  try{
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredential.user)
    window.location.href = "index.html";
  }
  catch(error) {
    console.log('There was an error: ${error}')
  }
}

btnLogin.addEventListener("click", loginEmailPassword);

//creates new user account
const createAccount = async () => {
  const loginEmail = txtRegisterEmail.value
  const loginPassword = txtRegisterPassword.value
  const name = txtName.value

  try{
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(function(result) {
      updateProfile(auth.currentUser, {
        displayName: name
      })
    })
    .catch(function(error) {
      console.log(error);
    });
    console.log(userCredential.user)
    window.location.href = "index.html";
  }
  catch(error) {
    console.log(error)
  }

 
}

//listener for register button
btnRegister.addEventListener("click", createAccount)

const user = auth.currentUser;

const monitorAuthState = async () => {

  const loginToggle = document.querySelector('.logintoggle');

  onAuthStateChanged(auth, user => {
    if (user !== null) {
      console.log(user)
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const uid = user.uid;

      loginToggle.classList.add("active");
    }
    else{
      loginToggle.classList.remove("active");
    }
  });

  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

monitorAuthState();

const logout = async () => {
  await signOut(auth);
  window.location.href = "index.html";
}

btnLogout.addEventListener("click", logout)

