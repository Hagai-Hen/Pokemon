import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import FavoritePage from "./pages/Favorite/FavoritePage";
import DescriptionPage from "./pages/Description/DescriptionPage";

function App() {
  const [activePage, setActivePage] = useState<string>('');

  return (
    <>
    <NavBar activePage={activePage} />
      <Routes>
        <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
        <Route path="/fav" element={<FavoritePage setActivePage={setActivePage} />} />
        <Route path="/desc/:name" element={<DescriptionPage setActivePage={setActivePage} />} />
      </Routes>
    </>
  )
}

export default App;