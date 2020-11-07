import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import ListResidencias from '../pages/ListResidencias';
import Galeria from '../pages/Galeria';
import Agenda from '../pages/Agenda';
import Perfil from '../pages/Perfil';
// import Dashboard from '../pages/Dashboard';

const Dashboard = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => (
  <Dashboard.Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },

      tabStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
      },

      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },

      labelStyle: {
        fontSize: 13,
        marginLeft: 8,
        marginRight: 8,
      },
      // Quando a aba e texto não tiver selectionada
      inactiveBackgroundColor: '#fafafc',
      inactiveTintColor: '#c1bccc',

      // Quando a aba e texto tiver selecionada
      activeBackgroundColor: '#ebebf5',
      activeTintColor: '#72afb5',
    }}
  >
    <Dashboard.Screen
      options={{
        tabBarLabel: 'vistorias',
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Icon name="home" size={size} color={focused ? '#72afb5' : color} />
          );
        },
      }}
      name="ListResidenciais"
      component={ListResidencias}
    />
    <Dashboard.Screen
      options={{
        tabBarLabel: 'galeria',
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Icon
              name="camera"
              size={size}
              color={focused ? '#72afb5' : color}
            />
          );
        },
      }}
      name="Galeria"
      component={Galeria}
    />
    <Dashboard.Screen
      options={{
        tabBarLabel: 'agenda',
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Icon
              name="calendar"
              size={size}
              color={focused ? '#72afb5' : color}
            />
          );
        },
      }}
      name="Agenda"
      component={Agenda}
    />
    <Dashboard.Screen
      options={{
        tabBarLabel: 'meu espaço',
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Icon
              name="users"
              size={size}
              color={focused ? '#72afb5' : color}
            />
          );
        },
      }}
      name="Perfil"
      component={Perfil}
    />
  </Dashboard.Navigator>
);

export default DashboardRoutes;
