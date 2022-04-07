import { useNavigation, CommonActions } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const navigator = useNavigation()

    const windowsWidth = Dimensions.get('window').width;

    const [bgColor, setBgColor] = useState('grey');

    const isMounted = useRef(true);  //Si el componente esta montado


    //Obtenemos el color del pokemon para el card
    const getColor = async (uri: string) => {
        const colors = await ImageColors.getColors(uri, {})
        let colorPrimario;
        switch (colors.platform) {
            case 'android':
                colorPrimario = colors.dominant
                break;

            case 'ios':
                colorPrimario = colors.background
                break;

            default:
                break;

        }

        setBgColor(colorPrimario || 'grey')

        return [colorPrimario]
    }

    useEffect(() => {
        getColor(pokemon.picture)
        if (!isMounted.current) return;

        return () => {
            isMounted.current = false;
        }
    }, [])


    return (
        <TouchableOpacity
            onPress={() => navigator.dispatch(
                CommonActions.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color: bgColor
                })
            )}
            activeOpacity={0.9}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowsWidth * 0.4,
                backgroundColor: bgColor,
            }}>

                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage

                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    )
}


export const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },

    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,
    },

    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    },

    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    }
});