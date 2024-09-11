import { DescContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';

interface PokeCardProps {
    pokemon: Pokemon;
}

export const PokeDesc  = ({ pokemon } : PokeCardProps) => {
    return (
        <>
            <DescContainer>
                <IdContainer>#{pokemon.id}</IdContainer>
                <img src={pokemon.picture} />
                <TitleContainer>{pokemon.name}</TitleContainer>
            </DescContainer>
        </>
    );
};

export default PokeDesc;