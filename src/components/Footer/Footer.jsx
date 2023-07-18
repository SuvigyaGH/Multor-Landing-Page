import React from 'react';
import './Footer.scss'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = 'MultOr';

  return (
    <footer className="footer">
      <div className="container">
        <div className="leftSection">
          <p className="companyName">{companyName}</p>
        </div>
        <div className="rightSection">
          <p className="copyright">
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
