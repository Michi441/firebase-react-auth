
import * as firebase from 'firebase';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyB1ADxOKV7WCR8o6iE4Dfe7lmet3K2EBDU",
   authDomain: "fir-react-auth.firebaseapp.com",
   databaseURL: "https://fir-react-auth.firebaseio.com",
   projectId: "fir-react-auth",
   storageBucket: "fir-react-auth.appspot.com",
   messagingSenderId: "472221970742"
 };



if(!firebase.apps.length){

    firebase.initializeApp(config);

}

const auth = firebase.auth();

export { auth };
