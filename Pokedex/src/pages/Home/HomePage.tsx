import {DropDown} from '../../components/DropDown/DropDown';
import { useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { HOME_PAGE_TITLE } from '../../resources/resources';

interface HomePageProps {
  setActivePage: (page: string) => void,
}

function HomePage({ setActivePage } : HomePageProps) {
  setActivePage(HOME_PAGE_TITLE);
  
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <DropDown searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokeGrid searchQuery={searchQuery} />
    </>
  )
}

export default HomePage;