import "./style.css";
import lobo from "../../assets/images/lobo.png";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <img src={lobo} alt="footer Logo" className="footerLogo" />

      <hr className="footerLine" />

      <div className="footerIconContainer">
        <a
          href="https://www.instagram.com/wolfnaveteam/"
          target="_blank"
          className="footerIcon"
          style={{ backgroundImage: `url(https://i.imgur.com/g5RhUhb.png)` }}
          rel="noreferrer"
        />
        <a
          href="https://www.instagram.com/wolfnaveteam/"
          target="_blank"
          className="footerIcon"
          style={{ backgroundImage: `url(https://i.imgur.com/rNxzg9E.png)` }}
          rel="noreferrer"
        />
      </div>
    </div>
  );
};
