import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksPage from '../screens/Tasks';
import AddTask from '../screens/AddTask';
import Routes from '../constants/Routes'; // Assuming this is correctly defined
import { RootStackParamList } from '../types'; // Assuming this is correctly defined
import Settings from '../screens/Setting';
import SettingsDetails from '../screens/SettingsDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'Settings'} component={SettingsDetails} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
