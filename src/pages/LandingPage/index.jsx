/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const LandingPage = ({ menu, setMenu }) => {
  const { getAllPts, ptList } = useContext(PersonalTrainerContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    getAllPts();
    setCurrentIndex(0);
    setIsLoading(false);

    setTimeout(() => {
      setMenu(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(ptList.length - 1);
    } else if (currentIndex > ptList.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ptList.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [ptList]);

  if (!isLoading) {
    return (
      <div className="landingPageContainer" id="landingPageContainer">
        <section className="topSection">
          <div className={`landingImage ${menu ? "move" : ""}`}>
            <img className="landingLogo" src={logo} alt="logo" />
          </div>
        </section>

        <section className="bottomSection">
          <main className={`landingMain ${menu ? "move" : ""}`}>
            <h2 className="mainTitle">Econtra o PT mais próximo de si</h2>

            <Link to="/busca" className="mainBtn">
              PESQUISAR
            </Link>
            <span className="mainSpan">OU</span>
            <Link to="/equipa" className="mainBtn">
              CONHEÇA A EQUIPA
            </Link>
          </main>

          <div className={`ptDisplayContainer ${menu ? "move" : ""}`}>
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
                      key={index + "a"}
                      onClick={() => handlePaginationClick(index)}
                    >
                      -
                    </span>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
