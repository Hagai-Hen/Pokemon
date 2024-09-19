import { ButtonWrapper, ButtonContainer, DescContainer, DescSection, IconContainer, IdContainer, LeftContainer, RightContainer, Separator, StatsContainer, StatsSection, TitleContainer, Container, LocationContainer, IconsContainer, DirectionsContainer } from './styles';
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
import DrivingIcon from '../../assets/car.png';
import TransportIcon from '../../assets/transport.png';
import BikeIcon from '../../assets/bike.png';
import PedestrianIcon from '../../assets/pedestrian.png';
import { DESCRIPTION, DIRECTIONS } from '../../resources/resources';
import { useCallback } from 'react';

interface PokeDescProps {
    pokemon: Pokemon | undefined;
    pokemonLocation: Coordinate;
}

export const PokeDesc = ({ pokemon, pokemonLocation }: PokeDescProps) => {

    const [showDirections, setShowDirections] = useState(false);
    const [chosenWay, setChosenWay] = useState('DRIVING');

    const handleShowDirections = useCallback(() => {
        setShowDirections(prev => !prev);
    }, []);

    const handleIconClick = useCallback((chosenWay: string) => {
        setChosenWay(chosenWay);
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(HOME_ROUTE);
    };

    if (!pokemon) {
        return <div>{DESCRIPTION.LOADING}</div>;
    }

    const formattedLat = pokemonLocation.lat.toFixed(5);
    const formattedLng = pokemonLocation.lng.toFixed(5);
    
    return (
        <Container>
            <ButtonWrapper>
                <img src={RightArrow} onClick={handleClick} />
                <ClearButton onClick={handleClick}>{DESCRIPTION.HOME_PAGE_BUTTON}</ClearButton>
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
                    <h2>{DESCRIPTION.TITLE}</h2>
                    <DescSection>
                        <p>{pokemon.description}</p>
                    </DescSection>
                    <h2>{DESCRIPTION.STATS}</h2>
                    <StatsContainer>
                        <StatsSection>
                            <p>{DESCRIPTION.HP} {pokemon.stats.hp}</p>
                            <p>{DESCRIPTION.ATT} {pokemon.stats.attack}</p>
                            <p>{DESCRIPTION.DEF} {pokemon.stats.defense}</p>
                        </StatsSection>
                        <StatsSection>
                            <p>{DESCRIPTION.S_ATT} {pokemon.stats['special-attack']}</p>
                            <p>{DESCRIPTION.S_DEF} {pokemon.stats['special-defense']}</p>
                            <p>{DESCRIPTION.SPEED} {pokemon.stats.speed}</p>
                        </StatsSection>
                        <StatsSection>
                            <p>{DESCRIPTION.TOTAL} {pokemon.stats.total}</p>
                        </StatsSection>
                    </StatsContainer>
                    <LocationContainer>
                        <h2>{DESCRIPTION.LOCATION}</h2>
                        {formattedLat}, {formattedLng}
                        <Button onClick={handleShowDirections}>{showDirections ? DESCRIPTION.HIDE_DIR : DESCRIPTION.SHOW_DIR }</Button>
                    </LocationContainer>
                </RightContainer>
            </DescContainer>
            {showDirections &&
                <DirectionsContainer>
                    <IconsContainer onClick={() => handleIconClick(DIRECTIONS.DRIVING)} $isActive={chosenWay === DIRECTIONS.DRIVING}>
                        <img src={DrivingIcon} />
                    </IconsContainer>
                    <IconsContainer onClick={() => handleIconClick(DIRECTIONS.TRANSIT)} $isActive={chosenWay === DIRECTIONS.TRANSIT}>
                        <img src={TransportIcon} />
                    </IconsContainer>
                    <IconsContainer onClick={() => handleIconClick(DIRECTIONS.BICYCLING)} $isActive={chosenWay === DIRECTIONS.BICYCLING}>
                        <img src={BikeIcon} />
                    </IconsContainer>
                    <IconsContainer onClick={() => handleIconClick(DIRECTIONS.WALKING)} $isActive={chosenWay === DIRECTIONS.WALKING}>
                        <img src={PedestrianIcon} />
                    </IconsContainer>
                </DirectionsContainer>
            }
            <Map pokemonLocation={pokemonLocation} showDirections={showDirections} pokemonPic={pokemon.picture} chosenWay={chosenWay}/>
        </Container>
    );
};

export default PokeDesc;