import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Tasks from "../screens/Tasks";
import { RootStackParamList } from "../../types";
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from "react-native";
import FontSize from "../constants/FontSize";
import Photos from "../constants/Photos";
import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";
const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    },
};

export default function Navigation() {
    return (
        <NavigationContainer theme={theme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Tasks" component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}
const CustomBottomTabs = (props: BottomTabBarProps
) => {
    return <CustomBottomTab {...props} />;
};
export function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            tabBar={CustomBottomTabs}
            initialRouteName="Tasks" screenOptions={{
                headerShown: false,
            }} >
            <Tab.Screen
                name="Tasks"
                component={Tasks}
            />
            <Tab.Screen
                name="Home" component={Home}
            />

        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabsText: {
        fontFamily: "poppins",
        fontSize: FontSize.xSmall,
        maxWidth: "50%",
        textAlign: "left",
    },
});