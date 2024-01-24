/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { useContext, useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { PTModal } from "./components/PTModal";
import { ModalContext } from "./providers/ModalContext";

function App() {
  const [menu, setMenu] = useState();
  const { ptModal } = useContext(ModalContext);

  return (
    <>
      {ptModal && <PTModal />}
      <Header menu={menu} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
