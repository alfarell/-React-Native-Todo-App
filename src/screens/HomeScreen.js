import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import DisplayTodoList from '../components/DisplayTodoList';
import { Logo } from '../components/Logo';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerTitle: () => {
            return (
                <View style={{ width: 120 }}>
                    <Logo fontSize={14} circleSize={{ height: 25, width: 25 }} />
                </View>
            );
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <DisplayTodoList />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
