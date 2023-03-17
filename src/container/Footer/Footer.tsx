import React from 'react';
import './Footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">Travelling</h2>
            <p className='text-logo'>
            "I travel not to go somewhere, but to go. The main thing is movement."
            </p>
            <div className="socials">
              <a href="/some/valid/uri#top">
                <FaFacebook />
              </a>
              <a href="/some/valid/uri#top">
                <FaTwitter />
              </a>
              <a href="/some/valid/uri#top">
                <FaInstagram />
              </a>
              <a href="/some/valid/uri#top">
                <FaLinkedin />
              </a>
              <a href="/some/valid/uri#top">
                <FaGoogle />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2 className='links-title'>Quick Links</h2>
            <ul>
              <li>
                <a href="/some/valid/uri#top">Home</a>
              </li>
              <li>
                <a href="/some/valid/uri#top">Adventure</a>
              </li>
              <li>
                <a href="/some/valid/uri#top">Travel</a>
              </li>
              <li>
                <a href="/some/valid/uri#top">Discovery</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2 className='links-title'>Contact Us</h2>
            <form>
              <input type="email" placeholder="Enter Email" className='mail' />
              <textarea placeholder="Message" className='massage'></textarea>
              <button type="submit" className='send'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 <span>Travelling</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;