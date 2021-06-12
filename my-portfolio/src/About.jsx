import React from "react";
import web from "../src/image/about.png";
import Common from "./Common"
const About = () => {
  return (
    <>
      <Common h1name = "Grow You Business With " h2name="I have a talented team" imgsrc={web} service="/service" />
    </>
  );
};

export default About;
