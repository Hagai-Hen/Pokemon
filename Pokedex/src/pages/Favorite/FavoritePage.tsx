interface FavPageProps {
  setActivePage: (page: string) => void,
}

function FavoritePage({ setActivePage } : FavPageProps) {
  setActivePage("Favorite");

  return (
    <>
      <h3>Favorite Page</h3>
    </>
  )
}

export default FavoritePage;