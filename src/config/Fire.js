import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {

  apiKey: "AIzaSyC4CxhJ3enMogDp9JVFzRl2aYUtU1Kf1J4",
  authDomain: "classic-dashboard-ac157.firebaseapp.com",
  databaseURL: "https://classic-dashboard-ac157-default-rtdb.firebaseio.com",
  projectId: "classic-dashboard-ac157",
  storageBucket: "classic-dashboard-ac157.appspot.com",
  messagingSenderId: "586153030856",
  appId: "1:586153030856:web:9b54687db90967cca921fd",
  measurementId: "G-V5Q8K5SEDK"

};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();


export default fire;