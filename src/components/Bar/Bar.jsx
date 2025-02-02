import React from 'react';
import "./Bar.css";
import {motion} from "framer-motion";

const Bar = () => {
  return (
<>
<motion.div
  className="moving-text"
  initial={{ x: "100%" }}
  animate={{ x: "-100%" }}
  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
>
🚗 Experience Luxury. &nbsp; &nbsp;Drive the Future.<span className='bar-break'>&nbsp; &nbsp;Unleash Power, Embrace Elegance.&nbsp; &nbsp;🚗 Innovation Meets Performance. </span> 🚗 
</motion.div>
</>  )
}

export default Bar