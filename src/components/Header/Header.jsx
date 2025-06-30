import {Link} from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header ()  {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
 return (
  <header className="main-header">
         <div className='base'>
        <Link to="/">Vivekanand College</Link>
        </div>
      <nav className='desktop-nav'>
        <Link to="/home" className="nav-item" style={{color:"white"}}>  Home  </Link>
        <Link to="/about" className="nav-item" style={{color:"white"}}>  About  </Link>
        <Link to="/courses" className="nav-item" style={{color:"white"}}>  Courses  </Link>
        <Link to="/contact" className="nav-item" style={{color:"white"}}>  Contact  </Link>
        <Link to="/admission" className="nav-item btn primary-btn" onClick={closeDrawer}>Apply now!</Link>

      </nav>
      <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/about" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/courses" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admission"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
  </header>
 )
}


export default Header;