import React from 'react';
import { render } from "react-dom";
import firebase from "firebase/app";

import Router from 'router';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';
import 'assets/styles/main.less';

// Initialize Firebase
firebase.initializeApp({
    apiKey            : process.env.REACT_APP_API_KEY,
    authDomain        : process.env.REACT_APP_AUTH_DOMAIN,
    projectId         : process.env.REACT_APP_PROJECT_ID,
    storageBucket     : process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId : process.env.REACT_APP_MASSAGING_SENDER_ID,
    appId             : process.env.REACT_APP_ID
});

const rootElement = document.getElementById("root");

render(<Router />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
