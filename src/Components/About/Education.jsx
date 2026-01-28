import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Formación Académica</h2>
              <p>
                He cursado estudios en ingeniería de software e ingeniería de petróleo, adquiriendo
                habilidades técnicas y prácticas que me permiten crear soluciones innovadoras
                y eficientes.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2013-2016</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">University of Design</h4>
                    <p className="fz-18 pra d-block">Kingston, United States</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2013</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Petroleum engineering</h4>
                    <p className="fz-18 pra d-block">Universidad De Oriente</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2004</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Bachiller</h4>
                    <p className="fz-18 pra d-block">U.E. Francisco Isnardi</p>
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

export default Education;
