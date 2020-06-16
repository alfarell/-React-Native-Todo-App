import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const IconText = ({ icon, iconSize, iconColor, label, mode }) => {
    const formatedDateTime = moment(label).format(
        mode === 'date'
            ? 'dddd - MMMM DD, YYYY'
            : 'HH:mm'
    );

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
            <Text style={styles.text}>{formatedDateTime}</Text>
        </View>
    );
};

export default IconText;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2
    },
    text: {
        fontSize: 12,
        color: 'grey'
    },
});
