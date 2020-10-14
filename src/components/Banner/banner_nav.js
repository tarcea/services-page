import React from 'react';
import { Link } from "react-router-dom";

function BannerNav() {
  const handleClick = (e) => {
    const lili = document.getElementById('banner-link').getElementsByTagName("a");
    for (let i = 0; i < lili.length; i++) {
      lili[i].classList.remove('banner-link-selected');
    }
    e.target.classList.add('banner-link-selected');
}
  return (
    <ul id="banner-link">
      <li><Link to="/event" onClick={handleClick}>Event</Link></li>
      <li><Link to="/flight" onClick={handleClick}>Flight</Link></li>
      <li><Link to="/hotel" onClick={handleClick}>Hotel</Link></li>
      <li><Link to="/job" onClick={handleClick}>Job</Link></li>
      <li><Link to="/restaurant" onClick={handleClick}>Restaurant</Link></li>
    </ul>
  );
}

export default BannerNav;
