/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ setModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};
