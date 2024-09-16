import useGetPokemons from "../../hooks/useGetPokemons";
import PokeDesc from "../../components/PokeDesc/PokeDesc";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { useEffect } from "react";
import { DESC_PAGE_TITLE } from "../../resources/resources";

interface DescriptionPageProps {
  setActivePage: (page: string) => void;
}

function DescriptionPage({ setActivePage }: DescriptionPageProps) {

  useEffect(() => {
    setActivePage(DESC_PAGE_TITLE);
  }, []);

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
