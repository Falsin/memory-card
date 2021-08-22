import React from 'react';
import logo from '../img/logo.png'

function Header() {
  return (
    <header>
      <img src={logo} alt='A site logo'/>
      <h1>Memory Card</h1>
    </header>
  )
}

export default Header;