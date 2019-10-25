import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Button, Grid, Col, Row, H1 } from 'native-base'
import firebase from 'firebase'

const styles = StyleSheet.create({
  inputRounded: { 
    color: 'gray', 
    backgroundColor: '#f0f8ff',
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
    paddingLeft: 20,
    marginVertical: 10,
    height: 60,
    width: '100%'
  }
})

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    if(password && email) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        Alert.alert('Success', 'You are now logged in')
      })
      .catch(err => {
        console.log(err)
        Alert.alert('Firebase Auth Failed')
      })
    } else {
      Alert.alert('Error', 'Please fill in the form')
    }
  }

  return (
    <View
      style={{
        flex : 1,
        backgroundColor: '#86c5d8',
        flexDirection: 'column',
        alignSelf: 'stretch'
      }}
    >
      <Grid>
        <Col
          size={1}
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <H1 style={{color: '#f0f8ff', textAlign: 'center', marginBottom: 20}}>
            Login
          </H1>
        </Col>
        <Row
          size={1.5}
          style={{
            alignItems: 'center'
          }}
        >
          <Col style={{padding: 30}}>
            <View style={{...styles.inputRounded}}>
              <Input onChangeText={text => setEmail(text)} placeholder='Email'/>
            </View>
            <View style={{...styles.inputRounded}}>
              <Input secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder='Password'/>
            </View>
          </Col>
        </Row>
        <Col
          size={1}
          style={{
            alignItems: 'center'
          }}
        >
          <Button
            onPress={onLogin}
            rounded
            style={{
              backgroundColor: '#cae9f5',
              paddingHorizontal: 50,
              paddingVertical: 10
            }}
          >
            <Text style={{color: 'black', alignSelf: 'center'}}>
              Login
            </Text>
          </Button>
        </Col>
      </Grid>
    </View>
  )
}

export default LoginScreen