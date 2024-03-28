import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Addnewpost from '../Components/newpost/Addnewpost'
import Formikuploader from '../Components/newpost/Formikuploader'

const Newpostscreeen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Addnewpost navigation={navigation} />
      <Formikuploader />
    </SafeAreaView>
  )
}

export default Newpostscreeen