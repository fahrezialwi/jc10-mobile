import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import RegisterScreen from './src/screens/RegisterScreen'

export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyDL50Pd5mkSFs8MIjT87GJgg3UsobVQlKQ",
    authDomain: "instaclone-28f03.firebaseapp.com",
    databaseURL: "https://instaclone-28f03.firebaseio.com",
    projectId: "instaclone-28f03",
    storageBucket: "instaclone-28f03.appspot.com",
    messagingSenderId: "1078319540529",
    appId: "1:1078319540529:web:d13e6c5228825ea6676810"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <RegisterScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
