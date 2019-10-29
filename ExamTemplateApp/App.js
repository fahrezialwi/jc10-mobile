import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoListScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
