import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppColors } from '../utils/AppConst';
import { TodoContext } from './TodoContext';

const DisplayTodoList = () => {
    const { todoList } = useContext(TodoContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <FlatList
                data={todoList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    const { todo, date, time, style: { listColor } } = item;

                    return (
                        <View style={{ ...styles.todoCard, borderLeftColor: listColor }}>
                            <Text style={styles.title}>{todo}</Text>
                            <Text style={styles.subtitle}>{`${date} : ${time}`}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};

export default DisplayTodoList;

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        width: '50%',
        marginVertical: 10,
        marginHorizontal: 10,
        borderBottomColor: AppColors.Primary,
        borderBottomWidth: 2
    },
    container: {
        flex: 1
    },
    todoCard: {
        justifyContent: 'center',
        minHeight: 70,
        margin: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderLeftWidth: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        elevation: 2
    },
    title: {
        fontSize: 16,
    },
    subtitle: {
        fontSize: 12,
        color: 'grey'
    }
});
