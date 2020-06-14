import React, { createContext, useState, useEffect } from 'react';
import { ToastAndroid, Keyboard } from 'react-native';
import uuid from 'react-native-uuid';
import { AppColors } from '../utils/AppConst';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [inputText, setInputText] = useState('');

    const submitTodo = () => {
        const date = new Date();

        if (inputText) {
            setTodoList([
                ...todoList,
                {
                    key: uuid.v1(),
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
        Keyboard.dismiss();
    };

    useEffect(() => {
        if (todoList.length !== 0) showTodoAddedToast();
    }, [todoList]);

    const showTodoAddedToast = () => {
        ToastAndroid.show(
            'New To-do added to list',
            ToastAndroid.SHORT
        )
    };

    return (
        <TodoContext.Provider value={{ todoList, inputText, setInputText, submitTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

const randomColor = () => {
    const colors = [
        AppColors.Primary,
        AppColors.Secondary,
        AppColors.Green,
        AppColors.Red,
    ];
    const randomIndex = Math.floor(Math.random() * 4) + 0;

    return colors[randomIndex];
};

export default TodoContextProvider;
