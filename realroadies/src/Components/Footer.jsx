import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

const Footer = ({ showMenu, closeMenu }) => {
  const handleMenuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  }

  return (
    <div className='footer-container'>
      <img className='footer-logo'src="./assets/rr-logo.png" alt="logo" />
      <div>
        <ul className={`footer-menu ${showMenu ? 'active' : ''}`}>
          <li onClick={handleMenuClick}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to="/features">Features</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to="/store">Store</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to='/blog'>Blog</Link>
          </li>
          <li onClick={handleMenuClick}>
          <Link to='/contact'>Contact</Link>
          </li>
        </ul>
     </div>

      <div className='contact-homearea'>
        <h3 className='con-homehead'>Get in touch with Us</h3>
        <div className='contact-homeadd'>
          <a href="mailto:stipe.so">
            <p><FontAwesomeIcon icon={faEnvelope} /> stipe.so</p>
          </a>

          <a href="tel:+919448388572">
            <p><FontAwesomeIcon icon={faPhone} /> +91 9448388572 -- +91 9886115772</p>
          </a>

          <a href="https://maps.google.com/?q=247,1st Floor, 4th Main Road, Domlur, 2nd Stage, Bengaluru, 560071" target="_blank" rel="noopener noreferrer">
            <p><FontAwesomeIcon icon={faLocationDot} /> #247, 1st Floor, 4th Main Road, Domlur,<br/> <span>2nd Stage, Bengaluru, 560071.</span></p>
          </a>
        </div>

        <div className='social-icons'>
          <a href="https://wa.link/hsqw2s" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com/fb.realroadies?mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com/insta.realroadies?igshid=MzRlODBiNWFlZA==" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/stipesolutions/" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      <div className='footer-right'>
        <p>Made with ♥️ in India by Team RalRoadies<br/>
          © 2024-25 RealRoadies.com</p>
      </div>
    </div>
  )
}

export default Footer
