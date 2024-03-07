
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({ route, navigation }) => {
  const { userData } = route.params;
  return (
    <View style={styles.container}>
     <Text>{userData.firstName}</Text>
     <Text>{userData.lastName}</Text>
     <Text>{userData.department}</Text>
     <Text>{userData.pinCode}</Text>
     <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Login') }>
            <Text style={styles.buttonText}>Выйти</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '40%',

    height: 40,
    backgroundColor: 'red',
    
    display: 'flex',
    justifyContent: 'center'

  },
  buttonText: {
    textAlign: 'center'
  }
})
export default HomeScreen; 

