import React from "react";
import ProjectData from "./WorkData";
import MainCart from "./MainCart";
import "./WorkCart.css";

function WorkCart() {
  return (
    <div className="work-container " >
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
  );
}

export default WorkCart;
