import React, { useState } from 'react'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Reducers from './src/redux/reducers'
import AppNavigator from './src/navigators/AppNavigator'

export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store} >
      <AppNavigator/>
    </Provider>
  )
}