import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { IconButton } from 'react-native-paper';
import { AppColors } from '../utils/AppConst';
import { TodoContext } from '../services/TodoContext';
import IconText from './IconText';

const ListItem = ({ item }) => {
    const { key, todo, date, time, style: { listColor } } = item;
    const { deleteTodo } = useContext(TodoContext);

    return (
        <Swipeable renderRightActions={() => {
            return (
                <View style={styles.rightSwipeItems}>
                    <IconButton
                        icon='delete'
                        color='#fff'
                        style={styles.deleteButton}
                        onPress={() => deleteTodo(key)} />
                </View>
            )
        }}>
            <View style={{ ...styles.todoCard, borderLeftColor: listColor }}>
                <Text style={styles.title}>{todo}</Text>
                <View style={styles.subtitle}>
                    <IconText
                        icon='calendar-check-outline'
                        iconSize={16}
                        iconColor={AppColors.Primary}
                        label={date}
                        mode='date'
                    />
                    <IconText
                        icon='clock-outline'
                        iconSize={16}
                        iconColor={AppColors.Secondary}
                        label={time}
                        mode='time'
                    />
                </View>
            </View>
        </Swipeable>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    todoCard: {
        justifyContent: 'center',
        minHeight: 70,
        margin: 2,
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightSwipeItems: {
        justifyContent: 'center',
    },
    deleteButton: {
        backgroundColor: AppColors.Red
    }
});
