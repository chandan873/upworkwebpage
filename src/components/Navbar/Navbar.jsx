import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logos} alt="logo" /> */}
    <a href="/"><h3 className='cursor-pointer'>INVENTIVE NEXUS</h3></a>    
      </div>
      <ul className="app__navbar-links">
        {['home', 'why us','services ', 'portfolio', 'contact us'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
    
    <li><a href="/blog">Blog</a></li> 
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'services ', 'portfolio', 'why us', 'contact us',].map((item) => (
           <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                  
                </li>
            
              ))}
 <li className="app__flex p-text"> <Link to="/blog"><a href="" >Blog</a></Link> </li>  
            </ul>
             
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
