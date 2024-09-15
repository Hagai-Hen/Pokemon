import {DropDown} from '../../components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { HOME_PAGE_TITLE } from '../../resources/resources';

interface HomePageProps {
  setActivePage: (page: string) => void,
}

const getInitialRecentSearches = () => {
  const savedSearches = localStorage.getItem('recentSearches');
  return savedSearches ? JSON.parse(savedSearches) : [];
};

function HomePage({ setActivePage } : HomePageProps) {
  setActivePage(HOME_PAGE_TITLE);
  
  const [recentSearches, setRecentSearches] = useState<string[]>(getInitialRecentSearches);

  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <>
      <DropDown options={recentSearches} selectedOption={selectedPokemon} setSelectedOption={setSelectedPokemon} />
      <PokeGrid selectedOption={selectedPokemon} />
    </>
  )
}

export default HomePage;