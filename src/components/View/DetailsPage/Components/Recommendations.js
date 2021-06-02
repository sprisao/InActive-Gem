import React from "react";
import DetailGrid from "./DetailGrid";

import "./Recommendations.css";

const Recommendations = (props) => {
  return (
    <section className="recommendation">
      <h2>
        {props.emoji} {props.secondCategory} {props.firstCategory}
      </h2>
      <DetailGrid
        filter={props.filter}
        filter2={props.filter2}
        self={props.self}
        length={7}
        categoryType="2"
      />
    </section>
  );
};

export default Recommendations;
