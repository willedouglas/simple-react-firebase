import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAz1M__v2W7SPXwJ_nPR5ny-SHB5ZLe1kc",
  authDomain: "sample-firebase-project-3ce3a.firebaseapp.com",
  databaseURL: "https://sample-firebase-project-3ce3a.firebaseio.com",
  projectId: "sample-firebase-project-3ce3a",
  storageBucket: "",
  messagingSenderId: "967145701490"
};

const fire = firebase.initializeApp(config);

export default fire;