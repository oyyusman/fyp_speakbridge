import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
// You can use a different icon library

import axios from 'axios';
import { useNavigation } from '@react-navigation/core';



const Signupscreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [nameverify, setNameverify] = useState(false)
    const [email, setEmail] = useState('')
    const [emailverify, setEmailverify] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordverify, setPasswordverify] = useState(false)
    const [showpassword, setShowpassword] = useState(false)


    function handleSubmit() {
        const userdata = {
            name: name,
            email,
            password,
        };
        // if (nameverify && emailverify && passwordverify) {
        axios.post('http://192.168.18.40:3000/register', userdata)
            .then(response => {
                console.log(response.data)
                if (response.data.status == "ok") {
                    Alert.alert("registration Successfull")
                    console.log("registration successfull")
                    navigation.navigate('LoginScreen')
                }
                else {
                    Alert.alert("registration failed")
                    console.log("registration full")

                }

            })
            .catch(error => {
                console.log(error)
            })



        // }
        // else {
        //     Alert.alert("Please enter the valid details")
        // }



    }


    function handleName(e) {
        const namevar = e.nativeEvent.text;
        setName(namevar)
        setNameverify(false)
        if (namevar.length > 1) {
            setNameverify(true)

        }

    }

    function handlemail(e) {
        const emailvar = e.nativeEvent.text;
        setEmail(emailvar)
        setEmailverify(false);
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            .test(emailvar)) {
            setEmail(emailvar)
            setEmailverify(true)

        }


    }
    function hadlepassword(e) {
        const passwordvar = e.nativeEvent.text;
        setPassword(passwordvar)
        setPasswordverify(true)
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(passwordvar)) {
            setPassword(passwordvar)
            setPasswordverify(false)
        }
    }

    return (

        <View style={styles.container}>

            <Text style={styles.headerText}>Create Account</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}

                    placeholder="Name"
                    placeholderTextColor="#8e93a1"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChange={e => handleName(e)}


                />
                <Icon name="user" size={18} color="black" style={styles.icon} /> 

                
            </View>
            {name.length > 0 && name.length < 2 && (
                <Text style={{ color: 'red', fontSize: 12, marginLeft: 20 }}>
                    Name must be at least 2 characters
                </Text>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}

                    placeholder="Email Address"
                    placeholderTextColor="#8e93a1"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChange={e => handlemail(e)}


                />
                <Icon name="envelope-o" size={18} color="black" style={styles.icon} /> 


            </View>
            {email.length > 0 && !emailverify && (
                <Text style={{ color: 'red', fontSize: 12, marginLeft: 20 }}>
                    Enter proper email address

                </Text>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"

                    placeholderTextColor="#8e93a1"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChange={e => hadlepassword(e)}



                />

                 <Icon name="lock" size={18} color="black" style={styles.icon} /> 
            </View>
            {password.length < 1 ? null : passwordverify ? null : (
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password) ? null : (
                    <Text style={{ color: 'red', fontSize: 12, marginLeft: 20 }}>
                        Password must contain at least one uppercase letter, one lowercase letter, and one digit, and be at least 6 characters long.
                    </Text>
                )
            )}

            {/* <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Repeat Password"
                    placeholderTextColor="#8e93a1"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setRepeatPassword}
                />
                <Icon name="lock" size={18} color="black" style={styles.icon} />
            </View> */}

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}  >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff', // Set your desired background color
    },
    headerText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '700',
        // Adjust the weight as needed
        marginBottom: 50,

    },
    inputContainer: {
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
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 14,
        color: '#36485f',
    },
    icon: {
        marginLeft: 10,
    },
    button: {
        width: '100%', // Full width of the screen container
        backgroundColor: '#000', // Button color
        padding: 12, // Button size
        borderRadius: 30, // Rounded corners
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        // Spacing from the last element
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 4.65, // Shadow spread
        elevation: 4, // Elevation for Android
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 18, // Text size
        fontWeight: '600', // Text weight
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust this to increase or decrease space below the button
    },
    footerText: {
        fontSize: 14,
        color: '#8e93a1',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b5998',
        marginLeft: 5,
    },


});



export default Signupscreen