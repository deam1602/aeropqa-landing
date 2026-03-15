import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--primary)', 
      color: 'var(--text-light)', 
      padding: '3rem 2rem', 
      textAlign: 'center',
      marginTop: 'auto' 
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AeroPaq <span style={{ color: 'var(--accent)' }}>&copy; {new Date().getFullYear()}</span></p>
        <p style={{ color: '#94A3B8' }}>Proyecto de Programación Web - Universidad Rafael Landívar</p>
      </div>
    </footer>
  );
};

export default Footer;