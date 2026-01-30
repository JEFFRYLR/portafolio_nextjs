import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import nextjs from "../../assets/img/about/nextjs.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";
import netcore from "../../assets/img/about/netcore2.png";
import sqlserver from "../../assets/img/about/sqlserver.png";
import linux from "../../assets/img/about/linux.png";
import javascript from "../../assets/img/about/javascript.png";
import docker from "../../assets/img/about/docker.png";
import tail from "../../assets/img/about/tail.png";

const skillsList = [
  {
    id: 1,
    skill: ".net core",
    percentage: "90%",
    image: netcore,
  },
  {
    id: 2,
    skill: "nextjs",
    percentage: "95%",
    image: nextjs,
  },
  {
    id: 3,
    skill: "html",
    percentage: "85%",
    image: html,
  },
  {
    id: 4,
    skill: "Sqlserver",
    percentage: "97%",
    image: sqlserver,
  },
  {
    id: 5,
    skill: "Linux",
    percentage: "80%",
    image: linux,
  },
  {
    id: 6,
    skill: "Javascript",
    percentage: "86%",
    image: javascript,
  },
    {
    id: 7,
    skill: "Docker",
    percentage: "75%",
    image: docker,
  },
  {
    id: 8,
    skill: "Tailwind CSS",
    percentage: "81%",
    image: tail,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Fortalezas</h2>
              <p>
                Conocimientos sólidos en desarrollo web front-end y back-end, incluyendo HTML, CSS, JavaScript, frameworks como Net core, React y Angular, así como experiencia en bases de datos SQL y NoSQL.
                <br/>
                <br/>
                He liderado y participado en el diseño de soluciones que combinan desarrollo de software, DevOps, APIs, sistemas empresariales (ERP/CRM), automatización de procesos y análisis de información, con especial énfasis en entornos cloud y arquitecturas modernas. Su perfil destaca por la capacidad de traducir necesidades complejas del negocio en soluciones técnicas robustas, seguras y sostenibles, aportando valor tanto en contextos industriales como en proyectos digitales y corporativos.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
