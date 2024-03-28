import React from "react";
import { About, Footer, Header, Work, Whyus, Mainfooter,Testimonial } from "./container";
import { Navbar } from "./components";
import { Route, Routes, Navigate } from "react-router-dom";
import Blog from "./container/Blog/Blog";
import Clients from './container/Clients/Clients'

import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        {/* Conditionally render the Navbar component based on the route */}

        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Header />
                <Whyus />
                <About />
               <Testimonial/>
               <Clients/>
              </>
            }
          />
          {/* Disable Navbar component for /portfolio route */}
          <Route path="/portfolio" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Footer />}/>
        </Routes> <Mainfooter />
      </div>
    </>
  );
};

export default App;
