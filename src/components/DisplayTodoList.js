import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppColors } from '../utils/AppConst';

const DisplayTodoList = ({ data }) => {
    return (
        <View style={styles.todoList}>
            <FlatList
                data={data}
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
    todoCard: {
        justifyContent: 'center',
        height: 70,
        margin: 5,
        paddingHorizontal: 10,
        borderLeftWidth: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        elevation: 3
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 12,
        color: 'grey'
    }
});
