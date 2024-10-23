import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth()
    .signOut()
    .then(()=>{
      navigation.replace('Login');
    })
    .catch((error)=> alert(error.message));
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>El email es: {auth().currentUser?.email}</Text>
      <TouchableOpacity style = {styles.button} onPress={handleSignOut}>
        <Text style = {styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})