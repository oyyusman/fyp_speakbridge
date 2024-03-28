import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Headerss = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/1.png')} />

      </TouchableOpacity>
      <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={()=>navigation.push('Newpostscreen')}>
          <Image style={styles.icon} source={require('../../assets/m4.png')}/>
          </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/m4.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.unread}>
          <Text style={styles.unreadtext}>11</Text>
        </View>
          
          <Image style={styles.icon} source={require('../../assets/m4.png')} />
        </TouchableOpacity>
      

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginHorizontal:20,
    

  },
  iconcontainer:{
    flexDirection:'row',
    

  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  icon:{
    width:30,
    height:30,
    resizeMode:'contain',
    marginLeft:10,

   },
   unread:{
      backgroundColor:'#FF3250',
      position:'absolute',
      left:20,
      bottom:18,
      width:25,
      height:18,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100,

      
   },
   unreadtext:{
      fontWeight:'600',
      color:'white'
   }

})

export default Headerss