import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', marginLeft: '-1rem' }}>
        <img src="/logo.png?v=2" alt="AeroPaq Logo" style={{ height: '60px' }} />
      </Link>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={32} color="var(--accent)" /> : <Menu size={32} color="white" />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
        <li><Link to="/#servicios" onClick={toggleMenu}>Servicios</Link></li>
        <li><Link to="/#como-funciona" onClick={toggleMenu}>Cómo Funciona</Link></li>
        <li><Link to="/#cobertura" onClick={toggleMenu}>Cobertura</Link></li>
        <li><Link to="/#nosotros" onClick={toggleMenu}>Nosotros</Link></li>
        <li><Link to="/#contacto" onClick={toggleMenu}>Contacto</Link></li>
        <li><Link to="/cotizador" className="btn-quote" onClick={toggleMenu}>Cotizador</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;