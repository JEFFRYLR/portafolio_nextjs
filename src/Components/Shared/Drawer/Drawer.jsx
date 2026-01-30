import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/Logo_Jeffry_la_rosa.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
          Este es mi portafolio como desarrollador de software, donde presento proyectos, soluciones y experiencias construidas a partir del análisis, la tecnología y la mejora continua. Diseño y desarrollo sistemas funcionales, escalables y orientados a generar valor real.
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> Dirección </span>
              <span className="textp"> Bogotá, Colombia </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> Correo </span>
              <Link className="textp"> ingjeffrylr@.com </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> Whatsapp </span>
              <Link className="textp"> +57 350 573 2701 </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id, url }) => (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <i>{icon}</i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Conversemos</span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
