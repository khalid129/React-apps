import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Project = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="tab-center">This is an Card Page</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 d-flex justify-content-evenly">
              {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
