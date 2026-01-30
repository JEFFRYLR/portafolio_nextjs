import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Desarrollo Web y de Aplicaciones desktop",
    subHeading: "Software",
    para: "Desarrollo aplicaciones web y de escritorio, creando soluciones funcionales y escalables enfocadas en rendimiento, seguridad y una excelente experiencia de usuario.",
  },
  {
    id: "02",
    heading: "Despliegue de codigo en servidores",
    subHeading: "Devops",
    para: "Gestiono el despliegue de aplicaciones en servidores, automatizando procesos y garantizando estabilidad, seguridad y disponibilidad de los entornos productivos.",
  },
  {
    id: "03",
    heading: "Análisis de Datos",
    subHeading: "Data analytics",
    para: "Analizo datos para extraer información valiosa, generando insights que apoyan la toma de decisiones y optimizan procesos estratégicos.",
  },
  {
    id: "04",
    heading: "Diseño de intefazes de usuario",
    subHeading: " Web Design",
    para: "Diseño interfaces de usuario intuitivas y funcionales, enfocadas en usabilidad, experiencia visual y coherencia con los objetivos del producto.",
  },
  {
    id: "05",
    heading: " Arquitectura de Software",
    subHeading: "Software",
    para: "Diseño arquitecturas de software sólidas y escalables, definiendo estructuras, patrones y tecnologías que aseguran mantenibilidad y alto rendimiento.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Habilidades y Servicios"
            sortTitle="Algo que puedo hacer"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
