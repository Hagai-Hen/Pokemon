import {DropDown} from '../../components/DropDown/DropDown';
import { useEffect, useState } from "react";
import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { HOME_PAGE_TITLE, RECENT_SEARCHES_LOCAL_STORAGE } from '../../resources/resources';

interface HomePageProps {
  setActivePage: (page: string) => void,
}

const getInitialRecentSearches = () => {
  const savedSearches = localStorage.getItem(RECENT_SEARCHES_LOCAL_STORAGE);
  return savedSearches ? JSON.parse(savedSearches) : [];
};

function HomePage({ setActivePage } : HomePageProps) {
  useEffect(() => {
    setActivePage(HOME_PAGE_TITLE);
  }, [])
  
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <DropDown searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokeGrid searchQuery={searchQuery} />
    </>
  )
}

export default HomePage;