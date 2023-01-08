import React from 'react'
import { Scrollchor } from 'react-scrollchor';
import { BsArrowUpSquareFill } from "react-icons/bs";
import logo from '../../images/logo.webp'
import './style/footerar.css'

const FooterAr = _ => {
  return (
    <footer className='footer-ar'>
        <Scrollchor to='#home-ar'><BsArrowUpSquareFill/></Scrollchor>
        <p>جميع الحقوق ترجع الى<br/><span>سيف الدين سامح</span></p>
        <img src={logo} alt="logo" loading='lazy' />
    </footer>
  )
}

export default FooterAr