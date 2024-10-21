import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';

// import RegistrationForm from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.safeArea}>
      {/* <RegistrationForm /> */}
      <LoginScreen/>
      </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

