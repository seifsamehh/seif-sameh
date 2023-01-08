import React, { useState, useEffect, createContext } from "react";
import { BubblyContainer } from "react-bubbly-transitions";
import { Route, Routes } from "react-router-dom";
import {
  About,
  AboutAr,
  Home,
  HomeAr,
  Projects,
  ProjectsAr,
  Skills,
  SkillsAr,
} from "./components";
import "./App.css";

// theme
export const ThemeContext = createContext(null);
const App = () => {
  // theme
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  // loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : (
        <>
          <ThemeContext.Provider value={{ theme, toogleTheme }}>
            <main id={theme}>
              <label className="switch">
                <input type="checkbox" onChange={toogleTheme} />
                <span className="slider"></span>
              </label>
              <BubblyContainer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/homeAr" element={<HomeAr />} />
                <Route path="/about-ar" element={<AboutAr />} />
                <Route path="/projects-ar" element={<ProjectsAr />} />
                <Route path="/skills-ar" element={<SkillsAr />} />
              </Routes>
            </main>
          </ThemeContext.Provider>
        </>
      )}
    </>
  );
};

export default App;
