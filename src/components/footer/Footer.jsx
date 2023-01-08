import React from 'react'
import { Scrollchor } from 'react-scrollchor';
import { BsArrowUpSquareFill } from "react-icons/bs";
import logo from '../../images/logo.webp'
import './style/footer.css'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo" loading='lazy' />
        <p>Made with &#x2764; By <span>Seif Sameh</span></p>
        <Scrollchor to='#home'><BsArrowUpSquareFill/></Scrollchor>
    </footer>
  )
}

export default Footer