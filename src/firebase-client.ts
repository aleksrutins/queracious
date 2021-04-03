import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRm_KttsgK7EEszx2t-ikJ-a2quj8YiEU",
    authDomain: "queracious.firebaseapp.com",
    projectId: "queracious",
    storageBucket: "queracious.appspot.com",
    messagingSenderId: "1084045273033",
    appId: "1:1084045273033:web:93975c9036dee56c6daa18"
};
// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;