import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC096Lr38eHYm_R6K6gSB0GhJIDdM2DqxM",
  authDomain: "cloth-shop-db.firebaseapp.com",
  databaseURL: "https://cloth-shop-db.firebaseio.com",
  projectId: "cloth-shop-db",
  storageBucket: "",
  messagingSenderId: "253296959366",
  appId: "1:253296959366:web:c5985ece2ffbb3a7"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
