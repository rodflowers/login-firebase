import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTRy4GlpdWEdePk92Tg0azQZ3nbgP8Ky4",
  authDomain: "booking-db22e.firebaseapp.com",
  projectId: "booking-db22e",
  storageBucket: "booking-db22e.appspot.com",
  messagingSenderId: "1032004039438",
  appId: "1:1032004039438:web:957da9a55088a79b8c1d5f",
};
// Initialize Firebase
if (!firebase.apps.length) {
  console.log(firebase.apps);
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
