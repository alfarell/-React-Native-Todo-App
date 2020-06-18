import React, { Fragment, useContext } from 'react';
import { mount } from 'enzyme';
import { render, fireEvent, act } from '@testing-library/react-native';
import { View, Text, TextInput, Button, TouchableNativeFeedback } from 'react-native';
import TodoContextProvider, { TodoContext } from '../src/services/TodoContext';
import AddTodoScreen from '../src/screens/AddTodoScreen';


describe('to-do services', () => {
    const TestComponent = () => {
        const {
            inputText,
            setInputText,
            date,
            setDate,
            time,
            setTime,
            todoList,
            submitTodo,
            deleteTodo
        } = useContext(TodoContext);

        const handleDate = () => setDate('1 jan 2020');
        const handleTime = () => setTime('00:00');

        return (
            <View>
                <TextInput testID='input-todo' value={inputText} onChangeText={setInputText} />
                <Text testID='selected-date'>{date}</Text>
                <Button
                    testID='select-date'
                    title='select date'
                    onPress={handleDate}
                />
                <Text testID='selected-time'>{time}</Text>
                <Button
                    testID='select-time'
                    title='select time'
                    onPress={handleTime}
                />
                <Button testID='submit-todo' title='add' onPress={submitTodo} />
                <View testID='todo-list'>
                    {todoList.map(item => <ListItemComponent id={item.key} {...item} />)}
                </View>
            </View>
        );
    };

    const ListItemComponent = ({ id, todo, date, time }) => {
        return (
            <TouchableNativeFeedback testID='todo-item' onPress={() => deleteTodo(id)}>
                <View>
                    <Text testID='todo'>{todo}</Text>
                    <Text testID='date'>{date}</Text>
                    <Text testID='time'>{time}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    const { getByTestId, queryByTestId, getByText } = render(
        <TodoContextProvider>
            <TestComponent />
        </TodoContextProvider>
    );

    it('should insert text into inputText when input form is filled', () => {

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');

        expect(getByTestId('input-todo').props.value).toEqual('testing to-do list');
    });

    it('should set the date time when date time setting is selected', () => {
        expect(getByTestId('selected-date').props.children).toEqual('');
        expect(getByTestId('selected-time').props.children).toEqual('');

        // fireEvent.press(getByTestId('select-date'));
        // fireEvent.press(getByTestId('select-time'));

        act(() => {
            getByTestId('select-date').props.onClick()
            getByTestId('select-time').props.onClick()
        })

        expect(getByTestId('selected-date').props.children).toEqual('1 jan 2020');
        expect(getByTestId('selected-time').props.children).toEqual('00:00');
    });

    it('should add new todo into todo list', () => {
        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');
        act(() => {
            getByTestId('select-date').props.onClick();
            getByTestId('select-time').props.onClick();
            getByTestId('submit-todo').props.onClick();
        })

        expect(getByTestId('todo-list').props.children).not.toBeNull();

    })
}); 