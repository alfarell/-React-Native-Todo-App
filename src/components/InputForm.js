import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { TodoContext } from './TodoContext';

const InputForm = () => {
    const { inputText, setInputText, submitTodo } = useContext(TodoContext);

    return (
        <View style={styles.form}>
            <TextInput
                placeholder='Enter text...'
                multiline
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button title='ADD' onPress={submitTodo} />
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
