import PokeCard from '../PokeCard/PokeCard';
import useGetPokemons from '../../hooks/useGetPokemons';
import { ButtonContainer, GridContainer } from './styles';
import Button from '../Button/Button';
import { useState } from 'react';
import { Pokemon } from '../../hooks/useGetPokemons';
import PokeDesc from '../PokeDesc/PokeDesc';

interface PokeGridProps {
    selectedOption: string,
}

export const PokeGrid  = ({ selectedOption } : PokeGridProps) => {
    const { pokemons, loadMore } = useGetPokemons();
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
    

    const filteredPokemons = pokemons.filter(p => {
        
        if (selectedOption.trim() === '') {
            return true;
        }
    
        return p.id === Number(selectedOption) || p.name.toLowerCase().includes(selectedOption.toLowerCase());
    });

    return (
        <>
        {selectedPokemon ? <PokeDesc pokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} /> :
        <GridContainer>
            {filteredPokemons.map((p) => (
                <PokeCard key={p.id} pokemon={p} onCardClick={setSelectedPokemon}/>
            ))}
        </GridContainer> }
        
        <ButtonContainer>
            {!selectedOption && !selectedPokemon && <Button backgroundColor='white' textColor='#373299' onClick={loadMore}> Load More... </Button>}
        </ButtonContainer>
        </>
    );
};

export default PokeGrid;