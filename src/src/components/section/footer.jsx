import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-left mb-3">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
