import {Link} from "react-router-dom"
import "./index.css"

const Header = () => {
    return (
        <div>
            <nav className="custom-navbar">
          <div className="brand-heading">INCREDIBLE INDIA</div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="dropdown">
              <span className="dropdown-toggle">Explore</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/travel" className="dropdown-item">Travel</Link>
                </li>
                <li>
                  <Link to="/destinations" className="dropdown-item">Destinations</Link>
                </li>
                <li>
                  <Link to="/experience" className="dropdown-item">Experience</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Header