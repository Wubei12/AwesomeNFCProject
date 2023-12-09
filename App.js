import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NFCScreen} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NFC"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="NFC" component={NFCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
