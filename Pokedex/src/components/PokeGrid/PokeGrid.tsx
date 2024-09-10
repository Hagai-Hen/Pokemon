import PokeCard from '../PokeCard/PokeCard';
import { Pokemon } from '../../hooks/useGetPokemons';
import { GridContainer } from './styles';

interface PokeGridProps {
    pokemons: Pokemon[];
}

export const PokeGrid  = ({ pokemons } : PokeGridProps) => {
    return (
        <GridContainer>
            {pokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} />
            ))}
        </GridContainer>
    );
};

export default PokeGrid;