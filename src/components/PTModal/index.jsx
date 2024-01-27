/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./style.css";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";
import { ModalContext } from "../../providers/ModalContext";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";

export const PTModal = () => {
  const { singlePt } = useContext(PersonalTrainerContext);
  const { setPtModal } = useContext(ModalContext);
  const { id, name, location, img, specialities } = singlePt;

  const handleClick = () => {
    setPtModal(false);
  };

  const handleOutsideClick = () => {
    window.addEventListener("click", (e) => {
      if (e.target.className == "ptModalContainer") {
        setPtModal(false);
      }
    });
  };

  return (
    <div className="ptModalContainer" onClick={handleOutsideClick}>
      <div className="ptModal">
        <span className="ptModalX" onClick={handleClick}>
          X
        </span>

        <div
          className="ptModalImg"
          style={{ backgroundImage: `url(${img})` }}
        />

        <div className="ptModalInfos">
          <div className="ptModalTopContainer">
            <span className="ptModalName">{name} - </span>

            <a
              className="ptIcon"
              style={{ backgroundImage: `url(${instagram})` }}
              alt="instagram icon"
            />
            <a
              className="ptIcon"
              style={{ backgroundImage: `url(${facebook})` }}
              alt="facebook icon"
            />
          </div>

          <section className="specialityContainer">
            {specialities.map((speciality, index) => {
              return (
                <p className="specialP" key={index}>
                  ✓ {speciality}
                </p>
              );
            })}
          </section>
          <a className="ptModalBtn" href="/">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    </div>
  );
};
