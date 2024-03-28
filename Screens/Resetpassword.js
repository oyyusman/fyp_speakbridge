import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'

const Resetpassword = () => {
    const [email, setEmail] = useState('');
    const handleForgetPassword = async () => {
        try {
            // Make a POST request to your backend API with the email
            const response = await axios.post('http://192.168.18.40:3000/forget-password', { email });

            // Handle the response from the backend
            console.log(response.data); // Log the response for debugging

            // Display a success message to the user
            Alert.alert('Reset Password Link Sent', 'An email with instructions to reset your password has been sent to your email address.');

        } catch (error) {
            // Handle errors
            // Check if the error is a response from the server
            if (error.response) {
                console.log('Server responded with a non-2xx status:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error setting up the request:', error.message);
            } // Log the error for debugging

            // Display an error message to the user
            Alert.alert('Error', 'Failed to send reset password link. Please try again later.');
        }
    };



    return (
        <View>
            <Text style={styles.mtext}>Reset Password</Text>
            <View style={styles.container}>
                <Text style={styles.dtext} >Please enter you email to reset your password</Text>
                <View style={styles.mContainer}>
                    <View style={styles.inputcontainer} >
                        <TextInput
                            style={styles.input}
                            placeholder=""
                            value={email}
                            keyboardType="email-address" // This sets the keyboard to email input type
                            autoCapitalize="none" // Prevents automatic capitalization of the first letter
                            onChangeText={setEmail}
                            autoCorrect={false}
                            autoFocus={true}



                        />
                        <Icon name="envelope-o" size={18} color="black" style={styles.icon} />

                    </View>

                </View>

                <TouchableOpacity style={styles.button} onPress={() => handleForgetPassword()}  >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    mContainer: {
        marginHorizontal: 10,
        marginVertical: 20

    },
    // 

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
        position: 'relative'
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
        // textAlign:'right',
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


export default Resetpassword