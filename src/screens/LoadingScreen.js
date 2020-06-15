import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { LogoAnimation } from '../components/Logo';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => navigation.replace('HomeScreen'), 3000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <LogoAnimation />
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
