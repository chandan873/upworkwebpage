import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <h1 id="about" className="head-text mb-20">
        About us
      </h1>
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content">
          <div>
            At Inventive Nexus, we're passionate about leveraging technology to
            empower businesses and individuals alike. With a relentless focus on
            creativity, collaboration, and excellence, we strive to deliver
            cutting-edge solutions that drive success in today's digital world.
            <br></br>
            <br></br>
            <b>Our Vision</b>
            <br></br>
            Our vision at Inventive Nexus is to be a catalyst for digital
            transformation, empowering businesses to thrive in a rapidly
            evolving landscape. We envision a future where technology seamlessly
            integrates with human potential, unlocking limitless possibilities
            for innovation and growth.
            <br></br>
            <br></br>
            <b>Our Mission</b>
            <br></br>
            Our mission is to provide unparalleled software solution services
            that enable our clients to achieve their goals with confidence and
            clarity. We're committed to delivering exceptional value through
            innovative thinking, expert craftsmanship, and unwavering dedication
            to client success.
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
