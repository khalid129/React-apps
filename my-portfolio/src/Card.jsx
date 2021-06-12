import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card card-width">
          <img src={props.imgsrc} className="card-img-top" alt="Some img is here" style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/project" className="btn-get-started">
              Click here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
