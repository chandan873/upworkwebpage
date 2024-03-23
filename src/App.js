import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work,Whyus,Mainfooter } from "./container";
import { Navbar } from "./components";
import { Route,Routes } from 'react-router-dom';
import Blog from './container/Blog/Blog'

import "./App.css";
const App = () => {
  return (  
    <> <div className="app">
      <Navbar />
      <Header/>
      <Whyus/>
      <About />
      <Work />
      <Footer />
      <Mainfooter/>
      <Blog />
    </div>

    </>
   
    
  );
};

export default App;
