import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import Main from './Main';
import { alreadyLogin, notLoginYet } from '../actions';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCL4EN33m5DldHcWmEl_afbB99CcBZs688",
      authDomain: "instagrin-8a715.firebaseapp.com",
      databaseURL: "https://instagrin-8a715.firebaseio.com",
      projectId: "instagrin-8a715",
      storageBucket: "instagrin-8a715.appspot.com",
      messagingSenderId: "32960794980",
      appId: "1:32960794980:web:73fc3d2b4ba2f63750aa71"
      };
    // Initialize Firebase
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.alreadyLogin({ user });
      } else {
        this.props.notLoginYet();
      }
    });
  }

  render() {
    return (
      <Main />
    )
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);