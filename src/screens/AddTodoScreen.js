import React, { useContext } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

import { TodoContext } from '../services/TodoContext';
import DateTimePickerButton from '../components/DateTimePickerButton';
import { AppColors } from '../utils/AppConst';

const AddTodoScreen = ({ navigation }) => {
    navigation.setOptions({
        title: 'Add new To-do',
        headerBackTitle: 'cancel'
    });

    const {
        inputText,
        setInputText,
        date,
        time,
        setDate,
        setTime,
        submitTodo
    } = useContext(TodoContext);

    const handleSubmit = () => {
        if (inputText && date && time) {
            submitTodo();
            navigation.navigate('HomeScreen');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                testID='input-todo'
                multiline
                numberOfLines={10}
                textAlignVertical='top'
                placeholder='What are you planning?'
                style={styles.inputForm}
                value={inputText}
                onChangeText={setInputText}
            />
            <DateTimePickerButton
                icon='calendar-blank'
                iconSelected='calendar-check-outline'
                label='Select Date'
                iconColor={AppColors.Primary}
                labelColor={AppColors.Primary}
                mode='date'
                dateTimeContext={date}
                setDateTimeContext={setDate}
            />
            <DateTimePickerButton
                icon='clock'
                iconSelected='clock-outline'
                label='Select Time'
                iconColor={AppColors.Secondary}
                labelColor={AppColors.Secondary}
                mode='time'
                dateTimeContext={time}
                setDateTimeContext={setTime}
            />
            <View style={styles.button}>
                <Button testID='submit-todo' title='Add' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputForm: {
        padding: 10
    },
    button: {
        margin: 10
    }
});
