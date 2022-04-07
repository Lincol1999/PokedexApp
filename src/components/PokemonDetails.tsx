import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull, Type } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject, //Tomamos desde el punto iniciar de la pantalla
            }}
        >
            {/* Types y peso del Pokemon*/}
            <View style={{ ...styles.container, marginTop: 380 }}>

                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text style={{ ...styles.regularText, marginRight: 10 }} key={type.name}>{type.name}</Text>
                        ))
                    }
                </View>

                {/* Peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>

            </View>

            {/* Types */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text style={{ ...styles.regularText, marginRight: 10 }} key={ability.name}>{ability.name}</Text>
                        ))
                    }
                </View>
            </View>

            {/* Movimientos */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text style={{ ...styles.regularText, marginRight: 10 }} key={move.name}>{move.name}</Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}>
                                    {stat.stat.name + ':'}
                                </Text>
                                <Text style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold'

                                }} key={stat.base_stat}>
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>

                {/* Sprit Final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export const styles = StyleSheet.create({

    basicSprite: {
        height: 100,
        width: 100
    },

    container: {
        marginHorizontal: 20
    },

    regularText: {
        fontSize: 19
    },

    title: {
        fontSize: 22,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});