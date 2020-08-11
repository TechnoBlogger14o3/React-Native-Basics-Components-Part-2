import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return ( 
        <View style = {styles.screen}>
            <Text>Start a New game !</Text>
            <View style = {styles.inputContainer}>
                <Text style = {styles.title}>Select a Number</Text>
                <TextInput></TextInput>
                <View style = {styles.buttonContainer}>
                    <Button title ='RESET' onPress ={() => {}}/>
                    <Button title ='CONFIRM' onPress ={() => {}} />
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }, 
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 30
    }, 
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;