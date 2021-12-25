import React from 'react';

import Logo from "../../images/logo.png"
import "./styles/Footer.css"

function Footer ({ redirect }) {
  return(
    <footer className='footer' >
      <figure className='footer__container' >
        <img className='footer__container-image' src={Logo} />
      </figure>
      <h1 className='footer__copy' >&copy; Hp shop</h1>
    </footer>
  )
}

export default Footer;