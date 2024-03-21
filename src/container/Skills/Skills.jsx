import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Skills.css';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

const Skills=[
  {
    id:1,
    title:"Javascript",
    img:"https://cdn.sanity.io/images/j53u82ij/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png"
  },
  {
    id:2,
    title:"HTML",
    img:"https://cdn.sanity.io/images/j53u82ij/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png"
  },
  {
    id:3,
    title:"Nodejs",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png"
  },
  {
    id:4,
    title:"Figma",
    img:"https://cdn.sanity.io/images/j53u82ij/production/6551e520e801ab656029527c09265981c06dce33-480x480.png"
  },
  {
    id:5,
    title:"Flutter",
    img:"https://cdn.sanity.io/images/j53u82ij/production/08ac37aeccf34ea0b7c4649e221679220d7c2ceb-480x480.png"
  },

  {
    id:6,
    title:"Redux",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png"
  },
  {
    id:7,
    title:"Redux",
    img:"https://cdn.sanity.io/images/tesdwhf6/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
  },
]

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {Skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.title}
            >
              <div
                className="app__flex"
              >
                <img src={skill.img} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
