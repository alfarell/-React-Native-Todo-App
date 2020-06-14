import React, { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { TodoContext } from './TodoContext';

const InputForm = () => {
    const { submitTodo } = useContext(TodoContext);
    const [inputText, setInputText] = useState('');

    const handleSubmit = () => {
        submitTodo(inputText);
        setInputText('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                placeholder='Enter text...'
                multiline
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button title='ADD' onPress={handleSubmit} />
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    form: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
});
