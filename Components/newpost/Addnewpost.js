import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Addnewpost = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        {/* post foru */}
    </View>
    
  )
}

const Header=({navigation})=>(
    <View style={styles.headercontainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>

            <Image source={{ uri: 'https://i.pngimg.me/thumb/f/720/m2i8b1K9H7H7N4Z5.jpg' }} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.headertext}>NEW POST</Text>
        <Text></Text>


    </View>

)
const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    headercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headertext:{
        fontWeight:'700',
        fontSize:20,
        marginRight:27.5
    },
    })

export default Addnewpost