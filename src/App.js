import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work,Whyus,Mainfooter } from "./container";
import { Navbar } from "./components";
import { Route,Routes } from 'react-router-dom';
import Blog from './container/Blog/Blog'
import { useLocation } from "react-router-dom";

import "./App.css";
const App = () => {
  const currentLocation = useLocation();

  return (  
    <> <div className="app">
      <Navbar />
      {currentLocation.pathname !== "/blog" && (
  <>
      <Header/>
      <Whyus/>
      <About />
      <Work />
      <Footer />
      <Mainfooter/>
      </>
      )}
            {currentLocation  .pathname === "/blog" && <Blog />}


    </div>

    </>
   
    
  );
};

export default App;
