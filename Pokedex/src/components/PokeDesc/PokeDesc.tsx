import { ButtonWrapper, ButtonContainer, DescContainer, DescSection, IconContainer, IdContainer, LeftContainer, RightContainer, Separator, StatsContainer, StatsSection, TitleContainer, Container, LocationContainer } from './styles';
import { Coordinate, Pokemon } from '../../resources/interfaces';
import FavIcon from '../../assets/fav_icon.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import RightArrow from '../../assets/right_arrow.png';
import { colors, PokemonTypeColor } from '../../resources/colors';
import { ClearButton } from '../DropDown/styles';
import { HOME_ROUTE } from '../../resources/routes';
import Map from '../Map/Map';
import { useState } from 'react';

interface PokeDescProps {
    pokemon: Pokemon | undefined;
    pokemonLocation: Coordinate;
}

export const PokeDesc = ({ pokemon, pokemonLocation }: PokeDescProps) => {

    const [showDirections, setShowDirections] = useState(false);

    const handleShowDirections = () => {
        setShowDirections(prev => !prev);
    }

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate(HOME_ROUTE);
    };    

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const formattedLat = pokemonLocation.lat.toFixed(5);
    const formattedLng = pokemonLocation.lng.toFixed(5);
    
    return (
        <Container>
            <ButtonWrapper>
                <img src={RightArrow} onClick={handleClick} />
                <ClearButton onClick={handleClick}>Home Page</ClearButton>
            </ButtonWrapper>
            <DescContainer>
                <IdContainer>#{pokemon.id}</IdContainer>
                <IconContainer><img src={FavIcon} /></IconContainer>
                <LeftContainer>
                    <img src={pokemon.picture} />
                    <TitleContainer>{pokemon.name}</TitleContainer>
                    <ButtonContainer>
                        {pokemon.types.map(type => (<Button key={type} backgroundColor={PokemonTypeColor[type] || colors.primary}>{type}</Button>))}
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
                            <p>Defense: {pokemon.stats.defense}</p>
                        </StatsSection>
                        <StatsSection>
                            <p>Special Atk: {pokemon.stats['special-attack']}</p>
                            <p>Special Def: {pokemon.stats['special-defense']}</p>
                            <p>Speed: {pokemon.stats.speed}</p>
                        </StatsSection>
                        <StatsSection>
                            <p>Total: {pokemon.stats.total}</p>
                        </StatsSection>
                    </StatsContainer>
                    <LocationContainer>
                        <h2>Location</h2>
                        {formattedLat}, {formattedLng}
                        <Button onClick={handleShowDirections}>{showDirections ? 'Hide Directions' : 'Show Directions'}</Button>
                    </LocationContainer>
                </RightContainer>
            </DescContainer>
            <Map pokemonLocation={pokemonLocation} showDirections={showDirections} pokemonPic={pokemon.picture}/>
        </Container>
    );
};

export default PokeDesc;