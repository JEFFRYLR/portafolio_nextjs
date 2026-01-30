import React from "react";
import { ArrowUpShort, Github } from "react-bootstrap-icons";
import { Facebook, Twitter, Linkedin, Globe, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/jeffry.larosa.7/",
  },
  {
    id: 2,
    platfrom: "Github",
    icon: <Github />,
    url: "https://github.com/JEFFRYLR",
  },
  {
    id: 3,
    platfrom: "Linkedin",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/jeffrylarosa/",
  },
  {
    id: 4,
    platfrom: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/",
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Contáctame
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hola, Soy Jeffry La Rosa Ingeniero de petróleo & software.
                </p>
                <a href="#0">ingjeffrylr@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, url, platfrom }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="social__footer">
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2023 {" "}
              <Link to={"/"} className="base">
               Jeffry La Rosa.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terminos y condiciones </a>
              </li>
              <li>
                <a href="#0"> Politica de privacidad </a>
              </li>
            </ul>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
