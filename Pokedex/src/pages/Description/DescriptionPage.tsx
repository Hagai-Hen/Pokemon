import useGetPokemons from "../../hooks/useGetPokemons";
import PokeDesc from "../../components/PokeDesc/PokeDesc";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { DESC_PAGE_TITLE } from "../../resources/resources";
import { generateRandomPointInPolygon } from "../../resources/utils";
import { TLV_POLYGON } from "../../resources/locations";

interface DescriptionPageProps {
  setActivePage: (page: string) => void;
}

function DescriptionPage({ setActivePage }: DescriptionPageProps) {
  setActivePage(DESC_PAGE_TITLE);
  const { name } = useParams<{ name: string }>();
  const { pokemons } = useGetPokemons();
  const { searchedPokemons } = useSearch(name);

  var pokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
  );
  if (!pokemon) {
    pokemon = searchedPokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
    );
  }

  const pokemonLocation = generateRandomPointInPolygon(TLV_POLYGON);

  return (
    <>
      <PokeDesc pokemon={pokemon} pokemonLocation={pokemonLocation}/>
    </>
  );
}

export default DescriptionPage;
