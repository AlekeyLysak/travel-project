import './Footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import video from '../../assets/rock.mp4'
import logo from 'assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
        <video src={video} autoPlay muted loop typeof='rock/mp4' className='footer-video' />
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
          <img src={logo} alt="Fake shop" className='logo' />
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
        <p >© 2023 <img src={logo} alt="Fake shop" className='logo-name'/> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;