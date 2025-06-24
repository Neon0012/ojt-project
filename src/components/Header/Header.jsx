import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  function Header() {
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
         <div style={{textAlign: "left"}}>Vivekanand College</div>
      <nav>
        <Link to="/home" className="nav-item" style={{color:"white"}}>  Home  </Link>
        <Link to="/about" className="nav-item" style={{color:"white"}}>  About  </Link>
        <Link to="/courses" className="nav-item" style={{color:"white"}}>  Courses  </Link>
        <Link to="/contact" className="nav-item" style={{color:"white"}}>  Contact  </Link>
        <Link to="/admission" className="nav-item btn primary-btn" >Apply now!</Link>

      </nav>
      {/* Mobile Hamburger Button */}
      <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
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
          to="/admissions"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}

    </div>
  </header>
 )
}
}

export default Header;