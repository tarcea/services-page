import React from 'react';
import { Link } from "react-router-dom";

function BannerNav() {

  const handleClass = (path) => {
    if(window.location.pathname === path)
      return 'banner-link-selected'
  }

  const handleClick = (e) => {
    const lili = document.getElementById('banner-link').getElementsByTagName("a");
    for (let i = 0; i < lili.length; i++) {
      lili[i].classList.remove('banner-link-selected');
    }
    e.target.classList.add('banner-link-selected');
}
  return (
    <ul id="banner-link">
      <li><Link to="/event" onClick={handleClick} className={handleClass("/event")}>Event</Link></li>
      <li><Link to="/flight" onClick={handleClick} className={handleClass("/flight")}>Flight</Link></li>
      <li><Link to="/hotel" onClick={handleClick} className={handleClass("/hotel")}>Hotel</Link></li>
      <li><Link to="/job" onClick={handleClick} className={handleClass("/job")}>Job</Link></li>
      <li><Link to="/restaurant" onClick={handleClick} className={handleClass("/restaurant")}>Restaurant</Link></li>
    </ul>
  );
}

export default BannerNav;
