import React from 'react';
import './Footer.css'; // Create this CSS file

const Footer = () => {
  return (
    <footer className="custom-footer">
      © {new Date().getFullYear()}  Cyber-Desk powered by Imperial-World All rights reserved.
    </footer>
  );
};

export default Footer;

