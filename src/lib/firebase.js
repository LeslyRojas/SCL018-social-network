import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
const firebaseConfig = {
  apiKey: 'AIzaSyBi8e3RwTgXYw6qs6jQcl8nf73NBX11Fzs',
  authDomain: 'beer-up-redsocial.firebaseapp.com',
  databaseURL: 'https://beer-up-redsocial-default-rtdb.firebaseio.com',
  projectId: 'beer-up-redsocial',
  storageBucket: 'beer-up-redsocial.appspot.com',
  messagingSenderId: '771251060960',
  appId: '1:771251060960:web:8f752020216f78f9635085'
};
  
  // Inicializando Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // Información del usuario que inició sesión
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(error)
    });
  }




  