import React from "react";
import web from "../src/image/home.png";
import Common from "./Common";
const Home = () => {
  return (
    <>
     <Common h1name = "Grow You Business With " h2name="I have a talented team" imgsrc={web} service="/service" />
    </>
  );
};

export default Home;
