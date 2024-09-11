import PokeCard from '../PokeCard/PokeCard';
import { Pokemon } from '../../hooks/useGetPokemons';
import { GridContainer } from './styles';

interface PokeGridProps {
    pokemons: Pokemon[];
    selectedOption: string,
}

export const PokeGrid  = ({ pokemons, selectedOption } : PokeGridProps) => {

    const filteredPokemons = pokemons.filter(p => {
        
        if (selectedOption.trim() === '') {
            return true;
        }
    
        return p.id === Number(selectedOption) || p.name.toLowerCase().includes(selectedOption.toLowerCase());
    });

    return (
        <GridContainer>
            {filteredPokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} />
            ))}
        </GridContainer>
    );
};

export default PokeGrid;