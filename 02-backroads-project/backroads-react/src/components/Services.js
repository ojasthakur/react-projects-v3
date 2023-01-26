import React from "react";
import Title from "./Title";
import { services } from "../data";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" titleSpan="services" />

      <div className="section-center services-center">
        {services.map((element) => {
          return <ServicesCard key={element.id} {...element} />;
        })}
      </div>
    </section>
  );
};

export default Services;
