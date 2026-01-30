import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import juliethvelasquez from "../../assets/img/testimonial/juliethvelasquez.png";
import maria from "../../assets/img/testimonial/maria.png";
import pedro from "../../assets/img/testimonial/pedro.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.png";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import Partner from "../Partner/Partner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "María Ramirez",
    position: "Gerente pjp4/OGS",
    review: `Conozco a Jeffry, profesional talentoso y exitoso, motivado al logro con buena actitud y disposición para el trabajo en equipo. Perteneció a mi equipo de trabajo, 
supervisé su desempeño.`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 2,
    name: "Julieth Velásquez",
    position: "Gerente La Media Digital",
    review: `Ha sido muy satisfactoria mi experiencia trabajando con Jeffry; Ha construido el entorno de La Media Digital con gran profesionalismo, dedicación y compromiso.`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 3,
    name: "Pedro Salazar",
    position: "CEO Tech Solutions",
    review: `Jeffry es un profesional íntegro, responsable y comprometido con su trabajo. Siempre dispuesto a asumir nuevos retos y a aprender cosas nuevas.`,
    stars: [<StarFill className="ratting fz-20" />],
  },
];
const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Referencias
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
           Palabras de partners
            <span className="d-block">  </span>
          </h2>
        </div>
        <div
          className="testimonial__v1wrap pb-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="swiper testimonial__slidewrap">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {/* <div className="swiper-wrapper"> */}
                  {reviewList.map(({ id, name, position, review, stars }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div  className="test__slide swiper-slide">
                          <div className="d-flex mb-40 align-items-center gap-2">
                            {stars.map((star, index) => (
                              <i key={index}>{star}</i>
                            ))}
                          </div>
                          <p>{review}</p>
                          <h4 className="base mb-2">{name}</h4>
                          <span className="fz-18 ptext">{position} </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {/* </div> */}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
          <div className="quote">
            <img src={quote} alt="img" />
          </div>
          <div className="man1">
            <img src={pedro} alt="img" />
          </div>
          <div className="man2">
            <img src={maria} alt="img" />
          </div>
          <div className="man3">
            <img src={juliethvelasquez} alt="img" />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>
        <Partner />
      </div>
    </section>
  );
};

export default Testimonial;
