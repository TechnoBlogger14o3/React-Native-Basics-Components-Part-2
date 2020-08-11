import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return ( 
        <View style = {styles.screen}>
            <Text>Start a New game !</Text>
            <Card style = {styles.inputContainer}>
                <Text style = {styles.title}>Select a Number</Text>
                <TextInput></TextInput>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title ='RESET' onPress ={() => {}} color="#c717fc" />
                    </View>
                    <View style = {styles.button}>
                        <Button title ='CONFIRM' onPress ={() => {}} color="#f7287b"/>
                    </View>
                </View>
            </Card>
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
    }, 
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }, 
    button: {
        width: 100
    }
});

export default StartGameScreen;