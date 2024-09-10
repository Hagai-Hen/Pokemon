import { NavBar } from "./components/NavBar/NavBar";
import {DropDown} from './components/DropDown/DropDown';
import { useState } from "react";

function App() {

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
});

  return (
    <>
      <NavBar/>
      <DropDown options={recentSearches}/>
    </>
  )
}

export default App;