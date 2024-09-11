import PokeCard from '../PokeCard/PokeCard';
import useGetPokemons from '../../hooks/useGetPokemons';
import { ButtonContainer, GridContainer } from './styles';
import Button from '../Button/Button';
import { useState } from 'react';

interface PokeGridProps {
    selectedOption: string,
}

export const PokeGrid  = ({ selectedOption } : PokeGridProps) => {
    const { pokemons, loadMore } = useGetPokemons();
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const filteredPokemons = pokemons.filter(p => {
        
        if (selectedOption.trim() === '') {
            return true;
        }
    
        return p.id === Number(selectedOption) || p.name.toLowerCase().includes(selectedOption.toLowerCase());
    });

    return (
        <>
        {!isClicked &&
        <GridContainer>
            {filteredPokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} isClicked={isClicked} setIsClicked={setIsClicked}/>
            ))}
        </GridContainer> }
        
        <ButtonContainer>
            {!selectedOption &&<Button backgroundColor='white' textColor='#373299' onClick={loadMore}> Load More... </Button>}
        </ButtonContainer>
        </>
    );
};

export default PokeGrid;