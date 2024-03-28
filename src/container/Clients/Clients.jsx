import React from 'react';
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import logo1 from '../../assets/about01.png';
import logo2 from '../../assets/about02.png';
import logo3 from '../../assets/about03.png';

const ClientSlider = () => {
  const logos = [logo1, logo2, logo3]; // Replace with your logo paths

  return (
    <>
    <h2 className="head-text">
        Our Valuable <span>Clients</span>
      </h2>
    <div className="overflow-hidden flex justify-center items-center h-fit py-10">
          
      <div className="flex">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-20 h-20 flex justify-center items-center mr-8 hover:scale-150 transform transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default AppWrap(
  MotionWrap(ClientSlider, "app__about"),
  "client",
  "app__whitebg"
);