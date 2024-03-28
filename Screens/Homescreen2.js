import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Headerss from '../Components/home/Headerss'
import Stories from '../Components/home/Stories'
import Post from '../Components/home/Post'
import { POSTS } from '../data/posts'
import Bottomtabs, { bottomtabsicon } from '../Components/home/Bottomtabs'


const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Headerss navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <Bottomtabs icons={bottomtabsicon} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'black',
    flex: 1,

  }
})

export default Homescreen