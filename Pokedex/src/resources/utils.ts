import { Pokemon } from "./interfaces";

const capitalizeFirstLetter = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
    const response = await fetch(url);
    const data = await response.json();

    const speciesResponse = await fetch(`${data.species.url}`);
    const speciesData = await speciesResponse.json();

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
        stats: stats,
        description: speciesData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text,

    };
};