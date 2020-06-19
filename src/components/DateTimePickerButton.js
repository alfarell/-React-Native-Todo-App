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
    const [dateTimePicker, setDateTimePicker] = useState(new Date().getTime());

    const showDateTimePicker = () => {
        setShow(true);
    };

    const submitDateTime = (event, selectedDateTime) => {
        const currentDate = selectedDateTime || dateTimePicker;
        setShow(false);
        setDateTimePicker(currentDate);
        setDateTimeContext(currentDate);
    };

    const formatedDateTime = moment(dateTimeContext).format(
        mode === 'date'
            ? 'dddd - MMMM DD, YYYY'
            : 'HH:mm'
    );

    return (
        <TouchableNativeFeedback testID={`show-${mode}-picker`} onPress={showDateTimePicker}>
            <View style={styles.button}>
                <MaterialCommunityIcons
                    name={dateTimeContext === '' ? icon : iconSelected}
                    size={26}
                    color={iconColor}
                />
                <Text style={{ ...styles.label, color: labelColor }}>
                    {dateTimeContext === '' ? label : formatedDateTime}
                </Text>
                {show && (
                    <DateTimePicker
                        testID={`${mode}-picker`}
                        value={dateTimePicker}
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
