
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './tela-dashboard';
import Gerenciar from './tela-gerenciar-assinaturas';
import Adicionar from './tela-adicionar-assinatura';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Gerenciar" component={Gerenciar} />
        <Tab.Screen name="Adicionar" component={Adicionar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}