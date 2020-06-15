import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AppColors } from '../utils/AppConst';
import { TodoContext } from '../services/TodoContext';
import ListItem from './ListItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const DisplayTodoList = () => {
    const { todoList } = useContext(TodoContext);
    const navigation = useNavigation();

    const addNewTodo = () => navigation.navigate('AddTodoScreen');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Todo List</Text>
                <TouchableOpacity style={styles.addButton} onPress={addNewTodo}>
                    <MaterialCommunityIcons name='plus' size={20} color='#fff' />
                    <Text style={styles.buttonTitle}>Add new To-do</Text>
                </TouchableOpacity>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: AppColors.Primary,
        borderBottomWidth: 2,
        paddingVertical: 10,
        marginBottom: 5
    },
    title: {
        flex: 1,
        fontSize: 20,
        width: '50%',
        marginHorizontal: 10,
    },
    addButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        backgroundColor: AppColors.Primary,
        borderRadius: 100
    },
    buttonTitle: {
        color: '#fff'
    },
    container: {
        flex: 1
    }
});
