import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppColors } from '../utils/AppConst';
import { TodoContext } from '../services/TodoContext';
import ListItem from './ListItem';

const DisplayTodoList = () => {
    const { todoList } = useContext(TodoContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <FlatList
                data={todoList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItem item={item} />}
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
    }
});
