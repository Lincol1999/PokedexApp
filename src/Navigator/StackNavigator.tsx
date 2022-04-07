import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../screen/HomeScreen'
import { PokemonScreen } from '../screen/PokemonScreen'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='PokemonScreen' component={PokemonScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
