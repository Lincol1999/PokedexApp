import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])

    //Lo que hacemos con el useRef, inicia con los 40 primeros (1)
    //Luego vendra los otros 40, y se cargará en nextPageUrl (3)
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async () => {
        setIsLoading(true);
        //Peticion al enpoint, referente a la interface Pokemon
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next; //Aquí cargamos la sgte pagina en nextPageUrl 
        mapPokemonList(resp.data.results);
    }

    //Recibimos un argumento de tipo pokemonList
    const mapPokemonList = (pokemonList: Result[]) => {

        //creamos una constante que tendra como argumentos el name y el url
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            //https:/ / pokeapi.co / api / v2 / pokemon / 1 / --> vamos a tomar el ultimo valor ya que vendria ser el id
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2]; //Tomamos el id
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return { id, picture, name };
        });

        //Añadimos al setSimplePokemonList, para luego cargarlo en el simplePokemonList agregando los nuevos pokemones newPokemonList
        setSimplePokemonList([...simplePokemonList, ...newPokemonList]) //Si solo ponemos newPokemonList, obtendriamos solo la ultima pagina
        setIsLoading(false); //Se cancela el loading cuando temine de cargar la pagina 

    }

    useEffect(() => {
        //Apenas llegue a los 40, llamará a la sgte pagina. (2)
        loadPokemons();
    }, []);


    return {
        isLoading,
        simplePokemonList,
        loadPokemons
    }

}
