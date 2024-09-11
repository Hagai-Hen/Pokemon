import { useEffect, useState, useCallback } from 'react';

export interface Pokemon {
    name: string;
    id: number;
    types: string[];
    picture: string;
    stats: {
        [key: string]: number;
    };
}

const useGetPokemons = (initialUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=12') => {
    const [loading, setLoading] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [next, setNext] = useState<string | null>(initialUrl);

    const capitalizeFirstLetter = (str: string): string => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const fetchPokemonDetails = useCallback(async (url: string): Promise<Pokemon> => {
        const response = await fetch(url);
        const data = await response.json();

        const stats = data.stats.reduce((acc: { [key: string]: number }, stat: any) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
        }, {});
        const total = data.stats.reduce((sum: number, stat: any) => sum + stat.base_stat, 0);
        stats['total'] = total;

        return {
            name: capitalizeFirstLetter(data.name),
            id: data.id,
            types: data.types.map((t: any) => capitalizeFirstLetter(t.type.name)),
            picture: data.sprites.front_default,
            stats: stats
        };
    }, []);

    const getPokemons = useCallback(async (url: string) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const pokemonDetailsPromises = data.results.map((item: any) => fetchPokemonDetails(item.url));
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
        if (initialUrl) {
            getPokemons(initialUrl);
        }
    }, [initialUrl, getPokemons]);

    return { pokemons, loading, loadMore, next };
}

export default useGetPokemons;