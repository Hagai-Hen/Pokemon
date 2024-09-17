import { useEffect, useState, useCallback } from 'react';
import { initialApiCall } from '../resources/urls';
import { Pokemon } from '../resources/interfaces';
import { fetchPokemonDetails } from '../resources/utils';
import { PokemonApiCall } from '../resources/interfaces';

const useGetPokemons = (url: string = initialApiCall) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [next, setNext] = useState<string | null>(url);

    const getPokemons = useCallback(async (url: string) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const pokemonDetailsPromises = data.results.map((item: PokemonApiCall) => fetchPokemonDetails(item.url));
            const pokemonList = await Promise.all(pokemonDetailsPromises);
            setNext(data.next || null);

            setPokemons(prevPokemons => {
                const existingPokemonIds = new Set(prevPokemons.map(p => p.id));
                const newPokemons = pokemonList.filter(p => !existingPokemonIds.has(p.id));
                return [...prevPokemons, ...newPokemons];
            });
        } catch (error) {
            console.error("Error getting pokemons:", error);
        } finally {
            setLoading(false);
        }
    }, [fetchPokemonDetails]);

    const loadMore = useCallback(() => {
        if (next) {
            getPokemons(next);
        }
    }, [next, getPokemons]);

    useEffect(() => {
        if (url) {
            getPokemons(url);
        }
    }, [url, getPokemons]);

    return { pokemons, loading, loadMore, next };
}

export default useGetPokemons;