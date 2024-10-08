import { useEffect, useState } from 'react';
import { getAllPokemonsCall } from '../resources/urls';
import { Pokemon, PokemonApiCall } from '../resources/interfaces';
import { fetchPokemonDetails } from '../resources/utils';

const useSearch = (query: string | undefined) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [searchedPokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const getPokemons = async () => {
            if (query) {
                try {
                    setLoading(true);
                    const response = await fetch(getAllPokemonsCall);
                    const data = await response.json();
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    const filteredPokemons = data.results.filter((p: PokemonApiCall, i: number) => {        
                        return (i+1) === Number(query) || p.name.toLowerCase().includes(query.toLowerCase());
                    });

                    const pokemonDetailPromisses = filteredPokemons.map((item: PokemonApiCall) => fetchPokemonDetails(item.url));
                    const pokemonsWithDetails = await Promise.all(pokemonDetailPromisses);

                    setPokemons(pokemonsWithDetails);
                    
                } catch (error) {
                    console.error("Error getting pokemons for search:", error);
                } finally {
                    setLoading(false);
                }
            }
        }
        getPokemons();
    }, [query]);

    return { searchedPokemons, loading };
}

export default useSearch;