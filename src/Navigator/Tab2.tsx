import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { PokemonScreen } from '../screen/PokemonScreen';
import { SearchScreen } from '../screen/SearchScreen';
import { RootStackParams } from './StackNavigator';


const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab2.Screen name='HomeScreen' component={SearchScreen}></Tab2.Screen>
            <Tab2.Screen name='PokemonScreen' component={PokemonScreen}></Tab2.Screen>
        </Tab2.Navigator>
    )
}