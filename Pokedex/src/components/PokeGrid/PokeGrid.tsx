import PokeCard from '../PokeCard/PokeCard';
import useGetPokemons from '../../hooks/useGetPokemons';
import { ButtonContainer, GridContainer } from './styles';
import Button from '../Button/Button';
import { colors } from '../../resources/colors';
import useSearch from '../../hooks/useSearch';

interface PokeGridProps {
    selectedOption: string,
}

export const PokeGrid  = ({ selectedOption } : PokeGridProps) => {
    const { pokemons, loadMore } = useGetPokemons();
    const { searchedPokemons } = useSearch(selectedOption);

    return (
        <>
        <GridContainer>
            {selectedOption ? searchedPokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} />))
            : pokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} />))}
        </GridContainer>
        
        <ButtonContainer>
            {!selectedOption && <Button backgroundColor='white' textColor={colors.primary} onClick={loadMore}> Load More... </Button>}
        </ButtonContainer>
        </>
    );
};

export default PokeGrid;