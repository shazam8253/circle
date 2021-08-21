import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { loginRequest } from '../../actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';


const styles = StyleSheet.create({
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      }, 
      container: {
        flex: 1,
        backgroundColor: "#003f5c",
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:70,
        color:"#fb5b5a",
        marginBottom: 40
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },

  });


const LoginScreen = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [trial, setTrial] = useState(0)
  const loggedIn = useSelector((state) =>  state.login.status)
  const jwtToken = useSelector((state) =>  state.login.jwt_token)
  const dispatch = useDispatch()

  const tryLogin = (email, password) => {
    console.log("clicked")
    dispatch(loginRequest(email, password))
  }
  
  
  

    return (
        <View style={styles.container}>
        <Text style={styles.logo}>Oops.</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c" 
            onChangeText={(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress = {() => tryLogin(email, password)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

  
      </View>
    )

    
}

export default LoginScreen