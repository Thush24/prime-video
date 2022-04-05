import React from 'react';
import logo from '../../images/primeLogo.png';
import './style.css';

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="Prime Logo" />
      <span>
        Terms and Privacy Notice
        {' '}
        Send us feedback Help © 1996-2022, Amazon.com, Inc. or its affiliates
      </span>
    </footer>
  );
}

export default Footer;
