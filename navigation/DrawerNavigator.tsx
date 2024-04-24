import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import TasksPage from '../screens/Tasks';
import AddTask from '../screens/AddTask';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import { RootStackParamList } from '../types';

const Drawer = createDrawerNavigator<RootStackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.onPrimary,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={'Home'}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          //home icon
        }}
      />

      <Drawer.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />

      <Drawer.Screen
        name={'Register'}
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
