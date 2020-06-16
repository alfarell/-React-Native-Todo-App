import React, { createContext, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import uuid from 'react-native-uuid';
import { randomColor } from '../utils/GenerateRandomColor';
import { showToastMessage } from '../components/ToastMessage';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [inputText, setInputText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [todoList, setTodoList] = useState([]);
    let [numberOfTodo, setNumberOfTodo] = useState(0);

    const submitTodo = () => {
        if (inputText) {
            setTodoList([
                ...todoList,
                {
                    key: uuid.v1(),
                    todo: inputText,
                    date: date,
                    time: time,
                    style: {
                        listColor: randomColor()
                    }
                }
            ]);
        }

        setInputText('');
        setDate('');
        setTime('');
        Keyboard.dismiss();
    };

    const deleteTodo = (todoId) => {
        setTodoList(
            todoList.filter((todo) => {
                return todo.key != todoId;
            })
        );
    };

    useEffect(() => {
        if (todoList.length > numberOfTodo) {
            showToastMessage('New To-do added to list');
            setNumberOfTodo(numberOfTodo + 1);
        }
        if (todoList.length < numberOfTodo) {
            showToastMessage('To-do deleted');
            setNumberOfTodo(numberOfTodo - 1);
        }
    }, [todoList]);

    return (
        <TodoContext.Provider value={{
            inputText,
            setInputText,
            date,
            setDate,
            time,
            setTime,
            todoList,
            submitTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
