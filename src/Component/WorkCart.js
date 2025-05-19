import React from "react";
import ProjectData from "./WorkData";
import MainCart from "./MainCart";
import "./WorkCart.css";
import { Slide } from "react-awesome-reveal";

function WorkCart() {
  return (
    <Slide duration={1000} triggerOnce>
      <div className="work-container ">
        <h1 className="project-heading ">PROJECTS</h1>

        <div className="project-container ">
          {ProjectData.map((val, ind) => {
            return (
              <MainCart
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            );
          })}
        </div>
      </div>
    </Slide>
  );
}

export default WorkCart;
