
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Vibration  } from 'react-native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import DeleteButton from '../assets/DeleteButton';
import Logo from '../assets/Logo';



const LoginScreen = ({ navigation }) => {
  const [pin, setPin] = useState('')
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  const WriteDataFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName: "Adil",
        lastName: "MI",
        department: "IT",
        pinCode: 9999
      });
  
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  


  

  const handlePinPress = (number) => {
    if (pin.length < 4) {
      setPin(pin + number);
    }
  };

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };
  useEffect(() => {
    const checkPin = async () => {
        if (pin.length === 4) {
            try {
                const usersRef = collection(db, 'users');
                const q = query(usersRef, where('pinCode', '==', parseInt(pin)));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                  const userData = querySnapshot.docs[0].data();
                  setPin('')
                  navigation.navigate('Home', { userData });
                } else {
                    Vibration.vibrate();
                    setPin('');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                Alert.alert('Error', 'Произошла ошибка при входе в систему. Повторите попытку позже');

            }
        }
    };

    checkPin();
}, [pin]);

  


  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.subTitle}>Код быстрого доступа </Text>
      <TextInput
        style={[styles.pinDisplay, ]}
        value={pin.replace(/./g, '*')}
        editable={false}
        placeholder='****'
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleDeletePress()}>
              
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePinPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button} onPress={() => handleDeletePress()}>
              <DeleteButton/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDisplay: {
    textAlign: 'center',
    fontSize: 60,
    width: '100%',
    marginBottom: 20,
    color: '#A066CB',
    letterSpacing: 10
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 14,
    color: '#4D4C4C'
  }

})
export default LoginScreen; 

