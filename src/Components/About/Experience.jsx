import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5 text-end">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Experiencia</h2>
              <p>
                Experiencia combinada en ingeniería de software y sector petrolero, enfocada en la optimización de procesos, automatización y digitalización de operaciones técnicas. 
                Desarrollo e implementación de soluciones tecnológicas (plataformas, sistemas, APIs y análisis de datos) alineadas a necesidades reales de la industria energética, soporte a operaciones, mantenimiento y gestión técnica. 
                Capacidad para integrar conocimiento operativo del negocio petrolero con herramientas digitales para mejorar eficiencia, control y toma de decisiones.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2024-2026</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Ingeniero de Desarrollo de Software</h4>
                    <p className="fz-18 pra d-block">Centro empresarial arrecife. Bogotá-Colombia</p>
                    <span className="fz-18 pra d-block">Multidevops</span>
                  </div>
                </div>
                 <div className="exri__item">
                  <span className="fz-18 fw-500 base">2019 - 2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Ingeniero de Desarrollo de Software</h4>
                    <p className="fz-18 pra d-block">Centro empresarial arrecife. Bogotá-Colombia</p>
                    <span className="fz-18 pra d-block">Goal Systems</span>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2018 - 2019</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Ingeniero de Desarrollo de software</h4>
                    <p className="fz-18 pra d-block">Banco Finandina. Bogotá-Colombia</p>
                    <span className="fz-18 pra d-block">Reves Diseño & Desarrollo</span>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2017 - 2018</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Ingeniero Residente</h4>
                    <p className="fz-18 pra d-block">Planta de Fraccionamiento y Despacho Jose. Venezuela</p>
                    <span className="fz-18 pra d-block">PJP4</span>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2016 - 2017</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Supervisor de Procesos</h4>
                    <p className="fz-18 pra d-block">Planta de Extracción de LGN Santa Barbara. Venezuela</p>
                    <span className="fz-18 pra d-block">PJP4</span>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2015 - 2016</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Ingeniero Ambiental</h4>
                    <p className="fz-18 pra d-block">Planta de Extracción de LGN Santa Barbara. Venezuela</p>
                    <p className="fz-18 pra d-block">PJP4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
