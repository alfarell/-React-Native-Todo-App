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
                    {todoList.map(item => <ListItemComponent {...item} id={item.key} handleDelete={deleteTodo} />)}
                </View>
            </View>
        );
    };

    const ListItemComponent = ({ id, todo, date, time, handleDelete }) => {
        return (
            <TouchableNativeFeedback testID='todo-item' onPress={() => handleDelete(id)}>
                <View>
                    <Text testID='todo'>{todo}</Text>
                    <Text testID='date'>{date}</Text>
                    <Text testID='time'>{time}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    it('should insert text into inputText when input form is filled', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');

        expect(getByTestId('input-todo').props.value).toEqual('testing to-do list');
    });

    it('should set the date time when date time setting is selected', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        expect(getByTestId('selected-date').props.children).toEqual('');
        expect(getByTestId('selected-time').props.children).toEqual('');

        act(() => {
            getByTestId('select-date').props.onClick();
            getByTestId('select-time').props.onClick();
        })

        expect(getByTestId('selected-date').props.children).toEqual('1 jan 2020');
        expect(getByTestId('selected-time').props.children).toEqual('00:00');
    });

    it('should add new todo into todo list', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');
        act(() => {
            getByTestId('select-date').props.onClick();
            getByTestId('select-time').props.onClick();
        })

        expect(getByTestId('input-todo').props.value).toEqual('testing to-do list');
        expect(getByTestId('selected-date').props.children).toEqual('1 jan 2020');
        expect(getByTestId('selected-time').props.children).toEqual('00:00');

        act(() => {
            getByTestId('submit-todo').props.onClick();
        })

        expect(getByTestId('input-todo').props.value).toEqual('');
        expect(getByTestId('selected-date').props.children).toEqual('');
        expect(getByTestId('selected-time').props.children).toEqual('');
        expect(getByTestId('todo-list').props.children).not.toBeNull();
        expect(getByTestId('todo-list').props.children.length).not.toEqual(0);
        expect(getByTestId('todo').props.children).toEqual('testing to-do list');
        expect(getByTestId('date').props.children).toEqual('1 jan 2020');
        expect(getByTestId('time').props.children).toEqual('00:00');
    });

    it('should not add new todo when todo text is empty', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        act(() => {
            getByTestId('select-date').props.onClick();
            getByTestId('select-time').props.onClick();
            getByTestId('submit-todo').props.onClick();
        });

        expect(getByTestId('todo-list').props.children).toStrictEqual([]);
    });

    it('should not add new todo when date is not selected', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');
        act(() => {
            getByTestId('select-time').props.onClick();
            getByTestId('submit-todo').props.onClick();
        });

        expect(getByTestId('todo-list').props.children).toStrictEqual([]);
    });

    it('should not add new todo when time is not selected', () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');
        act(() => {
            getByTestId('select-date').props.onClick();
            getByTestId('submit-todo').props.onClick();
        });

        expect(getByTestId('todo-list').props.children).toStrictEqual([]);
    });

    it('should delete todo when deleteTodo is called', async () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <TestComponent />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'testing to-do list');
        await act(async () => {
            await getByTestId('select-date').props.onClick();
            await getByTestId('select-time').props.onClick();
            await getByTestId('submit-todo').props.onClick();
        });

        expect(getByTestId('todo-list').props.children).not.toBeNull();
        expect(getByTestId('todo-list').props.children.length).not.toEqual(0);

        await act(async () => {
            await getByTestId('todo-item').props.onClick();
        });

        expect(getByTestId('todo-list').props.children).toStrictEqual([]);
        expect(getByTestId('todo-list').props.children.length).toEqual(0);
    });
}); 