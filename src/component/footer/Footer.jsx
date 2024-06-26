import Link from 'next/link'
import React from 'react'
// import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css"


function Footer() {
  return (
    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a class="social-icon__link" href="#">
          <FaFacebookF/>
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
          <BsWhatsapp/>
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
          <FaGithub />
        </a></li>
      <li className="social-icon__item"><a class="social-icon__link" href="#">
          <FaInstagram />
        </a></li>
        <li className="social-icon__item"><a class="social-icon__link" href="#">
          <FaTiktok/>
        </a></li>
    </ul>
    {/* <ul className="menu">
      <li className="menu__item" ><Link className="menu__link" href="#">Contact</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#">Contact</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#">Contact</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#">Contact</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#">Contact</Link></li>

    </ul> */}
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
    
  )
}

export default Footer
