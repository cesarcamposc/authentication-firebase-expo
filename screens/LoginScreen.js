import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase'

const LoginScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(()=>{
      const userState = auth().onAuthStateChanged(
        (user)=>{if(user){
          navigation.replace('Home')}
        }
      );

      return userState;
    },[])

    const handleLogin = () =>{
      auth().signInWithEmailAndPassword(email,password)
      .then((userCredentials)=>{
        const user = userCredentials.user;
      }).catch((error) => alert(error.message));
    }

    const handleRegister = () =>{
      auth().createUserWithEmailAndPassword(email,password)
      .then((userCredentials)=>{
        const user = userCredentials.user;
      }).catch((error) => alert(error.message));
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login/Register</Text>
        </View>

        <View style = {styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(text) => {setEmail(text)}}
            value={email}
            keyboardType='email-address'
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            onChangeText={(text) => {setPassword(text)}}
            value={password}
            secureTextEntry = {true}
          />
        </View>

        <View style = {styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style = {styles.button}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRegister} style = {[styles.button, styles.buttonregister]}>
                <Text style = {styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
  },

  inputContainer: {
    width: '80%',
  },

  input: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  40,
  },

  button: {
    backgroundColor: 'green',
    width: 100,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonregister: {
    backgroundColor: '#45CBA3',
    marginLeft: 15,
    borderColor: 'green',   
  }
})