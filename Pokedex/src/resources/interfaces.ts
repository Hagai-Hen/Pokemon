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