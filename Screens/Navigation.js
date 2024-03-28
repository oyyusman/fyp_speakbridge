import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from './Homescreen'
import Newpostscreeen from './Newpostscreeen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './LoginScreen'
import Signupscreen from './Signupscreen'
import Homescreen2 from './Homescreen2'
import UpdateProfile from './UpdateProfile'
import Forgetpassword from './Forgetpassword'
import Resetpassword from './Resetpassword'
const Stack = createStackNavigator()

const screenOptions = {
    headerShow: false,
}
const SignedInStack = () => (
    
    <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
            <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }} />
            <Stack.Screen name="Newpostscreen" component={Newpostscreeen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signupscreen" component={Signupscreen} options={{ headerShown: false }} />
            <Stack.Screen name="Homescreen2" component={Homescreen2} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
            <Stack.Screen name="Forgetpassword" component={Forgetpassword} options={{ headerShown: false }} />
            <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ headerShown: false }} />






        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack

