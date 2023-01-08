import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import me2 from "../../images/mee.webp";
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
import one from "../../images/one.webp";
import two from "../../images/two.webp";
import three from "../../images/three.webp";
import four from "../../images/four.webp";
import five from "../../images/five.webp";
import six from "../../images/six.webp";
import avatar from "../../images/peeps-avatar-alpha.webp";
import cv from "../../document/cv.pdf";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGulp,
  FaNpm,
  FaGit,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiJquery, SiTailwindcss, SiJest } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./style/home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Seif Sameh</title>
      </Helmet>
      <Header />
      {/* start home */}
      <section className="home">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#ffd650" />
              <stop offset="100%" stopColor="#cd9a0000" />
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="##FCC201" />
              <stop offset="100%" stopColor="#cd9a0000" />
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#cd9900" />
              <stop offset="100%" stopColor="#cd9a0000" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="17s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate
              attributeName="x"
              dur="23s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="24s"
              values="0%;50%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate
              attributeName="x"
              dur="25s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="26s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="19s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <div className="left-part">
          <h1>
            Hi!
            <br />
            I'M SEIF ELDIN SAMEH
          </h1>
          <button>
            <a
              href={cv}
              className="fbo-embed download-button"
              target="_blank"
              download
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="right-part">
          <motion.img
            src={avatar}
            alt="my avatar"
            drag
            dragConstraints={{ left: 0, right: 100, top: -100, bottom: 10 }}
          />
        </div>
      </section>
      {/* end home */}
      {/* start about heading */}
      <section className="about-heading">
        <Parallax translateY={["-200px", "200px"]}>
          <h1>ABOUT ME</h1>
        </Parallax>
      </section>
      {/* end about heading */}
      {/* start about */}
      <section className="about">
        <div className="container">
          <Parallax translateY={["-200px", "200px"]}>
            <div className="about-content">
              <h1>ABOUT ME &#x1F60A;</h1>
              <p>
                Hi! My Name is Seif Eldin Sameh. I'm a highly skilled MERN stack
                developer with a strong background in developing full-stack web
                applications.Proficient in using modern technologies such as
                React, Node.js, and MongoDB to create intuitive andresponsive
                user interfaces.
              </p>
            </div>
          </Parallax>
          <div className="image">
            <Parallax translateX={["200px", "-200px"]}>
              <img src={me2} alt="me" loading="lazy" />
            </Parallax>
          </div>
        </div>
      </section>
      {/* end about */}
      {/* start icons */}
      <section className="icons">
        <div className="row">
          <div>
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <FaBootstrap className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <FaReact className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaGithub className="icon" />
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <SiJquery className="icon" />
            <FaBootstrap className="icon" />
            <FaGulp className="icon" />
            <SiJest className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaReact className="icon" />
          </div>
          <div>
            <FaCss3Alt className="icon" />
            <SiJest className="icon" />
            <FaGulp className="icon" />
            <SiJquery className="icon" />
            <FaGit className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaNpm className="icon" />
            <FaGithub className="icon" />
            <FaBootstrap className="icon" />
            <FaReact className="icon" />
            <SiJavascript className="icon" />
            <FaHtml5 className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <FaReact className="icon" />
            <SiJavascript className="icon" />
            <FaCss3Alt className="icon" />
            <SiJquery className="icon" />
            <FaBootstrap className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <SiTailwindcss className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <FaHtml5 className="icon" />
            <FaBootstrap className="icon" />
            <SiTailwindcss className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaSass className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
            <FaReact className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <FaCss3Alt className="icon" />
            <FaBootstrap className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaReact className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiJest className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaBootstrap className="icon" />
            <FaGithub className="icon" />
            <FaReact className="icon" />
          </div>
          <div>
            <FaGit className="icon" />
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <FaBootstrap className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGithub className="icon" />
            <SiTailwindcss className="icon" />
            <FaReact className="icon" />
            <SiJquery className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiTailwindcss className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <FaBootstrap className="icon" />
            <SiJquery className="icon" />
            <FaGithub className="icon" />
            <FaSass className="icon" />
            <FaGit className="icon" />
            <FaGulp className="icon" />
            <FaReact className="icon" />
            <SiJest className="icon" />
            <FaNpm className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiJavascript className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaCss3Alt className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <FaReact className="icon" />
            <SiJquery className="icon" />
            <SiJest className="icon" />
            <FaBootstrap className="icon" />
          </div>
          <div>
            <FaGit className="icon" />
            <FaHtml5 className="icon" />
            <SiJquery className="icon" />
            <SiJavascript className="icon" />
            <FaBootstrap className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaReact className="icon" />
            <FaNpm className="icon" />
            <FaGithub className="icon" />
            <FaCss3Alt className="icon" />
            <SiJest className="icon" />
            <SiTailwindcss className="icon" />
          </div>
          <div>
            <FaBootstrap className="icon" />
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <SiJavascript className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <SiJquery className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <FaReact className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <SiTailwindcss className="icon" />
            <FaSass className="icon" />
            <FaGulp className="icon" />
            <FaBootstrap className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <FaReact className="icon" />
            <FaCss3Alt className="icon" />
            <SiJest className="icon" />
            <FaHtml5 className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiTailwindcss className="icon" />
            <FaCss3Alt className="icon" />
            <SiJquery className="icon" />
            <FaBootstrap className="icon" />
            <FaSass className="icon" />
            <SiJavascript className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaReact className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaReact className="icon" />
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
            <FaBootstrap className="icon" />
            <SiJavascript className="icon" />
            <SiJquery className="icon" />
            <SiTailwindcss className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaSass className="icon" />
            <FaGit className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
          </div>
          <div>
            <FaHtml5 className="icon" />
            <SiTailwindcss className="icon" />
            <FaCss3Alt className="icon" />
            <SiJquery className="icon" />
            <FaBootstrap className="icon" />
            <FaSass className="icon" />
            <SiJavascript className="icon" />
            <FaGulp className="icon" />
            <FaNpm className="icon" />
            <FaGit className="icon" />
            <FaReact className="icon" />
            <FaGithub className="icon" />
            <SiJest className="icon" />
          </div>
        </div>
      </section>
      {/* end icons */}
      {/* start skills heading */}
      <section className="skills-heading">
        <Parallax translateY={["-200px", "200px"]}>
          <h1>SKILLS</h1>
        </Parallax>
      </section>
      {/* end skills heading */}
      {/* start skills */}
      <section className="skills">
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
      {/* end skills */}
      {/* start work heading */}
      <section className="projects-heading">
        <Parallax translateY={["-200px", "200px"]}>
          <h1>PROJECTS</h1>
        </Parallax>
      </section>
      {/* end work heading */}
      {/* start work */}
      <section className="work">
        <div className="work-boxs">
          <div className="first">
            <div className="box-1">
              <a
                href="https://www.exceptiondesigns.com/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-2">
              <a
                href="https://green-army.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-3">
              <a
                href="https://wyre-seifsamehh.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-4">
              <a
                href="https://argor.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
          </div>
          <div className="second">
            <div className="box-6">
              <a
                href="https://ieee-community.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-5">
              <a
                href="https://final-touch-seven.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-7">
              <a
                href="https://sneakers-seifsamehh.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
            <div className="box-8">
              <a
                href="https://carr-go.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="PREVIEW PROJECT"
              >
                PREVIEW
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end work */}
      {/* start snippet heading */}
      <section className="snippet-heading">
        <Parallax translateY={["-200px", "200px"]}>
          <h1>SNIPPETS</h1>
        </Parallax>
      </section>
      {/* end snippet heading */}
      {/* start snippet */}
      <section className="snipet">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#ff0" />
              <stop offset="100%" stopColor="#ff00" />
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#0ff" />
              <stop offset="100%" stopColor="#0ff0" />
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#f0f" />
              <stop offset="100%" stopColor="#f0f0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="17s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate
              attributeName="x"
              dur="23s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="24s"
              values="0%;50%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate
              attributeName="x"
              dur="25s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="26s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="19s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <div className="photos">
          <div className="upper">
            <motion.img
              src={one}
              alt="first snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
            <motion.img
              src={two}
              alt="second snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
            <motion.img
              src={three}
              alt="third snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
          </div>
          <div className="footer">
            <motion.img
              src={four}
              alt="four snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
            <motion.img
              src={five}
              alt="five snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
            <motion.img
              src={six}
              alt="six snippet"
              loading="lazy"
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
            />
          </div>
        </div>
      </section>
      {/* end snippet */}
      {/* start contact heading */}
      <section className="contact-heading">
        <Parallax translateY={["-200px", "200px"]}>
          <h1>CONTACT ME</h1>
        </Parallax>
      </section>
      {/* end contact heading */}
      {/* start contact */}
      <section className="contact">
        <div id="contact-info">
          <div className="links">
            <a
              href="https://www.linkedin.com/in/seif-sameh-aaa06b217/"
              title="linkedin"
              className="linkedin-background"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <AiFillLinkedin />
                </span>
              </div>
            </a>
            <a
              href="https://github.com/seifsamehh"
              title="github"
              className="github-background"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <AiFillGithub />
                </span>
              </div>
            </a>
            <a
              href="mailto:seiffsameh00@gmail.com"
              title="gmail"
              className="gmail-background"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <TbBrandGmail />
                </span>
              </div>
            </a>
            <a
              href="tel:+0201060865699"
              title="call"
              className="phone-background"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <BsFillTelephoneFill />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* end contact */}
      <Footer />
    </>
  );
};

export default Home;
