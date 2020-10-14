import React from 'react';
import { Link } from "react-router-dom";

function BannerNav() {
  const handleClick = (e) => {
  // console.log(e.target.classList.value)
  // console.log(e.target.innerText)
  // e.target.classList.add("banner-link-selected");
  // e.target.classList.remove("banner-link-selected");
  e.target.classList.toggle("banner-link-selected");
}
  return (
    <ul>
            <li onClick={handleClick}><Link to="/event" >Event</Link></li>
            <li onClick={handleClick}><Link to="/flight">Flight</Link></li>
            <li onClick={handleClick}><Link to="/hotel">Hotel</Link></li>
            <li onClick={handleClick}><Link to="/job">Job</Link></li>
            <li onClick={handleClick}><Link to="/restaurant">Restaurant</Link></li>
          </ul>
  );
}

export default BannerNav;
