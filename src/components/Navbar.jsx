import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/NextVRZ-Final_Logopng.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // Function to get the class for each NavLink
  const getLinkClass = ({ isActive }) => {
    if (isActive && isHome) return "active home-link";
    if (isActive) return "active";
    return "";
  };

  return (
    <header className={`navbar ${isHome ? "home" : "light"}`}>
      <div className="nav-container">
        <div className="brand">
          <img src={logo} alt="Next Verse" />
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={getLinkClass}>Company</NavLink>
          <NavLink to="/services" className={getLinkClass}>Service</NavLink>
          <NavLink to="/products" className={getLinkClass}>Products</NavLink>
          <NavLink to="/industry" className={getLinkClass}>Industry</NavLink>
          <NavLink to="/media" className={getLinkClass}>Media Center</NavLink>
        </nav>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <NavLink to="/" className={getLinkClass} onClick={() => setOpen(false)}>Company</NavLink>
          <NavLink to="/services" className={getLinkClass} onClick={() => setOpen(false)}>Service</NavLink>
          <NavLink to="/products" className={getLinkClass} onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/industry" className={getLinkClass} onClick={() => setOpen(false)}>Industry</NavLink>
          <NavLink to="/media" className={getLinkClass} onClick={() => setOpen(false)}>Media Center</NavLink>
        </div>
      )}
    </header>
  );
}
