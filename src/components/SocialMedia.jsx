import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/Inventive_Nexus" target="_blank"><BsTwitter /></a>  
    </div>
    <div>
     <a href="https://github.com/Inventive-Nexus" target='_blank'><FaGithub/></a> 
    </div>
    <div>
    <a href="https://www.instagram.com/inventive_nexus/" target='_blank'><BsInstagram /></a>  
    </div>
  </div>
);

export default SocialMedia;
