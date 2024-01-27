/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const PersonalTrainerContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

export const PersonalTrainerContextProvider = ({ children }) => {
  const [ptList, setPtLits] = useState([]);
  const [singlePt, setSinglePt] = useState({});
  const [cityList, setCityLits] = useState([]);
  const [specialityList, setSpecialityLits] = useState([]);

  const getAllPts = async () => {
    try {
      const response = await axios.get(`${API_URL}/personal-trainers`);
      if (response.status === 200) {
        setPtLits(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSpecialities = async () => {
    try {
      const response = await axios.get(`${API_URL}/specialities`);
      if (response.status === 200) {
        setSpecialityLits(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAvaliableCities = async () => {
    try {
      const response = await axios.get(`${API_URL}/cities`);

      setCityLits(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PersonalTrainerContext.Provider
      value={{
        getAllPts,
        getAvaliableCities,
        getAllSpecialities,
        cityList,
        specialityList,
        ptList,
        singlePt,
        setCityLits,
        setSpecialityLits,
        setSinglePt,
        setPtLits,
      }}
    >
      {children}
    </PersonalTrainerContext.Provider>
  );
};
