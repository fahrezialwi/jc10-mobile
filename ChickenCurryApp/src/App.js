import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  },
  body: {
    backgroundColor: 'white',
    paddingVertical: 32,
    paddingHorizontal: 20
  }
})

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <Ingredients/>
            <Steps/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App