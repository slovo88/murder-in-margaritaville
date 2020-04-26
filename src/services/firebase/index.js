import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA95zD0SRNV7xA6OdOIq3kne6i4vFmQNZQ",
  authDomain: "murder-mystery-pemo.firebaseapp.com",
  databaseURL: "https://murder-mystery-pemo.firebaseio.com",
  projectId: "murder-mystery-pemo",
  storageBucket: "murder-mystery-pemo.appspot.com",
  messagingSenderId: "588260667602",
  appId: "1:588260667602:web:4e7937be0264c03a8b3d0b",
  measurementId: "G-MX55724GKS"
}

firebase.initializeApp(firebaseConfig)

export default firebase