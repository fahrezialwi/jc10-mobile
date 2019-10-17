import React from 'react'
import {
  StyleSheet,
  Image,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  mainImage: {
    width: '100%',
    height: 300,
  }
})


const Header = () => {
  return (
    <>
      <Text style={styles.mainTitle}>
          Chicken Curry Recipe
      </Text>
      <Image source={require('../images/chicken-curry.jpg')} style={styles.mainImage}></Image>
    </>
  )
}

export default Header