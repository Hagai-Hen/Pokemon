import PokeGrid from "../../components/PokeGrid/PokeGrid";
import { FAV_PAGE_TITLE } from "../../resources/resources";
interface FavPageProps {
  setActivePage: (page: string) => void,
}

function FavoritePage({ setActivePage } : FavPageProps) {

  setActivePage(FAV_PAGE_TITLE);

  return (
    <>
      <PokeGrid isFav={true} />
    </>
  )
}

export default FavoritePage;