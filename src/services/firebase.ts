import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBGKYFl69g-SDxK-Yiqv6creu7dc6x737I",
  databaseURL: "https://Jases-moon-terminal-default-rtdb.firebaseio.com/"
}

// https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.database()
export const auth = firebase.auth()
