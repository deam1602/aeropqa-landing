import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png?v=2" alt="AeroPaq Logo" style={{ height: '60px' }} />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/#servicios">Servicios</Link></li>
        <li><Link to="/#como-funciona">Cómo Funciona</Link></li>
        <li><Link to="/#cobertura">Cobertura</Link></li>
        <li><Link to="/#nosotros">Nosotros</Link></li>
        <li><Link to="/#contacto">Contacto</Link></li>
        <li><Link to="/cotizador" className="btn-quote">Cotizador</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;