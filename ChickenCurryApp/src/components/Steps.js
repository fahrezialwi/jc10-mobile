import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 14
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  sectionDescription: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  }
})

const Steps = () => {
  return (
    <>
      <View>
        <Text style={styles.mainTitle}>Instructions</Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Step 1</Text>
        <Text style={styles.sectionDescription}>
          In a wide pan over medium heat, heat oil. Add potatoes and cook for about 2 to 3 minutes or until lightly browned and tender. Remove from pan and drain on paper towels.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 2</Text>
        <Text style={styles.sectionDescription}>
          Add carrots and cook for about 1 to 2 minutes. Remove from pan and drain on paper towels.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 3</Text>
        <Text style={styles.sectionDescription}>
          Remove excess oil from pan except for about 1 tablespoon. Add bell peppers and cook for about 30 to 40 seconds. Remove from pan and set aside.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 4</Text>
        <Text style={styles.sectionDescription}>
          Add onions and garlic and cook until softened. 
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 5</Text>
        <Text style={styles.sectionDescription}>
          Add chicken and cook, stirring occasionally until lightly browned.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 6</Text>
        <Text style={styles.sectionDescription}>
          Add fish sauce and continue to cook for about 1 minute.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 7</Text>
        <Text style={styles.sectionDescription}>
          Add coconut milk and water. Bring to a simmer, skimming any scum that may float on top.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 8</Text>
        <Text style={styles.sectionDescription}>
          Lower heat, cover, and simmer for about 20 to 30 minutes or until chicken is cooked.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 9</Text>
        <Text style={styles.sectionDescription}>
          Add potatoes and carrots and cook for about 3 to 5 minutes or until tender.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 10</Text>
        <Text style={styles.sectionDescription}>
          Add curry powder and stir to combine. Continue to cook for about 2 to 3 minutes or until sauce starts to thicken.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 11</Text>
        <Text style={styles.sectionDescription}>
          Season with salt and pepper to taste. 
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step 12</Text>
        <Text style={styles.sectionDescription}>
        Add bell peppers and cook for about 1 minute or until tender yet crisp. Serve hot.
        </Text>
      </View>
    </>
  )
}

export default Steps