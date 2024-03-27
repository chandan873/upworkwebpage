import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../Wrapper';
import { images } from '../../constant';
import './Header.css';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};




const Header = () => (
  <div className="app__header app__flex">

<div className="header_leftsec px-5">
      <h1 className='text-4xl font-extrabold pb-5 head-text text-left'>
      Welcome to Inventive Nexus
      </h1>
      <p className='mb-5'> 
      Your premier destination for cutting-edge software solutions! At Inventive Nexus, we specialize in turning your digital dreams into reality. Whether you're envisioning a stunning website or a seamless mobile app, our team of skilled professionals is dedicated to bringing your ideas to life.
      </p>
      <div className="header_button">
    <a href="#about"> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button></a> 
    
      </div>
    </div>



    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className=""
    >
      
        <div className=" app__flex" >
          <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="profile_bg" />
        </div>
   
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home') 

