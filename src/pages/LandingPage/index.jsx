/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import search from "../../assets/icons/search.png";
import { useContext, useEffect, useState } from "react";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { PTCard } from "../../components/PTCard";

export const LandingPage = () => {
  const { getAllPts, ptList } = useContext(PersonalTrainerContext);

  useEffect(() => {
    getAllPts();
  }, []);

  console.log(ptList);
  return (
    <div className="landingPageContainer" id="landingPageContainer">
      <div className="landingImage">
        <h1>LOGO</h1>
      </div>

      <main className="landingMain">
        <h2 className="mainTitle">Econtra o PT mais próximo de si</h2>

        <section className="inputContainer">
          <input
            placeholder="Digita a sua cidade"
            className="mainInput"
            type="text"
          />
          <img className="searchIcon" src={search} alt="search icon" />
        </section>
        {/* <hr className="mainLine" /> */}

        <div className="ptContainer">
          {ptList.map((pt) => (
            <PTCard
              key={pt._id}
              id={pt._id}
              img={pt.image}
              name={pt.name}
              specialities={pt.speciality}
            ></PTCard>
          ))}
        </div>
      </main>
    </div>
  );
};
