import { HomePageButton, ButtonWrapper ,ButtonContainer, DescContainer, DescSection, IconContainer, IdContainer, LeftContainer, RightContainer, Separator, StatsContainer, StatsSection, TitleContainer, Container, } from './styles';
import { Pokemon } from '../../resources/interfaces';
import FavIcon from '../../assets/fav_icon.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import RightArrow from '../../assets/right_arrow.png';
import { colors, PokemonTypeColor } from '../../resources/colors';
import { useState, useEffect } from 'react';
import { FAV_LOCAL_STORAGE } from '../../resources/resources';
import { HOME_PAGE_ROUTE } from '../../resources/routes';
interface PokeDescProps {
    pokemon: Pokemon | undefined;
}

const getFavorites = () => {
    const savedSearches = localStorage.getItem(FAV_LOCAL_STORAGE);
    return savedSearches ? JSON.parse(savedSearches) : [];
  };

export const PokeDesc  = ({ pokemon } : PokeDescProps) => {
    const [favorites, setFavorites] = useState<Pokemon[]>(getFavorites);
    const navigate = useNavigate();
    const handleClick = () => { 
        navigate(HOME_PAGE_ROUTE);
    }

    useEffect(() => {
        // Store options in local storage whenever they change
        localStorage.setItem(FAV_LOCAL_STORAGE, JSON.stringify(favorites));
    }, [favorites]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }
    
    const handleFavClick = (pokemon: Pokemon) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some(fav => fav.id === pokemon.id);
        
            const updatedFavorites = isFavorite
                ? prevFavorites.filter(fav => fav.id !== pokemon.id) // Remove if already exists
                : [...prevFavorites, pokemon]; // Add if not exists
        
            return updatedFavorites;
        });
    };

    return (
        <Container>
            <ButtonWrapper>
                <img src={RightArrow} onClick={handleClick}/>
                <HomePageButton onClick={handleClick}>Home Page</HomePageButton>
            </ButtonWrapper>
            <DescContainer>
                <IdContainer>#{pokemon.id}</IdContainer>
                <IconContainer><img src={FavIcon} onClick={() => handleFavClick(pokemon)}/></IconContainer>
                <LeftContainer>
                    <img src={pokemon.picture} />
                    <TitleContainer>{pokemon.name}</TitleContainer>
                    <ButtonContainer>
                        {pokemon.types.map((type, i) => (<Button key={i} $backgroundColor={PokemonTypeColor[type] || colors.primary}>{type}</Button>))}
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
                            <p>Special Atk: {pokemon.stats['special-attack']}</p>
                            <p>Attack: {pokemon.stats['special-defense']}</p>
                            <p>Speed : {pokemon.stats.speed}</p>
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