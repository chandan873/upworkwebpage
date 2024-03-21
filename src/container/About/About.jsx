import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './About.css';

const AboutData = [
  {
    id: 1,
    title: "Web Development",
    description: "Elevate your online presence and drive growth with our cutting-edge web development solution.",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Experienced in building robust and scalable backend systems. We work with various server-side technologies to power web applications.",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png"
  },
  {
    id: 3,
    title: "App Development",
    description: "Transform your ideas into powerful and intuitive mobile experiences with our expert app development services. We epertise in creating mobile applications that deliver value and provide a great user experience. We specialize in both Android and iOS development.",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Unleash the power of digital marketing to drive your business forward - Our data-driven strategies deliver real results and measurable growth to help businesses reach their target audience and drive growth.",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png"
  },
];

const About = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const openModal = (title) => {
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedTitle(null);
  };

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {AboutData.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            onClick={() => openModal(about)}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
          </motion.div>
        ))}
      </div>

      <Dialog  open={!!selectedTitle} onClose={closeModal}>
        <DialogTitle className='col-12'>{selectedTitle?.title}</DialogTitle>
        <DialogContent >
          <p>{selectedTitle?.description}</p>
          {selectedTitle?.title === "Digital Marketing" && (
            <section className="overlap-wrapper">
              <div className="container">
                <div className="overlap-wrapper--solid">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="https://www.walkweltech.com/assets/images/digital-marketing.png" alt="Digital marketing" className="overlay-banner img-responsive pad-tb" />
                    </div>
                    <div className="col-md-6">
                      <hgroup>
                    
                      </hgroup>
                      <img src="https://www.walkweltech.com/assets/images/shape.png" alt="Digital marketing" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'services', 'app__whitebg');
