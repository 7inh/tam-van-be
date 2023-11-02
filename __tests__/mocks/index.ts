import firebaseConfigWeb from "config/firebase-config-web";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const testAccount = process.env.TEST_USER;
export const testPassword = process.env.TEST_PASSWORD;

async function getToken() {
    if (testAccount && testPassword) {
        initializeApp(firebaseConfigWeb);

        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, testAccount, testPassword);

        return userCredential.user.getIdToken();
    }
}

export default getToken;
