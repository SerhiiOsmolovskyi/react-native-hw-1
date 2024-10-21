import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import { AntDesign } from '@expo/vector-icons';


export default function RegistrationForm() {
  const [login, setLogin] = useState<string>(''); 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleRegister = (): void => {
    console.log('Login:', login);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      
    <ImageBackground source={require('../assets/images/PhotoBG.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <TouchableOpacity style={styles.addBtn}>
            <AntDesign name="plus" size={24} color="#FF6C00" />
          </TouchableOpacity>
      </View>
      <Text style={styles.title}>Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#BDBDBD"
        value={login}
        onChangeText={setLogin}
      />
      
      <TextInput
        style={styles.input}
        placeholder="your@email"
        placeholderTextColor="#BDBDBD"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
    <View style={styles.passwordContainer}>
        <TextInput
          style={{ ...styles.input, position: 'relative', width: '100%' }}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Використовуємо showPassword для контролю видимості пароля
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ?  'Hide password': 'Show password' }</Text>
        </TouchableOpacity>
      </View>
      
         <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text style={styles.loginText}>Already have an account? Login</Text>
            </View>
      </ImageBackground>
  );
}
