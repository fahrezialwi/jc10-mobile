import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import firebase from 'firebase'

const RegisterScreen = props => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repPassword, setRepPassword] = useState('')

  const onRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const uid = res.user.uid
      firebase.database().ref(`/users/${uid}`)
      .set({
        email,
        username,
        password,
        repPassword
      }).then(() => console.log('Register Success'))
      .catch(() => console.log('Register Failed'))
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <View>
      <View style={{flex:1}}>
        <Text>Register Screen</Text>
      </View>
      <View style={{flex:1}}>
        <Input onChangeText={text => setEmail(text)} placeholder="Email"/>
        <Input onChangeText={text => setUsername(text)} placeholder="Username"/>
        <Input onChangeText={text => setPassword(text)} placeholder="Password"/>
        <Input onChangeText={text => setRepPassword(text)} placeholder="Repeat Password"/>
        <Button primary onPress={onRegister}>
          <Text>Register</Text>
        </Button>
      </View>
    </View>
  )
}

export default RegisterScreen