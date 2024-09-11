import { ButtonContainer, DescContainer, DescSection, IconContainer, IdContainer, LeftContainer, RightContainer, Separator, StatsContainer, StatsSection, TitleContainer, } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';
import FavIcon from '../../assets/fav_icon.png';
import { ClearButton } from '../DropDown/styles';

interface PokeDescProps {
    pokemon: Pokemon;
    setSelectedPokemon: (pokemon: any) => void;
}

export const PokeDesc  = ({ pokemon, setSelectedPokemon } : PokeDescProps) => {
    const handleClick = () => { 
        setSelectedPokemon(null);

    }

    return (
        <>
            <ClearButton onClick={handleClick}>Home Page</ClearButton>
            <DescContainer>
                <IdContainer>#{pokemon.id}</IdContainer>
                <IconContainer><img src={FavIcon} /></IconContainer>
                <LeftContainer>
                    <img src={pokemon.picture} />
                    <TitleContainer>{pokemon.name}</TitleContainer>
                </LeftContainer>
                <Separator />
                <RightContainer>
                    <h2>Description</h2>
                        <DescSection>
                        <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
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
        </>
    );
};

export default PokeDesc;