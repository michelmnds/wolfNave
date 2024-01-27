/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useContext, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { PTModal } from "./components/PTModal";
import { ModalContext } from "./providers/ModalContext";
import { Footer } from "./components/Footer";
import { SearchPage } from "./pages/SearchPage/inex";
import { NavBar } from "./components/NavBar";
import { TeamPage } from "./pages/TeamPage";

function App() {
  const [menu, setMenu] = useState();
  const { ptModal } = useContext(ModalContext);

  return (
    <>
      {ptModal && <PTModal />}
      <Header menu={menu} setMenu={setMenu} />
      <NavBar menu={menu} setMenu={setMenu} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage menu={menu} setMenu={setMenu} />}
        />
        <Route
          path="/busca"
          element={<SearchPage menu={menu} setMenu={setMenu} />}
        />
        <Route
          path="/equipa"
          element={<TeamPage menu={menu} setMenu={setMenu} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
