import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {

  apiKey: "AIzaSyD-2iXrk4Us7Q_ip7UWcmknWnuT_WRAYf4",
  authDomain: "safari-kids-dashboard.firebaseapp.com",
  databaseURL: "https://safari-kids-dashboard-default-rtdb.firebaseio.com",
  projectId: "safari-kids-dashboard",
  storageBucket: "safari-kids-dashboard.appspot.com",
  messagingSenderId: "511232456212",
  appId: "1:511232456212:web:07a1134675098770fc1901",
  measurementId: "G-CNLEC7ZK9J"

};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();


export default fire;