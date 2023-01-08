import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet-async';
import one from '../../videos/one.webm'
import two from '../../videos/two.webm'
import three from '../../videos/three.webm'
import four from '../../videos/four.webm'
import five from '../../videos/six.webm'
import six from '../../videos/five.webm'
import seven from '../../videos/seven.webm'
import eight from '../../videos/eight.webm'
import './style/projects.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Projects = () => {
  return (
    <>
    <Helmet>
        <title>My Projects</title>
    </Helmet>
    <Header/>
    <section className="projects-page">
        <div className="projects">
            <div className="project-1">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={one} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>Exception Designs is a branding company , we offer Brand Strategy,<br/> Graphic Design,Logo Design, Identity, Packaging, Bourchures,<br/> Motion Graphics, Website Design, & Web Development.</p>
                        <div className="buttons">
                            <a href="https://www.exceptiondesigns.com/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-2">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>Climate change is expected to exacerbate heat-related extremes that impact human health and environmental and ecological systems. The impacts of climate change are already evident in Egypt and globally.</p>
                        <div className="buttons">
                            <a href="https://green-army.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={two} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-3">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={three} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>We put the power in your hands with easy-to-use APIs that you can use to mesmerize your users with simple and secure crypto-fiat experiences.</p>
                        <div className="buttons">
                            <a href="https://wyre-ten.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-4">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>Argor-Heraeus is part of the Global Business Unit Heraeus Precious Metals (HPM) belonging to the German technological group Heraeus.</p>
                        <div className="buttons">
                            <a href="https://argor.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={four} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-5">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={five} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>IEEE OSB founded in 2022 by group of computer science students, the branch helping and serving students And this will be done through events, workshops, sessions and educational activities IEEE consists of 2 major branches; Organizing and Technical.</p>
                        <div className="buttons">
                            <a href="https://ieee-community.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-6">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>The Final Touch team is honored to serve you in all fields. With superior quality through a team of engineers and technicians whose experience exceeds thirty years in the previous fields from the beginning of 1996 until now, and we are happy to serve you with work extended to all governorates of Egypt and the Arab countries, and we also have the capabilities to manufacture all foundation works with the latest technologies.</p>
                        <div className="buttons">
                            <a href="https://final-touch-seven.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={six} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-7">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={seven} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>Sneakerheads isn't just a
                            brand. It isn't just a collection. Born from the mind of Ali Dawood
                            - we are creating Web 3.0's largest sneaker
                            community. One that gives power to the creators
                            and the community. Starting with 5000 avatars
                            and 40 distinct models, Sneakerheads is a canvas
                            for collaborations, physical and digital,
                            bringing real utility to sneaker culture.
                        </p>
                        <div className="buttons">
                            <a href="https://sneakers-mauve-beta.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-8">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>Car website that services the people you can book your car and go anywhere you want.</p>
                        <div className="buttons">
                            <a href="https://carr-go.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> Live Preview
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={eight} type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Projects