import React, { useRef, useState } from 'react';
import "./Navbar.css";
import carLogo from "../../assets/car-logo.png";
import { motion } from "framer-motion";
import carSound from "../../assets/carSound.mp3";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const audioRef = useRef(new Audio(carSound));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    audioRef.current.loop = true;
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav-container">
        {/* Logo with sound effect */}
        <div className="logo-title">
          <motion.img
            src={carLogo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.5 }}
          />
        </div>

        {/* Hamburger Menu Icon (For Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-content ${menuOpen ? "active" : ""}`}>
          <li onClick={toggleMenu}>HOME</li>
          <li onClick={toggleMenu}>CATEGORY</li>
          <li onClick={toggleMenu}>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
