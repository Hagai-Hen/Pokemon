import { CardContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';

interface PokeCardProps {
    pokemon: Pokemon;
}

export const PokeCard  = ({ pokemon } : PokeCardProps) => {
    return (
        <>
            <CardContainer>
                <IdContainer>#{pokemon.id}</IdContainer>
                <img src={pokemon.picture} />
                <TitleContainer>{pokemon.name}</TitleContainer>
            </CardContainer>
        </>
    );
};

export default PokeCard;