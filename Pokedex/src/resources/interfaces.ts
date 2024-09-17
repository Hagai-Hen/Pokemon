export interface Pokemon {
    name: string;
    id: number;
    types: string[];
    picture: string;
    stats: {
        [key: string]: number;
    };
    description: string;
}

export interface PokemonApiCall {
    url: string;
    name: string;
    type: {
        name: string;
    }
}