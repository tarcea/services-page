import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from '../Form/form';

import './banner.css';



const Banner = () => {
  let classes = "";
// const [classes, setClasses] = useState("");
const [clicked, setClicked] = useState(false);
  const changeClick = () => {
     // classes === "" ? setClasses("banner-link-selected"): setClasses("")
    setClicked(!clicked);
    //return classes = clicked ? "banner-link-selected": "";
  }
  return (
      <div className="banner">
        <div className="b-center">
         Plan everithing of your jurney here !
         <Form type="text" placeholder="hooks" />

          <div className="form">
            <input type="text" placeholder="location" />
            <input type="date" placeholder="from" />
            <input type="date" placeholder="to" />
            <input type="text" placeholder="how many persons?" />
            <input type="submit" value="Let's go!" />
          </div>
          <div className="banner-nav">
          <ul>
            <li><Link to="/event" className={clicked ? "banner-link-selected": ""} onClick={changeClick}>Event</Link></li>
            <li><Link to="/flight" className={classes} onClick={changeClick}>Flight</Link></li>
            <li><Link to="/hotel">Hotel</Link></li>
            <li><Link to="/job">Job</Link></li>
            <li><Link to="/restaurant">Restaurant</Link></li>
          </ul>
          </div>
        </div>
      </div>

  );
}

export default Banner;
