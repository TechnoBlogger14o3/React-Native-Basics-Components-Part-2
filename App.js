import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style = {styles.screenView}>
      <Header title = "Guess A Number"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
 screenView: {
   flex: 1
 }
});
