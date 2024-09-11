import { CardContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';

interface PokeCardProps {
    pokemon: Pokemon;
    onCardClick: (pokemon: Pokemon) => void;
}

export const PokeCard  = ({ pokemon, onCardClick } : PokeCardProps) => {
    const handleClick = () => {
        onCardClick(pokemon);
    }
    return (
        <>
            <CardContainer onClick={handleClick}>
                <IdContainer>#{pokemon.id}</IdContainer>
                <img src={pokemon.picture} />
                <TitleContainer>{pokemon.name}</TitleContainer>
            </CardContainer>
        </>
    );
};

export default PokeCard;