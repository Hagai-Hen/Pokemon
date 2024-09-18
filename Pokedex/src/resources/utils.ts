import { Coordinate, Pokemon } from "./interfaces";
import { PokemonApiCall } from "./interfaces";

const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
  const response = await fetch(url);
  const data = await response.json();

  const speciesResponse = await fetch(`${data.species.url}`);
  const speciesData = await speciesResponse.json();
  const flavorTextEntries: FlavorTextEntry[] = speciesData.flavor_text_entries;

  const englishFlavorTextEntry = flavorTextEntries.find(
    (entry) => entry.language.name === "en"
  );

  const description = englishFlavorTextEntry
    ? englishFlavorTextEntry.flavor_text
    : "Description not available";

  const stats = data.stats.reduce(
    (acc: { [key: string]: number }, stat: Stat) => {
      acc[stat.stat.name] = stat.base_stat;
      return acc;
    },
    {}
  );

  const total = data.stats.reduce(
    (sum: number, stat: Stat) => sum + stat.base_stat,
    0
  );
  stats["total"] = total;

  return {
    name: capitalizeFirstLetter(data.name),
    id: data.id,
    types: data.types.map((t: PokemonApiCall) =>
      capitalizeFirstLetter(t.type.name)
    ),
    picture: data.sprites.front_default,
    stats: stats,
    description: description,
  };
};

const isPointInPolygon = (
  point: Coordinate,
  polygon: Coordinate[]
): boolean => {
  let isInside = false;
  const { lat, lng } = point;
  const n = polygon.length;

  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = polygon[i].lat,
      yi = polygon[i].lng;
    const xj = polygon[j].lat,
      yj = polygon[j].lng;

    const intersect =
      yi > lng !== yj > lng && lat < ((xj - xi) * (lng - yi)) / (yj - yi) + xi;
    if (intersect) isInside = !isInside;
  }

  return isInside;
};

export const generateRandomPointInPolygon = (
  polygon: Coordinate[]
): Coordinate => {
    
  const latitudes = polygon.map((p) => p.lat);
  const longitudes = polygon.map((p) => p.lng);
  const latMin = Math.min(...latitudes);
  const latMax = Math.max(...latitudes);
  const lngMin = Math.min(...longitudes);
  const lngMax = Math.max(...longitudes);

  let point: Coordinate;
  do {
    point = {
      lat: latMin + Math.random() * (latMax - latMin),
      lng: lngMin + Math.random() * (lngMax - lngMin),
    };
  } while (!isPointInPolygon(point, polygon));

  return point;
};
