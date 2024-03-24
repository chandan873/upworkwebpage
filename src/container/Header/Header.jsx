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
      <h1 className='text-5xl font-extrabold pb-5 head-text text-left'>
        Building digital <br />
       span products & brands.
      </h1>
      <p className='mb-5'> 
        This free and open-source landing page template was built using the
        utility classes from Tailwind CSS and based on the components from the
        Flowbite Library and the Blocks System.
      </p>
      <div className="header_button">
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal to Lime</button>
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

