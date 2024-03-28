import React, { useState, } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
export const bottomtabsicon = [
    {
        name: 'Home',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgnleiI28iQk0pUUy7sfIcQ-Q1BCBSPQaCYlh28HZxA&s',
        inactive: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'



    },
    {
        name: 'Search',
        active: 'https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg',
        inactive: 'https://simpleicon.com/wp-content/uploads/active-search.png'
    },
    {
        name: 'reel',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgnleiI28iQk0pUUy7sfIcQ-Q1BCBSPQaCYlh28HZxA&s',
        inactive: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'
    },
    {
        name: 'shop',
        active: 'https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg',
        inactive: 'https://simpleicon.com/wp-content/uploads/active-search.png'
    },
    {
        name: 'profile',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgnleiI28iQk0pUUy7sfIcQ-Q1BCBSPQaCYlh28HZxA&s',
        inactive: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'
    }

]

const Bottomtabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => {
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image
                    source={{ uri: activeTab === icon.name ? icon.inactive : icon.active }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>

                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}


            </View>
        </View>

    )
}

export default Bottomtabs
const styles = StyleSheet.create({
    // wrapper: {
    //     position:'absolute',
    //     width:'100%',
    //     bottom:'3%',
    //     zIndex:999,
    //     backgroundColor:'#000',


    // },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 10,

    }
})