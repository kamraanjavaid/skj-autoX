import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./Main.css";
import car from "../../assets/car.webp";

const Main = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollingDown(true); // Trigger animation on scroll down
      } else {
        setScrollingDown(false); // Reset on scroll up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='main-container'>
      {/* Left box: Moves out when scrolling down */}
      <motion.div
        className="main-upper"
        initial={{ x: "-100%" }}
        animate={scrollingDown ? { x: "-100%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ type: "tween", duration: 3 }}
      >
        <motion.h1
          className='main-heading-left'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className='main-h1-heading'>Luxury Cars for<br />Maximum Satisfaction</span>
          <motion.div
            className="main-four-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
          >
            <li>Premium Interior Materials</li>
            <li>Advanced Safety Features</li>
            <li>Powerful Engine Performance</li>
            <li>State-of-the-Art Technology</li>
          </motion.div>
        </motion.h1>
      </motion.div>

      {/* Image: Zooms in when scrolling down */}
      <motion.img layout
        src={car}
        alt="Car"
        className="car-image"
        initial={{ y: "-100vh", opacity: 1 }}
        animate={scrollingDown ? { scale: 1 } : { y: "0", opacity: 1, scale: 1 }}
        transition={{ type: "tween", delay : 0.5, duration: 3 }}
      />

      {/* Right box: Moves out when scrolling down */}
      <motion.div
        className="main-upper-right"
        initial={{ x: "100%" }}
        animate={scrollingDown ? { x: "100%", opacity: 0 } : { x: "0%", opacity: 1 }}
        transition={{ type: "tween", duration: 3 }}
      >
        <motion.h1
          className='main-heading-right'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="right-boxes">
            <div className="box">5000cc+ V8 Engine
            </div>
            <div className="box">1000Nm Torque</div>
            <div className="box">0-100km/h in 3.5 Seconds</div>
            <div className="box">1000W Premium Sound System</div>
          </div>
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default Main;
