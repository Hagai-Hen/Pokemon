import { useEffect, useState } from 'react';

interface Pokemon {
    name: string;
    id: number;
    types: string[];
    picture: string;
    stats: {
        [key: string]: number;
    };
}

const useGetPokemons = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        // Function to fetch pokemons

        const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
            const response = await fetch(url);
            const data = await response.json();

            const stats = data.stats.reduce((acc: { [key: string]: number }, stat: any) => {
                acc[stat.stat.name] = stat.base_stat;
                return acc;
            }, {});

            // Calculate the total of all base stats
            const total = data.stats.reduce((sum: number, stat: any) => sum + stat.base_stat, 0);

            // Add total to stats
            stats['total'] = total;

            return {
                name: data.name,
                id: data.id,
                types: data.types.map((t: any) => t.type.name),
                picture: data.sprites.front_default,
                stats: stats
            };
        };

        const getPokemons = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
                const data = await response.json();
                
                const pokemonDetailsPromises = data.results.map((item: any) => fetchPokemonDetails(item.url));
                const pokemonList = await Promise.all(pokemonDetailsPromises);

                setPokemons(pokemonList);
                if (data.error) {
                    throw new Error(data.error);
                }

            } catch (error)
             {
                console.log("Error getting code blocks:", error);
            } finally {
                setLoading(false);
            };

        }
        getPokemons();
    }, [setPokemons]); // runs when setCodeBlocks changes
    return { pokemons, setPokemons, loading };
}

export default useGetPokemons;