import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <Image source={require('./node_modules/images/logoStart.png')} style={styles.logo} />
            <Text style={styles.title}>Your book companion)</Text>
    </View>
        );

    };
};
const styles = StyleSheet.create( {
    wrap: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex:1,
        color: 'grey',
        fontSize: 30,
        fontWeight: '200',
        alignSelf: 'center' ,
        justifyContent: 'flex-end',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200'
    },
    logo: {
        flex: 10,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        resizeMode:'contain',
        borderColor: 'black',

    }
});