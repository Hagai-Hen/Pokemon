import PokeCard from "../PokeCard/PokeCard";
import useGetPokemons from "../../hooks/useGetPokemons";
import { ButtonContainer, GridContainer } from "./styles";
import Button from "../Button/Button";
import { colors } from "../../resources/colors";
import useSearch from "../../hooks/useSearch";

interface PokeGridProps {
  searchQuery: string;
}

export const PokeGrid = ({ searchQuery }: PokeGridProps) => {
  const { pokemons, loadMore } = useGetPokemons();
  const { searchedPokemons } = useSearch(searchQuery);

  return (
    <>
      <GridContainer>
        {searchQuery
          ? searchedPokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)
          : pokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)}
      </GridContainer>

      <ButtonContainer>
        {!searchQuery && (
          <Button
            backgroundColor="white"
            textColor={colors.primary}
            onClick={loadMore}
            border={true}
          >
            Load More...
          </Button>
        )}
      </ButtonContainer>
    </>
  );
};

export default PokeGrid;