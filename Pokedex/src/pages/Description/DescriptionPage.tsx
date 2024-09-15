import useGetPokemons from "../../hooks/useGetPokemons";
import PokeDesc from "../../components/PokeDesc/PokeDesc";
import { useParams } from "react-router-dom";

interface DescriptionPageProps {
  setActivePage: (page: string) => void;
}

function DescriptionPage({ setActivePage }: DescriptionPageProps) {
  setActivePage("Description");
  const { name } = useParams<{ name: string }>();
  const { pokemons } = useGetPokemons();
  const pokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
  );
  return (
    <>
      <PokeDesc pokemon={pokemon} />
    </>
  );
}

export default DescriptionPage;