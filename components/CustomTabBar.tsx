import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
interface CustomTabBarProps extends BottomTabBarProps { }

const CustomTabBar: React.FC<CustomTabBarProps> = (props) => {
    return (
        <View>
            <View style={styles.tabBar} />
            <BottomTabBar {...props} />
        </View>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 38,
        height: 20,
        // backgroundColor: COLORS.white,
        borderRadius: 10,
        // shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
});
