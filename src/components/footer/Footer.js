/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aziz Boughattas</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#qualification">Qualifications</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificate">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className='footer__socials'>
    <a href='https://www.facebook.com/aziz.boughattas' target="_blank" rel="noreferrer"><FaFacebookF /></a>
    <a href='https://www.instagram.com/aziz_boughattas/' target="_blank" rel="noreferrer" ><FiInstagram /></a>
    </div>


    </footer>
  )
}

export default Footer