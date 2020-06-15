const { ToastAndroid } = require("react-native");

export const showToastMessage = (message) => {
    ToastAndroid.show(
        message,
        ToastAndroid.SHORT
    )
};