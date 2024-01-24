/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const PersonalTrainerContext = createContext();

export const PersonalTrainerContextProvider = ({ children }) => {
  const [ptList, setPtLits] = useState([]);
  const [singlePt, setSinglePt] = useState({});

  const getAllPts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/personal-trainers`
      );
      if (response.status === 200) {
        setPtLits(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PersonalTrainerContext.Provider
      value={{ getAllPts, ptList, singlePt, setSinglePt, setPtLits }}
    >
      {children}
    </PersonalTrainerContext.Provider>
  );
};
