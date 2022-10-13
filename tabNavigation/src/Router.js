import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from './pages/First';
import Second from './pages/Second';



const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="First" component={First} options={{headerShown:false}} />
        <Tab.Screen name="Second" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}