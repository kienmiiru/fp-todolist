import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXc5zs5uHbYLmQMeVPNqXiccKUANITQ_0",
    authDomain: "todolist-7474e.firebaseapp.com",
    projectId: "todolist-7474e",
    storageBucket: "todolist-7474e.firebasestorage.app",
    messagingSenderId: "258326950254",
    appId: "1:258326950254:web:2a06d2d1bf2337ce4a117f"
  }

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
  