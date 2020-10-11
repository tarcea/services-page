import React from 'react';
import { Link } from "react-router-dom";
// import Form from '../Form/form';
// import SearchBar from './searchBar';
import Search from './search';
import './banner.css';


const Banner = () => {
  return (
      <div className="banner">

        <div className="b-center">
         Plan everithing of your jurney here !
          <div className="form">
            <Search />
          </div>
          <div className="banner-nav">
          <ul>
            <li><Link to="/event" className="banner-link-selected">Event</Link></li>
            <li><Link to="/flight">Flight</Link></li>
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
