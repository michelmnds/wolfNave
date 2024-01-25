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

  return (
    <div className="ptModalContainer">
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
            {specialities.map((speciality) => {
              return (
                <p className="specialP" key={id}>
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
