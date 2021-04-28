 import firebase from "firebase/app";
 import "firebase/database"

 var firebaseConfig = {
    apiKey: "AIzaSyAgVe5hrOldulgDUl1ZL_MuUo9N5QFnUpI",
    authDomain: "crud-react-d7680.firebaseapp.com",
    databaseURL: "https://crud-react-d7680-default-rtdb.firebaseio.com",
    projectId: "crud-react-d7680",
    storageBucket: "crud-react-d7680.appspot.com",
    messagingSenderId: "712652895028",
    appId: "1:712652895028:web:6e673c24216695ed23ab61"
  };

  
  var firebaseDb = firebase.initializeApp(firebaseConfig);
  export default firebaseDb.database().ref();