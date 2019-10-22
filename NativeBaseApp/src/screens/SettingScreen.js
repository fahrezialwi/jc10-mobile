import React from 'react'
import { View, Text } from 'react-native'

const SettingScreen = () => {
  return (
    <View 
      style={{
        flexDirection : 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{fontSize: 36, color: 'green'}}>
        Setting Screen
      </Text>
    </View>
  )
}

export default SettingScreen