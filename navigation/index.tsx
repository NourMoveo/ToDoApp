import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Tasks from "../screens/Tasks";
import { RootStackParamList } from "../types";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from "react-native";
import FontSize from "../constants/FontSize";

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
            <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
    );
}

export function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Tasks" screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Tasks"
                component={RootNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image style={{ width: "10%", height: "10%" }} source={require('../photos/HomePage/Hero.png')} />
                            <Text style={styles.tabsText}>Home</Text>
                        </View>
                    ),
                }
                }
            />
            <Tab.Screen
                name="Home"
                component={RootNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ display: 'flex', justifyContent: 'center' }}>
                            {/* <Image source={require('../photos/TasksIcon.png')} /> */}
                            <Text style={styles.tabsText}>Tasks</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabsText: {
        fontFamily: "poppins-semiBold",
        fontSize: FontSize.medium,
        maxWidth: "50%",
        textAlign: "left",
    },
});