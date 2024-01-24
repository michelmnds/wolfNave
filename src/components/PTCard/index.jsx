/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./style.css";
import { ModalContext } from "../../providers/ModalContext";

export const PTCard = ({ id, img, name, specialities }) => {
  const { modal, setModal } = useContext(ModalContext);

  const handleClick = () => {
    setModal(true);
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

{
  /* <section className="specialityContainer">
  {specialities.map((speciality) => {
    return (
      <p className="specialP" key={id}>
        ✓ {speciality}
      </p>
    );
  })}
</section> */
}
