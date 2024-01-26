/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import search from "../../assets/icons/search.png";
import { useContext, useEffect, useState } from "react";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { PTCard } from "../../components/PTCard";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const LandingPage = () => {
  const { getAllPts, ptList } = useContext(PersonalTrainerContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    getAllPts();
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    console.log(currentIndex);
    if (currentIndex < 0) {
      setCurrentIndex(ptList.length - 1);
    } else if (currentIndex > ptList.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div className="landingPageContainer" id="landingPageContainer">
      <div className="landingImage">
        <img className="landingLogo" src={logo} alt="logo" />
      </div>

      <main className="landingMain">
        <h2 className="mainTitle">Econtra o PT mais próximo de si</h2>

        <Link className="mainBtn">PESQUISAR</Link>
        <span className="mainSpan">OU</span>
        <Link className="mainBtn">CONHEÇA A EQUIPA</Link>
      </main>

      <div className="ptDisplayContainer">
        <div
          key={ptList[currentIndex]}
          className="ptDisplay"
          style={{ backgroundImage: `url(${ptList[currentIndex]?.image})` }}
        >
          <section className="paginationContainer">
            <span
              className="lt"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              &lt;
            </span>
            <span
              className="gt"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              &gt;
            </span>

            {ptList.map((pt, index) => {
              return (
                <span
                  className={`pagination ${
                    currentIndex === index ? "gold" : ""
                  }`}
                  key={pt.id}
                  onClick={() => handlePaginationClick(index)}
                >
                  -
                </span>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

{
  /*<section className="inputContainer">
  <input
    placeholder="Digita a sua cidade"
    className="mainInput"
    type="text"
  />
  <img className="searchIcon" src={search} alt="search icon" />
</section>
<hr className="mainLine" />

<div className="ptContainer">
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
</div> */
}
