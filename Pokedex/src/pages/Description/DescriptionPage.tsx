import useGetPokemons from "../../hooks/useGetPokemons";
import PokeDesc from "../../components/PokeDesc/PokeDesc";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

interface DescriptionPageProps {
  setActivePage: (page: string) => void;
}

function DescriptionPage({ setActivePage }: DescriptionPageProps) {
  setActivePage("Description");
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

  return (
    <>
      <PokeDesc pokemon={pokemon} />
    </>
  );
}

export default DescriptionPage;
