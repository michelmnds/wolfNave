/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const NavBar = ({ menu, setMenu }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setMenu(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navBarContainer ${menu ? "moveNav" : ""}`}>
      <Link to="/equipa" className="navLink">
        CONHEÇA A EQUIPA
      </Link>
      <Link to="/busca" className="navLink">
        ENCONTRE O PT IDEAL
      </Link>
    </nav>
  );
};
