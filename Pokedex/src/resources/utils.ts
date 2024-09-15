import { Pokemon } from "./interfaces";

export const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
    const response = await fetch(url);
    const data = await response.json();

    const stats = data.stats.reduce((acc: { [key: string]: number }, stat: any) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
    }, {});
    const total = data.stats.reduce((sum: number, stat: any) => sum + stat.base_stat, 0);
    stats['total'] = total;

    return {
        name: data.name,
        id: data.id,
        types: data.types.map((t: any) => t.type.name),
        picture: data.sprites.front_default,
        stats: stats
    };
};