import { NavBar } from "./components/NavBar/NavBar";
import {DropDown} from './components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "./components/PokeGrid/PokeGrid";
import useGetPokemons from "./hooks/useGetPokemons";

function App() {

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
  });

  const {pokemons} = useGetPokemons();

  return (
    <>
      <NavBar/>
      <DropDown options={recentSearches}/>
      <PokeGrid pokemons={pokemons}/>
    </>
  )
}

export default App;