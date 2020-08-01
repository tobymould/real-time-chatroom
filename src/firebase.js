import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzThfTBzJdBMEsDSV_aSen2SQ-GZkMZ2w',
  authDomain: 'realtime-chatroom-ea4d6.firebaseapp.com',
  databaseURL: 'https://realtime-chatroom-ea4d6.firebaseio.com',
  projectId: 'realtime-chatroom-ea4d6',
  storageBucket: 'realtime-chatroom-ea4d6.appspot.com',
  messagingSenderId: '852781272949',
  appId: '1:852781272949:web:0e8636258da5d4a356cd3c',
  measurementId: 'G-VZW173BGQ4'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const provider = new.firebase.auth.GoogleAuthProvider();

export default firebase;
