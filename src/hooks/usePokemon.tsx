import { useEffect, useState } from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';


//Recibimos el id del pokemon que decidimos mostrar
export const usePokemon = (id: string) => {

    const [isLoagind, setIsLoagind] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoagind(false);
    }

    //Disparamos la peticion http
    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isLoagind,
        pokemon
    }
}