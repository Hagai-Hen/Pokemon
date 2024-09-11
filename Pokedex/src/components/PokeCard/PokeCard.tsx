import { CardContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';
import PokeDesc from '../PokeDesc/PokeDesc';

interface PokeCardProps {
    pokemon: Pokemon;
    onCardClick: (pokemon: Pokemon) => void;
    isClicked: boolean;
    setIsClicked: (prev: any) => void;
}

export const PokeCard  = ({ pokemon, isClicked, setIsClicked, onCardClick } : PokeCardProps) => {
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