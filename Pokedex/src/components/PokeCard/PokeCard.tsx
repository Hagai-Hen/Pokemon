import { CardContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../hooks/useGetPokemons';

interface PokeCardProps {
    pokemon: Pokemon;
    isClicked: boolean;
    setIsClicked: (prev: any) => void;
}

export const PokeCard  = ({ pokemon, isClicked, setIsClicked } : PokeCardProps) => {
    const handleClick = () => {
        const newBoolean = !isClicked;
        setIsClicked(newBoolean);
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