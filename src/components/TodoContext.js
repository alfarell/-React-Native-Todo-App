import React, { createContext, useState } from 'react';
import { AppColors } from '../utils/AppConst';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoList, setTodoList] = useState([]);

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

    const submitTodo = (inputText) => {
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
    }

    return (
        <TodoContext.Provider value={{ todoList, submitTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
