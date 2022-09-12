import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className='navbar-block'>
        <div className="navbar-logo">
          PorreBank.
        </div>
        
        <div className='navbar-links'>
          <Link to="/" className='Link'>
            Home
          </Link>

          <Link to="/empresa" className='Link'>
            Empresa
          </Link>

          <Link to="/contato" className='Link'>
            Contato
          </Link>
        </div>
      </div>

    </nav>

    </>
  )
}

export default Navbar
