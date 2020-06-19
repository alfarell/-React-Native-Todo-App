import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import AddTodoScreen from '../src/screens/AddTodoScreen';
import TodoContextProvider from '../src/services/TodoContext';


describe('add todo screen test', () => {
    it('renders correctly', async () => {
        const { getByTestId } = render(
            <TodoContextProvider>
                <AddTodoScreen />
            </TodoContextProvider>
        );

        fireEvent.changeText(getByTestId('input-todo'), 'test input todo');

        await act(async () => {
            await getByTestId('show-date-picker').props.onClick();
            await getByTestId('date-picker').props.onChange();
            await getByTestId('show-time-picker').props.onClick();
            await getByTestId('time-picker').props.onChange();
            await getByTestId('submit-todo').props.onClick();
        });

        expect(getByTestId('input-todo').props.value).toEqual('');
        expect(getByTestId('date-picker').props.value).toEqual('');
        expect(getByTestId('time-picker').props.value).toEqual('');
    });
})
