import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  }
})

const Ingredients = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.mainTitle}>Ingredients</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1/4 cup canola oil</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 2 medium potatoes, peeled and quartered</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 2 large carrots, peeled and cubed</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1/2 green bell pepper, cored, seeded and cut into cubes</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1/2 red bell pepper, cored, seeded and cut into cubes</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1 onion, peeled and cubed</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 3 cloves garlic, peeled and minced</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1 (3 pounds) bone-in chicken, cut into serving pieces</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1 tablespoon fish sauce</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1 cup coconut milk</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 1 cup water</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} 2 tablespoons curry powder</Text>
        <Text style={styles.sectionDescription}>{'\u2022'} salt and pepper to taste</Text>
      </View>
    </>
  )
}

export default Ingredients