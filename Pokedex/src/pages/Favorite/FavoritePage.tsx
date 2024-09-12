import { FAV_PAGE_TITLE } from "../../resources/resources";
interface FavPageProps {
  setActivePage: (page: string) => void,
}

function FavoritePage({ setActivePage } : FavPageProps) {

  setActivePage(FAV_PAGE_TITLE);

  return (
    <>
      <h3>Favorite Page</h3>
    </>
  )
}

export default FavoritePage;