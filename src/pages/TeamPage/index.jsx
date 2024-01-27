/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";

import { useContext, useEffect, useState } from "react";
import "./style.css";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { PTCard } from "../../components/PTCard";

export const TeamPage = ({ menu }) => {
  const { ptList, getAllPts } = useContext(PersonalTrainerContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPts();
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    return (
      <div className="teamPageContainer">
        <h2 className="teamPageTitle">Conheça a Equipa!</h2>

        <hr className="teamPageLine" />

        <main className="teamPageMain">
          {ptList.map((pt) => (
            <PTCard
              key={pt._id}
              id={pt._id}
              img={pt.image}
              name={pt.name}
              specialities={pt.speciality}
              location={pt.location}
            ></PTCard>
          ))}
        </main>
      </div>
    );
  }
};
