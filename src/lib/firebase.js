import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup,  } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBi8e3RwTgXYw6qs6jQcl8nf73NBX11Fzs',
  authDomain: 'beer-up-redsocial.firebaseapp.com',
  databaseURL: 'https://beer-up-redsocial-default-rtdb.firebaseio.com',
  projectId: 'beer-up-redsocial',
  storageBucket: 'beer-up-redsocial.appspot.com',
  messagingSenderId: '771251060960',
  appId: '1:771251060960:web:8f752020216f78f9635085'
};
  
  // ----------Inicializando Firebase----------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);
const user = auth.currentUser;

// ----------Login con Google----------
export const loginWithGoogle= () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
      
    const user = result.user;
    window.location.hash = '#/wall';
    console.log('logged with google');
      
  }).catch((error) => {     
    const errorCode = error.code;
    const errorMessage = error.message;
     
    const email = error.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
    window.location.hash('#/login');
    console.log(error)
  });
};

// ----------cerrar sesión----------
export const logOut = () => {
  signOut(auth).then(() => {
    (window.location.hash !== '#/login');
  }).catch((error) => {
    
  });
}

// ----------Observador----------
export const onAuth = () => {
 onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
    (window.location.hash !== '#/login')
    };
  }); 
};

// ----------Agregar data----------
export const addData = async( description ) => {
  const docRef = await addDoc(collection(db,'publication'), {
    post : description,
    userId : auth.currentUser.uid,
    datePosted: Timestamp.fromDate(new Date()),
  });
  return docRef;
}

// ----------Leer data----------
