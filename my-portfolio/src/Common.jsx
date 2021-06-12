import React from "react";
import {NavLink} from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.h1name}
                    <strong className="brand-name">Muhammad Khalid</strong>
                  </h1>
                  <h2 className="mt-lg-1">{props.h2name}</h2>
                  <div className="mt-3">
                    <NavLink to={props.service} className="btn-get-started ">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="home img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
