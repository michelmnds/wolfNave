/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import "./style.css";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { PTCard } from "../../components/PTCard";

export const SearchPage = ({ menu }) => {
  const [city, setCity] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [gender, setGender] = useState("");
  const finalObj = { city, speciality, gender };

  const [result, setResult] = useState([]);
  const [none, setNone] = useState(false);

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
  }, []);

  const findPt = () => {
    const fetchedPtList = ptList.filter((pt) => {
      if (Object.keys(finalObj).length > 0) {
        if (finalObj.city != "" && pt.location !== finalObj.city) {
          return false;
        }

        if (finalObj.gender != "" && pt.gender !== finalObj.gender) {
          return false;
        }

        if (
          finalObj.speciality != "" &&
          !pt.speciality.includes(finalObj.speciality)
        ) {
          return false;
        }

        return true;
      }
    });
    setResult(fetchedPtList);
    setNone(false);
    return fetchedPtList;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    findPt();
    if (!result.length) {
      setNone(true);
    }
  };

  if (cityList.length !== 0) {
    return (
      <div className={`searchPageContainer ${menu ? "move" : ""}`}>
        <form className="searchForm" onSubmit={handleSubmit}>
          <h1 className="searchTitle">Vamos encontar o PT ideal para si</h1>

          <label className="label" htmlFor="cidade">
            <span>Cidade</span>
            <select
              id="cidade"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="">Selecione uma cidade</option>
              {cityList.map((city, index) => {
                return (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label className="label" htmlFor="especialidade">
            <span>Especialidade</span>

            <select
              id="especialidade"
              type="text"
              value={speciality}
              onChange={(event) => setSpeciality(event.target.value)}
            >
              <option value="">Selecione uma especialidade</option>
              {specialityList.map((speciality, index) => {
                return (
                  <option key={index} value={speciality.name}>
                    {speciality.name}
                  </option>
                );
              })}
            </select>
          </label>

          <label className="label" htmlFor="genero">
            <span>Gênero</span>

            <select
              id="genero"
              type="text"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Selecione o gênero</option>
              <option value="Female">Feminino</option>
              <option value="Male">Masculino</option>
            </select>
          </label>

          <button className="formBtn">BUSCAR</button>
        </form>

        <main className="searchMain">
          <div className="ptContainer">
            {result.length != 0 ? (
              result.map((pt) => (
                <PTCard
                  key={pt._id}
                  id={pt._id}
                  img={pt.image}
                  name={pt.name}
                  specialities={pt.speciality}
                  location={pt.location}
                ></PTCard>
              ))
            ) : none ? (
              <h2 className="ptTitle">Não encontramos nenhum PT</h2>
            ) : (
              <span className="ptTitle">Preencha os campos a cima</span>
            )}
          </div>
        </main>
      </div>
    );
  }
};
