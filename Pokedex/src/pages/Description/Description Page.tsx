import useGetPokemons from "../../hooks/useGetPokemons";
import PokeDesc from "../../components/PokeDesc/PokeDesc";
import { useParams } from "react-router-dom";

interface DescriptionPageProps {
  setActivePage: (page: string) => void;
}

function DescriptionPage({ setActivePage }: DescriptionPageProps) {
  const { name } = useParams<{ name: string }>();
  const { pokemons } = useGetPokemons();
  const pokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
  );
  console.log(pokemon);
  return (
    <>
      <PokeDesc pokemon={pokemon} />
    </>
  );
}

export default DescriptionPage;