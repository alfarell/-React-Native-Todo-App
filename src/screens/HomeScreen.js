import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import DisplayTodoList from '../components/DisplayTodoList';
import InputForm from '../components/InputForm';
import TodoContextProvider from '../components/TodoContext';

const HomeScreen = () => {
    return (
        <TodoContextProvider>
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <InputForm />
                <DisplayTodoList />
            </View>
        </TodoContextProvider>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
