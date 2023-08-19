import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";
const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="3"></img>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                Browse
              </Link>
            </NavItem>
            <NavItemDropDown>
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link a="/" className="dropdown-item">
                    Learn Bootstrap
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Where to go next
                  </Link>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <Link to="/" className="nav-link">
                Streams
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
