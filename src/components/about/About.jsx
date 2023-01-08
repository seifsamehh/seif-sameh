import React from "react";
import { Helmet } from "react-helmet-async";
import me2 from "../../images/mee.webp";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./style/about.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Header />
      <section className="about-page">
        <div className="container">
          <div className="about-content">
            <h1>ABOUT ME &#x1F60A;</h1>
            <p>
              {" "}
              Hi! My Name is Seif Eldin Sameh. I'm a highly skilled MERN stack
              developer with a strong background in developing full-stack web
              applications.Proficient in using modern technologies such as
              React, Node.js, and MongoDB to create intuitive andresponsive user
              interfaces.
            </p>
          </div>
          <div className="image">
            <img src={me2} alt="me" loading="lazy" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
