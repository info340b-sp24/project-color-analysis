import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { productsList } from './components/ProductsPage';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfs1Dgjv8bJSpqI7JsDdTExB4XsHTvqH4",
  authDomain: "info340-ced4a.firebaseapp.com",
  databaseURL: "https://info340-ced4a-default-rtdb.firebaseio.com",
  projectId: "info340-ced4a",
  storageBucket: "info340-ced4a.appspot.com",
  messagingSenderId: "480824914410",
  appId: "1:480824914410:web:38ce8a43a16a83d74b8293"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


