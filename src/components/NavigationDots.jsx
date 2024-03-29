import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "why us", "services", "testimonial", "client"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
