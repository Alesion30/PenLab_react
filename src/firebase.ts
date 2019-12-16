import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "penlab-caa95.firebaseapp.com",
    databaseURL: "https://penlab-caa95.firebaseio.com",
    projectId: "penlab-caa95",
    storageBucket: "penlab-caa95.appspot.com",
    messagingSenderId: "213287346345",
    appId: "1:213287346345:web:b88e0891f86cf1ba6c89b8",
    measurementId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

export default config