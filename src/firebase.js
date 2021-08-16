import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBRk31CBCmjRBXE9YHwFRNDQgCphC_-mmA",
  authDomain: "crud-c632f.firebaseapp.com",
  databaseURL: "https://crud-c632f-default-rtdb.firebaseio.com",
  projectId: "crud-c632f",
  storageBucket: "crud-c632f.appspot.com",
  messagingSenderId: "1055713770253",
  appId: "1:1055713770253:web:3ca253d989d9f93b538e44",
};

var firebaseDb = firebase.initializeApp(firebaseConfig);
export default firebaseDb.database().ref();
