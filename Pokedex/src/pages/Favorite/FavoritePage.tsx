import data from "../../resources/data.json";

interface FavPageProps {
  setActivePage: (page: string) => void,
}

function FavoritePage({ setActivePage } : FavPageProps) {
  setActivePage(data.page_title.favorite);

  return (
    <>
      <h3>Favorite Page</h3>
    </>
  )
}

export default FavoritePage;