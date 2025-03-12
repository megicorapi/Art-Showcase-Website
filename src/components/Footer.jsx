import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Welcome to our website! We are dedicated to providing engaging, informative, and high-quality content for our visitors. Our platform covers a wide range of topics, including art, culture, history, and more, aiming to inspire and educate. Whether you're here to explore insightful articles, discover stunning artwork, or learn something new, we strive to create an enjoyable and enriching experience for all. Thank you for visiting, and we hope you find what you're looking for as you explore our site!
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2025 All Rights Reserved by Me.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
