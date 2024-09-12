import {DropDown} from '../../components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { HOME_PAGE_TITLE } from '../../resources/resources';

interface HomePageProps {
  setActivePage: (page: string) => void,
}

function HomePage({ setActivePage } : HomePageProps) {
  setActivePage(HOME_PAGE_TITLE);

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
  });

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <DropDown options={recentSearches} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <PokeGrid selectedOption={selectedOption} />
    </>
  )
}

export default HomePage;