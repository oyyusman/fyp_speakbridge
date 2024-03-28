import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import LoginScreen from "./LoginScreen";
import Signupscreen from './Signupscreen'
import Homescreen2 from './Homescreen2'
import UpdateProfile from './UpdateProfile'
import Forgetpassword from './Forgetpassword'
import Homescreen from './Homescreen'
import Resetpassword from './Resetpassword'
import Newpostscreeen from "./Newpostscreeen";
import OnboardingScreen from "./OnboardingScreen";
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Homescreen2}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon1 name="home" size={24} color="black" />
                            ) : (
                                <Icon2 name="home" size={24} color="black" />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Thread"
                    component={Newpostscreeen}
                    options={{
                        tabBarLabel: "Create",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon3 name="create" size={24} color="black" />
                            ) : (
                                <Icon3 name="create-outline" size={24} color="black" />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Activity"
                    component={Resetpassword}
                    options={{
                        tabBarLabel: "Activity",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon2 name="heart" size={24} color="black" />
                            ) : (
                                <Icon2 name="hearto" size={24} color="black" />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Homescreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon3 name="person" size={24} color="black" />
                            ) : (
                                <Icon3 name="person-outline" size={24} color="black" />
                            ),
                    }}
                />
            </Tab.Navigator>
        );
    }
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='OnboardingScreen'>
                <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }} />
                <Stack.Screen name="Newpostscreen" component={Newpostscreeen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Signupscreen" component={Signupscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Homescreen2" component={Homescreen2} options={{ headerShown: false }} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Forgetpassword" component={Forgetpassword} options={{ headerShown: false }} />
                <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />



            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
