import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={{...styles.container, ...styles.bgBlue}}>
      <Text style={styles.counterValue}>{counter}</Text>
      <Button color='orange' onPress={() => setCounter(counter+1)} title='Add'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgBlue: {
    backgroundColor: '#add8e6'
  },
  counterValue: {
    color: 'white',
    marginBottom: 250,
    fontSize: 150,
    fontWeight: 'bold'
  }
})