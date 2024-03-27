import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
        <h1 className='head-text mb-20' >About us</h1>
          <div className="app__testimonial-item app__flex">
            {/* <img src="" alt="" /> */}
            <div className="app__testimonial-content">
              {/* <p className="p-text">{testimonials[currentIndex].feedback}</p> */}
              <div>
                {/* <h4 className="bold-text">{testimonials[currentIndex].name}</h4> */}

At Inventive Nexus, we're passionate about leveraging technology to empower businesses and individuals alike. With a relentless focus on creativity, collaboration, and excellence, we strive to deliver cutting-edge solutions that drive success in today's digital world.
<br></br>
<br></br>

<b>Our Vision</b>
<br></br>

Our vision at Inventive Nexus is to be a catalyst for digital transformation, empowering businesses to thrive in a rapidly evolving landscape. We envision a future where technology seamlessly integrates with human potential, unlocking limitless possibilities for innovation and growth.

<br></br>
<br></br>
<b>Our Mission</b>
<br></br>
Our mission is to provide unparalleled software solution services that enable our clients to achieve their goals with confidence and clarity. We're committed to delivering exceptional value through innovative thinking, expert craftsmanship, and unwavering dedication to client success.
                {/* <h5 className="p-text">{testimonials[currentIndex].company}</h5> */}
              </div>
            </div>
          </div>

          {/* <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div> */}
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
