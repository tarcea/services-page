import React from 'react';
import { Link } from "react-router-dom";
import banner from './Banner.module.css';

function BannerNav() {

  const handleClass = (path) => {
    if(window.location.pathname === path)
      return banner.selected
  }

  const handleClick = (e) => {
    const lili = document.getElementById('banner-link').getElementsByTagName("a");
    for (let i = 0; i < lili.length; i++) {
      lili[i].classList.remove(banner.selected);
    }
    e.target.classList.add(banner.selected);
}
  return (
    <ul id="banner-link" className={banner.nav}>
      <li><Link to="/event" onClick={handleClick} className={handleClass("/event")}>Event</Link></li>
      <li><Link to="/flight" onClick={handleClick} className={handleClass("/flight")}>Flight</Link></li>
      <li><Link to="/hotel" onClick={handleClick} className={handleClass("/hotel")}>Hotel</Link></li>
      <li><Link to="/job" onClick={handleClick} className={handleClass("/job")}>Job</Link></li>
      <li><Link to="/restaurant" onClick={handleClick} className={handleClass("/restaurant")}>Restaurant</Link></li>
    </ul>
  );
}

export default BannerNav;
