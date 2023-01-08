import React from 'react'
import { BubblyLink } from "react-bubbly-transitions";
import secondLogo from '../../images/logo.webp'
import './style/headerar.css'

const HeaderAr = _ => {
  return (
    <header id='home-ar' className='header-ar'>
        <nav>
          <div className='link link--ersa'>
            <BubblyLink to="/" colorStart="#cd9900" colorEnd="#222222" duration="1500">انجليزى</BubblyLink>
          </div>
          <div className='link link--ersa'>
            <BubblyLink to="/projects-ar" colorStart="#cd9900" colorEnd="#222222" duration="1500">المشاريع</BubblyLink>
          </div>
          <div className='link link--ersa'>
            <BubblyLink to="/skills-ar" colorStart="#cd9900" colorEnd="#222222" duration="1500">التقنيات</BubblyLink>
          </div>
          <div className='link link--ersa'>
            <BubblyLink to="/about-ar" colorStart="#cd9900" colorEnd="#222222" duration="1500">من أنا؟</BubblyLink>
          </div>
          <div className='link link--ersa'>
            <BubblyLink to="/homeAr" colorStart="#cd9900" colorEnd="#222222" duration="1500">الصفحة الرئيسية</BubblyLink>
          </div>
        </nav>
        <img src={secondLogo} alt="logo" />
    </header>
  )
}

export default HeaderAr