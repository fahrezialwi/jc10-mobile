import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeStack from './HomeStack'
import ProfileTabNavigator from './ProfileTabNavigator'
import SettingScreen from '../screens/SettingScreen'

const MainNavigator = createBottomTabNavigator({
  Home : {
    screen : HomeStack,
    path : 'Home'
  },
  ProfileTabNavigator,
  SettingScreen
})

export default MainNavigator