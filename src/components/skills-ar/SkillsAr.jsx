import React from "react";
import { Helmet } from "react-helmet-async";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import html from "../../images/html.webp";
import css from "../../images/css.webp";
import javascript from "../../images/javascript.webp";
import jquery from "../../images/jquery.webp";
import ajax from "../../images/ajax.webp";
import json from "../../images/json.webp";
import scss from "../../images/scss.webp";
import bootstrap from "../../images/Bootstrap.webp";
import tailwind from "../../images/tailwind.webp";
import gulp from "../../images/gulp.webp";
import jest from "../../images/jest.webp";
import npm from "../../images/npm.webp";
import react from "../../images/react.webp";
import material from "../../images/material-ui.webp";
import spline from "../../images/spline.webp";
import git from "../../images/git.webp";
import github from "../../images/github.webp";
import nodejs from "../../images/nodejs.webp";
import express from "../../images/express.webp";
import jwt from "../../images/jwt.webp";
import mongo from "../../images/MongoDB.webp";
import "./style/skills-ar.css";
import HeaderAr from "../headerAr/HeaderAr";
import FooterAr from "../footerAr/FooterAr";

const SkillsAr = () => {
  return (
    <>
      <Helmet>
        <title>مهاراتى</title>
      </Helmet>
      <HeaderAr />
      <section className="skills-page">
        <div className="boxs">
          <div className="box-1">
            <img src={html} alt="html" />
            <h1>HTML</h1>
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-2">
            <img src={css} alt="css" />
            <h1>CSS</h1>
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-3">
            <img src={javascript} alt="javascript" />
            <h1>JAVASCRIPT</h1>
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-4">
            <img src={jquery} alt="jquery" />
            <h1>JQUERY</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-5">
            <img src={ajax} alt="ajax" />
            <h1>AJAX</h1>
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-6">
            <img src={json} alt="json" />
            <h1>JSON</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-7">
            <img src={scss} alt="scss" />
            <h1>SCSS</h1>
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-8">
            <img src={bootstrap} alt="bootstrap" />
            <h1>BOOTSTRAP</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-9">
            <img src={tailwind} alt="tailwind" />
            <h1>TAILWIND CSS</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-10">
            <img src={gulp} alt="gulp" />
            <h1>GULP.JS</h1>
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-11">
            <img src={jest} alt="jest" />
            <h1>JEST</h1>
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-12">
            <img src={npm} alt="npm" />
            <h1>NPM</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-13">
            <img src={react} alt="react" />
            <h1>REACT.JS</h1>
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-14">
            <img src={material} alt="material" />
            <h1>MATERIAL UI</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-15">
            <img src={spline} alt="spline" />
            <h1>SPLINE</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-16">
            <img src={git} alt="git" />
            <h1>GIT</h1>
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-17">
            <img src={github} alt="github" />
            <h1>GITHUB</h1>
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-18">
            <img src={nodejs} alt="nodejs" />
            <h1>NODE.JS</h1>
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-19">
            <img src={express} alt="express" />
            <h1>EXPRESS.JS</h1>
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-20">
            <img src={jwt} alt="jwt" />
            <h1>JWT</h1>
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="box-21">
            <img src={mongo} alt="mongodb" />
            <h1>MONGODB</h1>
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(205, 153, 0, 0.3)",
                textColor: "#cd9900",
                pathColor: "#cd9900",
                trailColor: "transparent",
              })}
            />
          </div>
        </div>
      </section>
      <FooterAr />
    </>
  );
};

export default SkillsAr;
