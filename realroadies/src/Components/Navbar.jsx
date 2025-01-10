import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }
  

  return (
    <div>
      
       <div className='navbar'>
      <img className='logo'src="./assets/rr-logo.png" alt="logo" />
      <div className="menu-icon" onClick={toggleMenu}>
           <FontAwesomeIcon icon={faBars} />
         </div>
                 <ul className={`menu ${showMenu ? 'active' : ''}`}>
                 
                    <li onClick={closeMenu}>
                         <Link to="/">Home</Link>
                    </li>
                    <li onClick={closeMenu}>
                         <Link to="/about">About</Link>
                    </li>
                    <li onClick={closeMenu}>
                         <Link to="/features">Features</Link>
                    </li>
                    <li onClick={closeMenu}>
                          <Link to="/store">Store</Link>
                    </li>
                    <li onClick={closeMenu}>
                          <Link to="/blog">Blog</Link>
                    </li>
                    <li onClick={closeMenu}>
                      <Link to="/contact">Contact</Link>
                    </li>
                
                 </ul>
                 
      {/* <div className="contact-info">
        <div className="phone">
          <i className="fas fa-phone"></i>
          <span>+91 9448388572</span>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <span>hello@stipe.com</span>
        </div> 
      </div> */}
      </div>
    </div>
  )
}

export default Navbar

