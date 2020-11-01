import firebase from 'firebase/app'
import 'firebase/firestore'

// var firebaseConfig = {
//   apiKey: 'AIzaSyA9ex_6UNyY-lvy2dVLqkmueNuznnzybjo',
//   authDomain: 'my-todo-db719.firebaseapp.com',
//   databaseURL: 'https://my-todo-db719.firebaseio.com',
//   projectId: 'my-todo-db719',
//   storageBucket: 'my-todo-db719.appspot.com',
//   messagingSenderId: '823314970419',
//   appId: '1:823314970419:web:7bb9db9ef736d6e06d3046',
//   measurementId: 'G-RW3ESQ4YQN'
// }
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'my-todo-db719.firebaseapp.com',
  databaseURL: 'https://my-todo-db719.firebaseio.com',
  projectId: 'my-todo-db719',
  storageBucket: 'my-todo-db719.appspot.com',
  messagingSenderId: '823314970419',
  appId: '1:823314970419:web:7bb9db9ef736d6e06d3046',
  measurementId: 'G-RW3ESQ4YQN'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
//   firebase.analytics()
db.settings({ timestampsInSnapshots: true })
export default db
