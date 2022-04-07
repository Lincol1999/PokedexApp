import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native';

import { StackNavigator } from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();


export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarActiveTintColor: '#5856d6',
                    tabBarLabelStyle: {
                        marginBottom: (Platform.OS === 'ios') ? 0 : 10
                    },
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255,255,255,0.90)',
                        borderWidth: 0,
                        elevation: 0,
                        height: (Platform.OS === 'ios') ? 80 : 60
                    }
                }

            }

            sceneContainerStyle={{
                backgroundColor: 'white',

            }}



        >
            <Tab.Screen
                name='StackNavigator'
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='list-outline'
                        />
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='SearchScreen'
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='search-outline'
                        />
                    )
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}
