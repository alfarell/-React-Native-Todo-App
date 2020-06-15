import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const DateTimePickerButton = (props) => {
    const {
        icon,
        iconSelected,
        iconColor,
        label,
        labelColor,
        mode,
        dateTimeContext,
        setDateTimeContext
    } = props;

    const [show, setShow] = useState(false);
    const [dateTime, setDateTime] = useState(new Date().getTime());

    const showDateTimePicker = () => {
        setShow(true);
    };

    const submitDateTime = (event, selected) => {
        const currentDate = dateTime || selected;
        setShow(false);
        setDateTime(currentDate);
        setDateTimeContext(moment(selected).format(
            mode === 'date'
                ? 'dddd, MMMM DD YYYY'
                : 'HH:mm'
        ));
    }

    return (
        <TouchableNativeFeedback onPress={showDateTimePicker}>
            <View style={styles.button}>
                <MaterialCommunityIcons
                    name={dateTimeContext === '' ? icon : iconSelected}
                    size={26}
                    color={iconColor}
                />
                <Text style={{ ...styles.label, color: labelColor }}>
                    {dateTimeContext === '' ? label : dateTimeContext}
                </Text>
                {show && (
                    <DateTimePicker
                        value={dateTime}
                        mode={mode}
                        display='default'
                        is24Hour={true}
                        onChange={submitDateTime}
                    />
                )}
            </View>
        </TouchableNativeFeedback>
    );
};

export default DateTimePickerButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    label: {
        fontSize: 16,
        marginLeft: 10
    }
});
