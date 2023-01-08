import React from 'react'
import { BubblyLink } from "react-bubbly-transitions";
import secondLogo from '../../images/logo.webp'
import './style/header.css'

const Header = _ => {
  return (
    <header id='home' className='header'>
      <img src={secondLogo} alt="logo" />
      <nav>
        <div className='link link--ersa'>
          <BubblyLink to="/" colorStart="#cd9900" colorEnd="#222222" duration="1500">HOME</BubblyLink>
        </div>
        <div className='link link--ersa'>
          <BubblyLink to="/about" colorStart="#cd9900" colorEnd="#222222" duration="1500">ABOUT ME</BubblyLink>
        </div>
        <div className='link link--ersa'>
          <BubblyLink to="/skills" colorStart="#cd9900" colorEnd="#222222" duration="1500">SKILLS</BubblyLink>
        </div>
        <div className='link link--ersa'>
          <BubblyLink to="/projects" colorStart="#cd9900" colorEnd="#222222" duration="1500">PROJECTS</BubblyLink>
        </div>
        <div className='link link--ersa'>
          <BubblyLink to="/homeAr" colorStart="#cd9900" colorEnd="#222222" duration="1500">ARABIC</BubblyLink>
        </div>
      </nav>
    </header>
  )
}

export default Header