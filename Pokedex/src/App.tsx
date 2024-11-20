import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import FavoritePage from "./pages/Favorite/FavoritePage";
import DescriptionPage from "./pages/Description/DescriptionPage";
import { DESC_PAGE_ROUTE, FAV_PAGE_ROUTE, HOME_PAGE_ROUTE } from "./resources/routes";
import './resources/global.css';


function App() {
  const [activePage, setActivePage] = useState<string>('');

  return (
    <>
    <NavBar activePage={activePage} />
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage setActivePage={setActivePage} />} />
        <Route path={FAV_PAGE_ROUTE} element={<FavoritePage setActivePage={setActivePage} />} />
        <Route path={`${DESC_PAGE_ROUTE}/:name`} element={<DescriptionPage setActivePage={setActivePage} />} />
      </Routes>
    </>
  )
}

export default App;