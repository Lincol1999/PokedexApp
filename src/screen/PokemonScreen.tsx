import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../Navigator/StackNavigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from 'react-native-vector-icons/Ionicons'

import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails'


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ route, navigation }: Props) => {

    const { top } = useSafeAreaInsets();


    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;

    const { isLoagind, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* HEADER CONTAINER */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,

            }}>
                {/* BACK BUTTON */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={35}
                    />
                </TouchableOpacity>

                {/* NOMBRE DEL POKEMON */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40
                }}>
                    {name + '\n'}#{id}
                </Text>

                {/* POKEBOLA BLANCA */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />
            </View>

            {/* Detalles y Loagind */}
            {
                isLoagind ?
                    (
                        <View style={styles.loadingIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
                            />
                        </View>
                    )

                    : <PokemonDetails pokemon={pokemon} />
            }



        </View>
    )
}

export const styles = StyleSheet.create({

    backButton: {
        position: 'absolute',
        left: 20,

    },

    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },

    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },

    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },

    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
});