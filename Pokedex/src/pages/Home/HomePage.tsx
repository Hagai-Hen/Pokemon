import {DropDown} from '../../components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { HOME_PAGE_TITLE } from '../../resources/resources';

interface HomePageProps {
  setActivePage: (page: string) => void,
}

function HomePage({ setActivePage } : HomePageProps) {
  setActivePage(HOME_PAGE_TITLE);
  
  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <>
      <DropDown selectedOption={selectedPokemon} setSelectedOption={setSelectedPokemon} />
      <PokeGrid selectedOption={selectedPokemon} />
    </>
  )
}

export default HomePage;