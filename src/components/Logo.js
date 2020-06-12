import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import { AppColors } from '../utils/AppConst'

const logoText = [
    { key: 1, letter: 'T', color: AppColors.Red },
    { key: 2, letter: 'O', color: AppColors.Secondary },
    { key: 3, letter: 'D', color: AppColors.Green },
    { key: 4, letter: 'O', color: AppColors.Primary },
];

export const Logo = ({ fontSize, spaceBetween, circleSize: { width, height } }) => {
    return (
        <View style={styles.logo}>
            {logoText.map(data =>
                <View
                    style={{
                        ...styles.fontBox,
                        backgroundColor: data.color,
                        marginHorizontal: spaceBetween,
                        width: width,
                        height: height
                    }}
                    key={data.key}
                >
                    <Text style={{ ...styles.fonts, fontSize: fontSize }}>{data.letter}</Text>
                </View>
            )}
        </View>
    );
};

export const LogoAnimation = () => {
    let translateUpValue = new Animated.Value(0);
    let bounceValue = new Animated.Value(0);

    useEffect(() => {
        bounceEffect();
    }, []);

    const bounceEffect = () => {
        translateUpValue.setValue(0);
        bounceValue.setValue(0);

        const translateUpAnimation = Animated.timing(translateUpValue, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true,
        });

        const bouncingAnimation = Animated.spring(bounceValue, {
            toValue: 30,
            stiffness: 500,
            damping: 15,
            mass: 3,
            useNativeDriver: true
        });

        Animated.sequence([translateUpAnimation, bouncingAnimation]).start(() => bounceEffect());
    };

    const setBounce = translateUpValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30]
    });

    return (
        <Animated.View style={{ transform: [{ translateY: setBounce }, { translateY: bounceValue }] }}>
            <Logo fontSize={30} spaceBetween={10} circleSize={{ width: 50, height: 50 }} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    fontBox: {
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: AppColors.Dark,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fonts: {
        color: 'white',
    },
});

