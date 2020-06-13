import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TodoContext } from './TodoContext';

const InputForm = () => {
    const [inputText, setInputText] = useState('');

    return (
        <TodoContext.Consumer>
            {(context) => {
                const { handleSubmit } = context;
                const onSubmit = () => {
                    handleSubmit(inputText);
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
                        <Button title='ADD' onPress={onSubmit} />
                    </View>
                );
            }}
        </TodoContext.Consumer>
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
