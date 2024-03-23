import React from 'react';
import { motion } from 'framer-motion';
import './Whyus.css'

import { AppWrap } from '../../Wrapper';



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

const card = [
  {
    "data":'5 +',
    "desc":"Years In The Market"
  },
  {
    "data":"230 %",
    "desc":"Growth In Last 3 Years"
  },
  {
    "data":"86 %",
  "desc":"Employees are Engineers"
  },
  {
    "data":"96 %",
    "desc":"Of our clients wish they had found us earlier"
  },
  {
    "data":"130 +",
    "desc":"Clients Served Globally"
  },
  {
    "data":"240 +",
    "desc":"Projects Delivered Successfully"
  }
  
]



const Header = () => (
  <div className="app__header app__flex whyus">
    <h1 className='head-text' >Why Choose <span>INVENTIVE NEXUS</span></h1>
    <div className='card_main'>

      <div className='card_main_left '>
        <h3 className='font-bold' >Crafting Digital Products</h3>
        <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className=""
    >
      
   <div className='grid-container'>
        {card.map((e)=>{
       return (
       <div className='card_box'>
            <h3>{e.data}</h3>
            <p>{e.desc}</p>
          </div>
     );})}
          
        </div>
    </motion.div>
        
      </div>
      <div className='card_main_right'>
        <h3 className='font-bold'>Advocating Agile Methods</h3>
        <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className=""
    >
      
       <img src="https://www.walkweltech.com/assets/images/process-image.png" alt="" />
   
    </motion.div>
      
      </div>
    </div>
  </div>
);

export default AppWrap(Header, 'why us') 
