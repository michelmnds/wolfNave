/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./style.css";
import { ModalContext } from "../../providers/ModalContext";
import { PersonalTrainerContext } from "../../providers/PersonalTrainerContext";

export const PTCard = ({ id, img, name, specialities, location }) => {
  const { ptModal, setPtModal } = useContext(ModalContext);
  const { setSinglePt, singlePt } = useContext(PersonalTrainerContext);

  const handleClick = () => {
    setPtModal(true);
    setSinglePt({ id, img, name, specialities, location });
  };

  return (
    <div key={id} className="ptCard">
      <div className="ptImage" style={{ backgroundImage: `url(${img})` }} />

      <div className="ptRightContainer">
        <span className="ptName">{name}</span>

        <span className="ptMore" onClick={handleClick}>
          Ver mais ›
        </span>
      </div>
    </div>
  );
};
