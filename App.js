import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import SignedInStack from './Screens/Navigation'
import StackNavigator from './Screens/StackNavigator'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <>
      <StackNavigator/>
      <Toast /> 
    </>
  
   )
     
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

