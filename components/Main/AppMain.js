import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TabBarIOS, Image } from 'react-native';
import LoginScreen from '../Login/login';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from '../Home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Profile/profile';
import ChatScreen from '../Chat/chat';


const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style = {{
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress = {onPress}
    >
        <View style={{
            top: -5,
            width: 85,
            height: 85,
            borderRadius: 42.5,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>

)

const AppMain = () => {
    const loggedIn = useSelector((state) =>  state.login.status)
    if (loggedIn == false) {
        return(
            <LoginScreen></LoginScreen>
        )
    }
    
    else {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions= {{
                        showLabel: false,
                        style : {
                            position: 'absolute',
                            elevation: 0,
                            bottom: 15,
                            left: 25,
                            right: 25,
                            backgroundColor: "#ffffff",
                            borderRadius: 15,
                            // borderTopLeftRadius: 15,
                            // borderTopRightRadius: 15,
                            height: 70,
                            ...styles.shadow

                        }
                    }}
                >
                    <Tab.Screen name="Find" component={HomeScreen} options = {{
                        tabBarIcon: ({focused}) => (
                            <View style = {{ alignItems : 'center', justifyContent: 'center'}}>
                                <Image 
                                source = {require('../../assets/compare-match.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}>

                                </Image>

                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Chat" component={ChatScreen} options = {{
                        tabBarIcon: ({focused}) => (
                            <Image 
                            source = {require('../../assets/chat.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 30,
                                height: 30,
                                tintColor: '#fff'
                            }}>

                            </Image>
                        ),
                        tabBarButton: (props) => (
                            <CustomTabBarButton {...props}></CustomTabBarButton>
                        )

                    
                    }}/>
                    <Tab.Screen name="Profile" component={ProfileScreen} options = {{
                        tabBarIcon: ({focused}) => (
                            <View style = {{ alignItems : 'center', justifyContent: 'center'}}>
                                <Image 
                                source = {require('../../assets/user.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}>

                                </Image>

                            </View>
                        )
                    }}/>

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default AppMain