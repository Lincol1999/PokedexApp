import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'

import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    // console.log(simplePokemonList);


    const { top } = useSafeAreaInsets();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={{
                alignItems: 'center'
            }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2} //El numero de columnas
                    data={simplePokemonList}
                    keyExtractor={(item) => item.id}

                    //Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Pokedex</Text>
                    )}
                    renderItem={({ item }) => (
                        <PokemonCard pokemon={item} />
                        // <FadeInImage

                        //     uri={item.picture}
                        //     style={{
                        //         width: 100,
                        //         height: 100
                        //     }}
                        // />
                    )}


                    //Infinite Scroll
                    onEndReached={loadPokemons} //Cuando este cerca del final llamamos a loadPokemons
                    onEndReachedThreshold={0.4} //Es el 40% del scroll

                    //Footer
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{
                                height: 100,
                            }}
                            size={20}
                            color='grey'
                        />
                    )}
                />

            </View>

        </>
    )
}
