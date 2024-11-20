import {
  ButtonWrapper,
  ButtonContainer,
  DescContainer,
  DescSection,
  IconContainer,
  IdContainer,
  LeftContainer,
  RightContainer,
  Separator,
  StatsContainer,
  StatsSection,
  TitleContainer,
  Container,
} from "./styles";
import { Pokemon } from "../../resources/interfaces";
import FavIcon from "../../assets/fav_icon.png";
import FavIconPressed from "../../assets/fav_icon_pressed.png";
import FavIconHover from "../../assets/fav_icon_hover.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/right_arrow.png";
import { colors, PokemonTypeColor } from "../../resources/colors";
import { ClearButton } from "../DropDown/styles";
import { HOME_ROUTE } from "../../resources/routes";
import { useState, useEffect } from "react";

import { FAV_LOCAL_STORAGE } from '../../resources/resources';

interface PokeDescProps {
  pokemon: Pokemon | undefined;
}

const getFavorites = () => {
    const savedSearches = localStorage.getItem(FAV_LOCAL_STORAGE);
    return savedSearches ? JSON.parse(savedSearches) : [];
  };

export const PokeDesc = ({ pokemon }: PokeDescProps) => {
  const [favorites, setFavorites] = useState<Pokemon[]>(getFavorites);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(HOME_ROUTE);
  };

  const isFavorite = favorites.some((fav) => fav.id === pokemon?.id);

  useEffect(() => {
    // Store options in local storage whenever they change
    localStorage.setItem(FAV_LOCAL_STORAGE, JSON.stringify(favorites));
  }, [favorites]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const handleFavClick = (pokemon: Pokemon) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = isFavorite
        ? prevFavorites.filter((fav) => fav.id !== pokemon.id) // Remove if already exists
        : [...prevFavorites, pokemon]; // Add if not exists

      return updatedFavorites;
    });
  };

  return (
    <Container>
      <ButtonWrapper>
        <img src={RightArrow} onClick={handleClick} />
        <ClearButton onClick={handleClick}>Home Page</ClearButton>
      </ButtonWrapper>
      <DescContainer>
        <IdContainer>#{pokemon.id}</IdContainer>
        <IconContainer>
          <img
            src={
              isHovered ? FavIconHover : isFavorite ? FavIconPressed : FavIcon
            }
            onClick={() => handleFavClick(pokemon)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </IconContainer>
        <LeftContainer>
          <img src={pokemon.picture} />
          <TitleContainer>{pokemon.name}</TitleContainer>
          <ButtonContainer>
            {pokemon.types.map((type) => (
              <Button
                backgroundColor={PokemonTypeColor[type] || colors.primary}
              >
                {type}
              </Button>
            ))}
          </ButtonContainer>
        </LeftContainer>
        <Separator />
        <RightContainer>
          <h2>Description</h2>
          <DescSection>
            <p>{pokemon.description}</p>
          </DescSection>
          <h2>Stats</h2>
          <StatsContainer>
            <StatsSection>
              <p>HP: {pokemon.stats.hp}</p>
              <p>Attack: {pokemon.stats.attack}</p>
              <p>Defense : {pokemon.stats.defense}</p>
            </StatsSection>
            <StatsSection>
              <p>Special Atk: {pokemon.stats["special-attack"]}</p>
              <p>Attack: {pokemon.stats["special-defense"]}</p>
              <p>Speed: {pokemon.stats.speed}</p>
            </StatsSection>
            <StatsSection>
              <p>Total: {pokemon.stats.total}</p>
            </StatsSection>
          </StatsContainer>
        </RightContainer>
      </DescContainer>
    </Container>
  );
};

export default PokeDesc;
