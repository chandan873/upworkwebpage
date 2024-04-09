import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./About.css";

const AboutData = [
  {
    id: 1,
    title: "Web Development",
    headline: "End-to-End Web Application Development Offerings",
    speclist: [
      "CMS Websites Development",
      "On-demand Web Applications",
      "Progressive Web App (PWA)",
      "Custom-Facing Web Portals to CRM Systems",
      "ERP Systems & Automation Systems",
      "Enterprise Intranet & Extranets",
      "Information Portals to Corporates B2B/ B2C Websites",
    ],
    innerImg:
      "https://www.walkweltech.com/assets/images/web-development.png",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png",
  },
  {
    id: 2,
    title: "BlockChain Technology",
    headline: "Web solutions integrated with Blockchain Technology",
    speclist: [
      "Blockchain Based Distribution Application Development (DApp)",
      "Blockchain Solution Consulting",
      "Cryptocurrency Wallet",
      "Decentralized Exchange Development",
      "Personalized Web Analytics for E-currency",
      "Trading bots for E-currency",
      "Smart Contracts, E-wallet & Exchange Programs",
    ],
    innerImg:
      "https://www.walkweltech.com/assets/images/blockchain-service.png",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png",
  },
  {
    id: 3,
    title: "App Development",
    headline:
      "Interactive and user-friendly applications for the mobile ecosystem.",
    speclist: [
      " iOS Application Development",
      "Android Application Development",
      "Hybrid Application Development",
      "React-native Application Development",
      "Ionic Development",
    ],
    innerImg:
      "https://www.walkweltech.com/assets/images/mobile-development.jpg",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    headline: "Digital Transformation Services",
    speclist: [
      "Brand consulting/Brand Identity design",
      "SEO (Search Engine Optimization)",
      "SMO (Social Media Optimization)",
      "SEM (Search Engine MArketing)",
      "B2B Content Marketing",
      "Media Planning & Buying",
      "Email-Marketing",
      "Corporate Video Production",
      "Web Analytics",
    ],
    innerImg:
      "https://www.walkweltech.com/assets/images/digital-marketing.png",
    img: "https://cdn.sanity.io/images/tesdwhf6/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png",
  },
];

const About = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [open, setOpen] = useState(false); // State for controlling dialog visibility
  const theme = useTheme();
  const below720px = useMediaQuery(theme.breakpoints.down("md"));

  const openModal = (title) => {
    setSelectedTitle(title);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedTitle(null);
    setOpen(false);
  };

  return (
    <div>
      <h2 className="head-text ">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {AboutData.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
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

      <Dialog
        maxWidth="md"
        className={"dialog_box "}
        open={open}
        onClose={closeModal}
      >
        <div className="dialog_title flex justify-between flex-row  bg-indigo-500">
          <DialogTitle className="col-12 text-white">{selectedTitle?.title}</DialogTitle>
        
            <i onClick={closeModal} className="fa-solid fa-xmark text-2xl text-white hover:text-red-700 m-3"></i>
          
        </div>

        <DialogContent
          className={`flex ${
            below720px ? "flex-col" : "flex-row"
          } items-center rounded-3xl`}
        >
          <div className="left_content">
            <img
              className="pr-10 w-96"
              src={selectedTitle?.innerImg}
              alt=""
            />
          </div>
          <div className="right_content">
            <h1 className={`font-bold text-xl mb-5 ${below720px ? "mt-5 " :"mt-0"}`}>
              {selectedTitle?.headline}
            </h1>
            <ul className="list-disc text-base text-slate-500 font-popins tracking-wider">
              {selectedTitle?.speclist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "services",
  ""
);
