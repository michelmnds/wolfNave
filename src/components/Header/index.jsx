/* eslint-disable react/prop-types */
import "./style.css";
import x from "../../assets/icons/x.png";
import menuIcon from "../../assets/icons/menu.png";
import lobo from "../../assets/images/lobo.png";
import { Link } from "react-router-dom";

export const Header = ({ menu, setMenu }) => {
  const handleClick = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <header className="headerContainer">
      <Link to="/equipa" className="headerNav">
        CONHEÇA A EQUIPA
      </Link>

      <Link to="/">
        <img className="headerLogo" src={lobo} alt="logo" />
      </Link>

      <div className="iconContainer">
        {menu ? (
          <img src={x} alt="x icon" className="icon" onClick={handleClick} />
        ) : (
          <img
            src={menuIcon}
            alt="menu icon"
            className="icon"
            onClick={handleClick}
          />
        )}
      </div>

      <Link to="/busca" className="headerNav">
        ENCONTRE O PT IDEAL
      </Link>
    </header>
  );
};
