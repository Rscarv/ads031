import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Tarefa from './src/pages/Tarefas';
import NovaTarefa from './src/pages/NovaTarefa';
import Details from './src/pages/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen
         name="Tarefa"
         component={Tarefa}
         options={{
           headerTintColor:"#D2691E"
         }}
        />
        <Stack.Screen
         name="Nova Tarefa"
         component={NovaTarefa}
         options={{
           headerTintColor:"#D2691E"
         }}
        />
        <Stack.Screen
         name="Details"
         component={Details}
         options={{
           headerTintColor:"#D2691E"
         }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


