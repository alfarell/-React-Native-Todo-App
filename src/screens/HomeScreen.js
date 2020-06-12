import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput, Button } from 'react-native';
import { Logo } from '../components/Logo';
import DisplayTodoList from '../components/DisplayTodoList';
import { randomColor } from '../utils/AppConst';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerTitle: () => {
            return (
                <View style={{ width: 150 }}>
                    <Logo fontSize={14} circleSize={{ height: 25, width: 25 }} />
                </View>
            )
        },
    });

    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = () => {
        const date = new Date();

        if (inputText) {
            setTodoList([
                ...todoList,
                {
                    key: Math.random().toString(),
                    todo: inputText,
                    date: date.toLocaleDateString(),
                    time: date.toLocaleTimeString(),
                    style: {
                        listColor: randomColor()
                    }
                }
            ]);
        }

        setInputText('');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={styles.form}>
                <TextInput placeholder='Enter text...' value={inputText} onChangeText={(text) => setInputText(text)} />
                <Button title='ADD' onPress={handleSubmit} />
            </View>
            <View style={styles.todoList}>
                <DisplayTodoList data={todoList} />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    form: {
        marginVertical: 5,
        flex: 1,
    },
    todoList: {
        flex: 4
    }
});
