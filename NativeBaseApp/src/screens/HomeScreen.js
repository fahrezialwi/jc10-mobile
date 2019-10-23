import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'native-base'

const HomeScreen = (props) => {
  
  const [input, setInput] = useState('')

  return (
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
      }}
    >
      <Text style={{fontSize: 36, color: 'red'}}>
        Home Screen
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <TextInput 
          onChangeText={(text) => setInput(text)} 
          placeholder='Input Number' 
          style={{
            borderWidth: 1,
            borderBottomColor: 'lightgrey',
            marginRight: 15,
            flex: 4,
            padding: 8
          }}
        />
        <Button
          primary
          onPress={() => props.navigation.navigate('ParamScreen', {
            nama: 'Seto',
            text: input
          })}
          style={{flex: 1}}
        >
          <Text
            style={{
              color: 'white',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginBottom: 'auto',
              marginRight: 'auto'
            }}
          >
            Process
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default HomeScreen