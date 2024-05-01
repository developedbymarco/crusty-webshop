import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDl7Rtf5z-XNeoEm0BxLpr-VAuOAtmtVGE",
    authDomain: "crusty-webshop-db.firebaseapp.com",
    projectId: "crusty-webshop-db",
    storageBucket: "crusty-webshop-db.appspot.com",
    messagingSenderId: "250444132831",
    appId: "1:250444132831:web:43c3c38cdad638c5eb146a"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);