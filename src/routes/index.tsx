import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../pages/SignIn';
import DashboardRoutes from './dashboard.routes';

const Sign = createStackNavigator();

export const SignRoutes: React.FC = () => (
  <NavigationContainer>
    <Sign.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#72afb5' },
      }}
    >
      <Sign.Screen name="SignIn" component={SignIn} />
      <Sign.Screen name="Dashboard" component={DashboardRoutes} />
    </Sign.Navigator>
  </NavigationContainer>
);
