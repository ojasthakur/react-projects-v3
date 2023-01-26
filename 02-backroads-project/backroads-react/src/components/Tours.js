import React from "react";
import Title from "./Title";
import { tours } from "../data";
import ToursCards from "../ToursCards";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" titleSpan="tours" />

      <div className="section-center featured-center">
        {tours.map((element) => {
          console.log("hello");
          return <ToursCards {...element} key={element.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
