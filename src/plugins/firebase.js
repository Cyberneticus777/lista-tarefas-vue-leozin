import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCr3NtZiZFPy87RZKskvBLDT_nllApkOXY",
    authDomain: "todo-list-vue-3af64.firebaseapp.com",
    projectId: "todo-list-vue-3af64",
    storageBucket: "todo-list-vue-3af64.appspot.com",
    messagingSenderId: "835033544932",
    appId: "1:835033544932:web:4c53b302b2bb82e56394f1"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}