import React from "react";
import { NavLink } from "react-bootstrap-v5";

const Contact = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-2">
              <label for="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="mb-2">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-2">
              <label for="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto d-flex justify-content-center align-items-center">
                <div className="d-flex button">
              <NavLink className="btn" to="#">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink className="btn" to="#">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink className="btn" to="#">
                <i className="fab fa-github"></i>
              </NavLink>
              <NavLink className="btn" to="https://www.linkedin.com/in/muhammad-khalid-5377131a7/">
                <i className="fab fa-linkedin"></i>
              </NavLink>
              <NavLink className="btn" to="#">
                <i className="fab fa-instagram"></i>
              </NavLink>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
