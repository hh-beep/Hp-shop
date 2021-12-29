import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../images/logo.png"
import "./styles/Header.css"

function Header() {

  const routes = [
    {name: "Home", path: "/"},
    //{name: "Cart", path: "/Cart"},
    {name: "Profile", path: "/Profile"},
    {name: "About Us", path: "/AboutUs"}
  ]

  return(
    <header className="header" >

    <figure className="header__container">
      <img className="header__container-image" src={Logo} />
    </figure>

      <ul className="header__list" >
        {routes.map( item => {
          return(
            <li className='header__list-item item'>
              <Link className='item__link' to={ item.path } >{ item.name }</Link>
            </li>
          )
        })}
      </ul>

    </header>
  )
}

export default Header;