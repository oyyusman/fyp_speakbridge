import { View, Text, ScrollView,Image, StyleSheet } from 'react-native'
import React from 'react'
import { users } from '../../data/user'


const Stories = () => {
    return (
        <View style={{marginBottom:13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {users.map((story, index) => (
                <View key={index} style={{alignItems:'center'}}>
                    <Image source={{ uri: story.image }} style={style.story}/>
                    <Text style={{ textAlign: 'center' }}>{
                        story.name.length > 10
                            ? story.name.slice(0, 10).toLowerCase() + '...'
                            : story.name.toLowerCase()
                    }</Text>
                </View>
            ))}
        
        </ScrollView>
        
        </View>
    )
}
const style = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft:6,
        borderWidth: 3,
        borderColor:'#ff8501',

    } 
})

export default Stories