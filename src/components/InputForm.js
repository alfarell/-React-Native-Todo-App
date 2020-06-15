import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { TodoContext } from '../services/TodoContext';

const InputForm = ({ inputText, setInputText }) => {
    return (
        <View style={styles.form}>
            <TextInput
                multiline
                numberOfLines={10}
                textAlignVertical='top'
                placeholder='What are you planning?'
                style={styles.inputForm}
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
        </View>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    inputForm: {
        padding: 10
    }
});
