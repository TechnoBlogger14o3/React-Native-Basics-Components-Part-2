import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
    return ( 
        <View style= {styles.header}>
            <Text style ={styles.headerTitle}>{props.title}</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
})
export default Header;