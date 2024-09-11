import PokeCard from '../PokeCard/PokeCard';
import useGetPokemons from '../../hooks/useGetPokemons';
import { ButtonContainer, GridContainer } from './styles';
import Button from '../Button/Button';

interface PokeGridProps {
    selectedOption: string,
}

export const PokeGrid  = ({ selectedOption } : PokeGridProps) => {
    const { pokemons, loadMore } = useGetPokemons(); // Use the hook to manage Pokémon data


    const filteredPokemons = pokemons.filter(p => {
        
        if (selectedOption.trim() === '') {
            return true;
        }
    
        return p.id === Number(selectedOption) || p.name.toLowerCase().includes(selectedOption.toLowerCase());
    });

    return (
        <>
        <GridContainer>
            {filteredPokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} />
            ))}
        </GridContainer>
        
        <ButtonContainer>
            {!selectedOption &&<Button backgroundColor='white' textColor='#373299' onClick={loadMore}> Load More... </Button>}
        </ButtonContainer>
        </>
    );
};

export default PokeGrid;