import PokeCard from "../PokeCard/PokeCard";
import useGetPokemons from "../../hooks/useGetPokemons";
import { ButtonContainer, GridContainer } from "./styles";
import Button from "../Button/Button";
import { colors } from "../../resources/colors";
import useSearch from "../../hooks/useSearch";
import { Pokemon } from "../../resources/interfaces";
import { useMemo } from "react";
import { FAV_LOCAL_STORAGE } from "../../resources/resources";

interface PokeGridProps {
  selectedOption?: string;
  $isFav?: boolean;
}

const getFavorites = () => {
  const savedSearches = localStorage.getItem(FAV_LOCAL_STORAGE);
  return savedSearches ? JSON.parse(savedSearches) : [];
};

export const PokeGrid = ({ selectedOption, $isFav=false }: PokeGridProps) => {
  const { pokemons, loadMore } = useGetPokemons();
  const { searchedPokemons } = useSearch(selectedOption);

  const favorites = useMemo(() => getFavorites(), []);

  return (
    <>
      <GridContainer $isFav={$isFav}>
        {$isFav 
            ? favorites.map((p: Pokemon) => <PokeCard key={p.id} pokemon={p} />)
            : (selectedOption
                ? searchedPokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)
                : pokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)
            )
        }
      </GridContainer>

      <ButtonContainer>
        {!selectedOption && !$isFav && (
          <Button
            $backgroundColor="white"
            $textColor={colors.primary}
            onClick={loadMore}
            $border={true}
          >
            Load More...
          </Button>
        )}
      </ButtonContainer>
    </>
  );
};

export default PokeGrid;