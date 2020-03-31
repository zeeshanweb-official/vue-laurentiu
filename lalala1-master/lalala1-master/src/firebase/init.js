import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyAkChGNTQHI1gSXnrZPEAyALS7j1ELEI7I',
  authDomain: 'lalala1-a.firebaseapp.com',
  databaseURL: 'https://lalala1-a.firebaseio.com',
  projectId: 'lalala1-a',
  storageBucket: 'lalala1-a.appspot.com',
  messagingSenderId: '995945793137'
}

firebase.initializeApp(config)
