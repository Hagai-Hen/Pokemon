import { NavBar } from "../../components/NavBar/NavBar";
import {DropDown} from '../../components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import useGetPokemons from "../../hooks/useGetPokemons";


interface HomePageProps {
  setActivePage: (page: string) => void,
}

function HomePage({ setActivePage } : HomePageProps) {
  setActivePage("Home");

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
  });

  const {pokemons} = useGetPokemons();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <DropDown options={recentSearches} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <PokeGrid pokemons={pokemons} selectedOption={selectedOption} />
    </>
  )
}

export default HomePage;