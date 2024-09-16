import { CardContainer, IdContainer, TitleContainer } from './styles';
import { Pokemon } from '../../resources/interfaces';
import { useNavigate } from 'react-router-dom';

interface PokeCardProps {
    pokemon: Pokemon;
}

export const PokeCard  = ({ pokemon } : PokeCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/desc/${pokemon.name}`, { replace: true });
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