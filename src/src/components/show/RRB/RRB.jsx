import React from "react";
import rrb from "../../home/assets/img/rrb.png";

import RRB_JE from "./RRB_JE";
import RRB_ALP from "./RRB_ALP";

const RRB = () => {
  return (
    <div className="container">
      <div className="titlediv">
        <img src={rrb} alt="rrb" />
        <h5>
          <span className="hover-underline-animation">Indian Railways</span>
          <br />
          Indian Railways is one of the largest and busiest railway networks in
          the world, serving as a vital mode of transportation across India.
          Renowned for its vast network, it connects diverse regions, cultures,
          and people, playing a crucial role in the country's economic and
          social development.
        </h5>
      </div>

      <RRB_JE/>
      <RRB_ALP />

      <div className="bodydiv">
        <ul>
          <li className="btn btn-success" data-toggle="modal" data-target=".rrb_je" aria-label="Open RRB JE Modal">
            RRB JE
          </li>

          <li>RRB NTPC</li>

          <li className="btn btn-success" data-toggle="modal" data-target=".rrb_alp" aria-label="Open RRB ALP Modal">
            RRB ALP
          </li>

          <li>RRB Group D</li>
          <li>RRB SSE</li>
        </ul>
      </div>
    </div>
  );
};

export default RRB;
