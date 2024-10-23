// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrXIDTCzN2XbfGDck5zAsC7LxQJUC1og",
  authDomain: "reactnavite-expo-firebase.firebaseapp.com",
  projectId: "reactnavite-expo-firebase",
  storageBucket: "reactnavite-expo-firebase.appspot.com",
  messagingSenderId: "385611311644",
  appId: "1:385611311644:web:d19c58e37d1e0388c08dd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth;

export {auth}