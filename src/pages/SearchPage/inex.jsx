/* eslint-disable no-undef */
import { useContext, useState } from "react";
import "./style.css";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";

export const SearchPage = () => {
  const [city, setCity] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [gender, setGender] = useState("");

  const finalObj = { city, speciality, gender };

  const { ptList } = useContext(PersonalTrainerContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(finalObj);
  };

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
          </select>
        </label>

        <label htmlFor="especialidade">
          Especialidade:
          <input
            id="especialidade"
            type="text"
            value={speciality}
            onChange={(event) => setSpeciality(event.target.value)}
          />
        </label>

        <label htmlFor="genero">
          Gênero:
          <input
            id="genero"
            type="text"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </label>

        <button className="formBtn">BUSCAR</button>
      </form>
    </div>
  );
};
