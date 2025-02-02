import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ImagesSection.css";

import car1 from "../../assets/car1.webp";
import car2 from "../../assets/car2.webp";
import car3 from "../../assets/car33.jpg";
import car4 from "../../assets/car4.jpg"; 
import car5 from "../../assets/car5.jpg";
import car6 from "../../assets/car6.jpg";

const ImagesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { scrollYProgress } = useScroll();

  // Scaling effect for Car 4 (Grows)
  const scaleCar4 = useTransform(scrollYProgress, [0.25, 0.6], [1, 2]);
  
  // Shrinking effect for other cars
  const scaleOthers = useTransform(scrollYProgress, [0.25, 0.6], [1, 0.6]);

  return (
    <div className="images-container">
    <motion.div
      ref={ref}
      className="images-section"
      initial={{ opacity: 0, y: 100 }} // Hidden initially
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* First row */}
      <motion.div className="row row-top">
        <motion.img src={car1} alt="Luxury Car 1" style={{ scale: scaleOthers }} />
        <motion.img src={car2} alt="Luxury Car 2" style={{ scale: scaleOthers }} />
      </motion.div>

      {/* Second row */}
      <motion.div className="row row-bottom">
        <motion.div className="left">
          <motion.img src={car3} alt="Luxury Car 3" style={{ scale: scaleOthers }} />
        </motion.div>

        {/* Car 4 with Scaling Effect */}
        <motion.div className="middle">
          <motion.img src={car4}  alt="Luxury Car 4" style={{ scale: scaleCar4, zIndex:"1"}} />
          <motion.img src={car5} alt="Luxury Car 5" style={{ scale: scaleOthers }} />
        </motion.div>

        <motion.div className="right">
          <motion.img src={car6} alt="Luxury Car 6" style={{ scale: scaleOthers }} />
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default ImagesSection;
