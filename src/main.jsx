import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./globalStyle.css";

import { BrowserRouter } from "react-router-dom";
import { PersonalTrainerContextProvider } from "./providers/PersonalTrainerContext.jsx";
import { ModalContextProvider } from "./providers/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonalTrainerContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </PersonalTrainerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
