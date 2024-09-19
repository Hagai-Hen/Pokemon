export interface Pokemon {
  name: string;
  id: number;
  types: string[];
  picture: string;
  stats: {
    [key: string]: number;
  };
  description: string;
  location?: Coordinate;
}

export interface PokemonApiCall {
  url: string;
  name: string;
  type: {
    name: string;
  };
}
export interface Coordinate {
  lat: number;
  lng: number;
}
declare global {
  interface Window {
    google: {
      maps: {
        importLibrary: (library: string) => Promise<{
          Map: typeof google.maps.Map;
          AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement;
        }>;
      };
    };
  }
}
export {};
