import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyARpa7mSB4Hl2fYv7lZgMpUeCJTMDoG4HY",
  authDomain: "sampleappplanner.firebaseapp.com",
  projectId: "sampleappplanner",
  storageBucket: "sampleappplanner.appspot.com",
  messagingSenderId: "307718060136",
  appId: "1:307718060136:web:8465db09f9914aad8d63dd",
  measurementId: "G-DB31ZBL7CK"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
