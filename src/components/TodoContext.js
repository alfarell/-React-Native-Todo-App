import React, { createContext, useState } from 'react';
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
                    key: Math.random().toString(),
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
    }

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
}

export default TodoContextProvider;
