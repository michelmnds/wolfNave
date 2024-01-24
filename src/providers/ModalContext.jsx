/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [ptModal, setPtModal] = useState(false);

  return (
    <ModalContext.Provider value={{ setPtModal, ptModal }}>
      {children}
    </ModalContext.Provider>
  );
};
