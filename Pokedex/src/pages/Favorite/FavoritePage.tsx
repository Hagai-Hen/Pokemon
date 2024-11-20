import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { FAV_PAGE_TITLE } from "../../resources/resources";
import { useEffect } from "react";
interface FavPageProps {
  setActivePage: (page: string) => void,
}

function FavoritePage({ setActivePage } : FavPageProps) {

  useEffect(() => {
    setActivePage(FAV_PAGE_TITLE);
  }, [])

  return (
    <>
      <PokeGrid $isFav={true} />
    </>
  )
}

export default FavoritePage;