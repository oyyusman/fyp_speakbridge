import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        console.log(email, password);
        const userData = {
            email: email,
            password: password
        }
        axios.post('http://192.168.18.40:3000/login', userData)
            .then(response => {
                console.log(response.data)
                if (response.data.status == "ok") {
                    Alert.alert("Login Successfull")
                    AsyncStorage.setItem('token', response.data.data)
                    navigation.navigate('Homescreen')
                }
            })


    }

    return (
        <View style={styles.container}>
            <Text style={styles.mtext}>Welcome Back👋</Text>
            <Text style={styles.dtext} >Please Enter your Email and Password to Sign in</Text>
            <View style={styles.mContainer}>
                <View style={styles.inputcontainer} >
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address" // This sets the keyboard to email input type
                        autoCapitalize="none" // Prevents automatic capitalization of the first letter
                        // onChangeText={(email) => setEmail(email)}
                        autoCorrect={false}
                        onChange={e => setEmail(e.nativeEvent.text)}


                    />
                    <Icon name="envelope-o" size={18} color="black" style={styles.icon} />

                </View>

            </View>
            <View style={styles.dContainer} >
                <View style={styles.inputcontainer} >
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Password"
                        secureTextEntry={true} // Mask the text for password input
                        keyboardType="default" // Use the default keyboard type
                        // onChangeText={(password) => setPassword(password)}
                        autoCapitalize="none"
                        onChange={e => setPassword(e.nativeEvent.text)}
                        autoCorrect={false}

                    />
                    

                    <Icon name="lock" size={18} color="black" style={styles.icon2} /> 

                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Resetpassword')}>
                    <Text style={styles.fpassword}> forget Password?</Text>
                </TouchableOpacity>


            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Signupscreen')} style={styles.button}>
                <Text style={styles.buttonText}> Register</Text>
            </TouchableOpacity>
        </View>





    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    mContainer: {
        marginHorizontal: 10,
        marginVertical: 20

    },
    dContainer: {
        marginHorizontal: 10,
        marginVertical: 8
    },
    mtext: {
        fontWeight: "bold",
        color: '#010C06',
        fontSize: 20,
        marginTop: 140,
        marginLeft: 20

    },
    button: {
        backgroundColor: 'black',
        paddin: 10,
        height: 50,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    fpassword: {
        textAlign: 'right',
        marginRight: 4,
        color: 'black',
        textDecorationLine: 'underline',

    },
    inputcontainer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 20,
        shadowColor: '#36485f',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
        position:'relative'
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 14,
        color: '#36485f',
    },
    icon: {
        position: 'absolute',
        right: 20,
        zIndex: 1
    },
    icon2: {
        position: 'absolute',
        right: 20,
        zIndex: 1
    },



    faccount: {
        textAlign: 'center',
        marginTop: 10,
    },
    Naccount: {
        color: '#0FA055'
    },
    dtext: {
        marginLeft: 20,
        marginTop: 10

    },
    label: {
        fontSize: 16,
        // marginBottom: 4,
        marginLeft: 2
    },
    input: {



    }

})


export default LoginScreen