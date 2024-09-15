import PokeCard from "../PokeCard/PokeCard";
import useGetPokemons from "../../hooks/useGetPokemons";
import { ButtonContainer, GridContainer } from "./styles";
import Button from "../Button/Button";
import { colors } from "../../resources/colors";
import useSearch from "../../hooks/useSearch";
import { Pokemon } from "../../resources/interfaces";
import { useState } from "react";

interface PokeGridProps {
  selectedOption?: string;
  isFav?: boolean;
}

const getFavorites = () => {
  const savedSearches = localStorage.getItem('favorites');
  return savedSearches ? JSON.parse(savedSearches) : [];
};

export const PokeGrid = ({ selectedOption, isFav=false }: PokeGridProps) => {
  const { pokemons, loadMore } = useGetPokemons();
  const { searchedPokemons } = useSearch(selectedOption);
  const [favorites, setFavorites] = useState(getFavorites);


  return (
    <>
      <GridContainer>
        {isFav 
            ? favorites.map((p) => <PokeCard key={p.id} pokemon={p} />)
            : (selectedOption
                ? searchedPokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)
                : pokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)
            )
        }
      </GridContainer>

      <ButtonContainer>
        {!selectedOption && !isFav && (
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