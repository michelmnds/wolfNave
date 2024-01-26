/* eslint-disable react/prop-types */
import "./style.css";
import x from "../../assets/icons/x.png";
import menuIcon from "../../assets/icons/menu.png";
import lobo from "../../assets/images/lobo.png";

export const Header = ({ menu }) => {
  return (
    <header className="headerContainer">
      <img className="headerLogo" src={lobo} alt="logo" />

      <div className="iconContainer">
        {menu ? (
          <img src={x} alt="x icon" className="icon" />
        ) : (
          <img src={menuIcon} alt="menu icon" className="icon" />
        )}
      </div>
    </header>
  );
};
