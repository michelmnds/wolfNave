/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import "./style.css";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";

export const SearchPage = () => {
  const [city, setCity] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [gender, setGender] = useState("");

  const finalObj = { city, speciality, gender };

  const {
    ptList,
    getAllPts,
    cityList,
    getAvaliableCities,
    specialityList,
    getAllSpecialities,
  } = useContext(PersonalTrainerContext);

  useEffect(() => {
    getAvaliableCities();
    getAllSpecialities();
    getAllPts();
    console.log(cityList);
  }, []);

  const findPt = () => {
    const fetchedPtList = ptList.filter(
      (pt) =>
        pt.location === finalObj.city &&
        pt.gender === finalObj.gender &&
        pt.speciality.includes(finalObj.speciality)
    );
    console.log(fetchedPtList);
    return fetchedPtList;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    findPt();
    console.log(finalObj);
  };

  if (cityList.length !== 0) {
    return (
      <div className="searchPageContainer">
        <form className="searchForm" onSubmit={handleSubmit}>
          <label htmlFor="cidade">
            Cidade:
            <select
              id="cidade"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="null">Selecione uma cidade</option>
              {cityList.map((city, index) => {
                return (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label htmlFor="especialidade">
            Especialidade:
            <select
              id="especialidade"
              type="text"
              value={speciality}
              onChange={(event) => setSpeciality(event.target.value)}
            >
              <option value="null">Selecione uma especialidade</option>
              {specialityList.map((speciality, index) => {
                return (
                  <option key={index} value={speciality.name}>
                    {speciality.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label htmlFor="genero">
            Gênero:
            <select
              id="genero"
              type="text"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="null">Selecione o gênero</option>
              <option value="Female">Feminino</option>
              <option value="Male">Masculino</option>
            </select>
          </label>

          <button className="formBtn">BUSCAR</button>
        </form>
      </div>
    );
  }
};
