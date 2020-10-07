import React from 'react';
import { Link } from "react-router-dom";

import './banner.css';

const Banner = () => {
  return (
      <div className="banner">
        <div className="b-center">
          Plan everithing of your jurney here !
          <div className="form">
            <input type="text" placeholder="location" />
            <input type="date" />
            <input type="date" />
            <input type="text" placeholder="how many persons?"/>
            <input type="submit" value="Let's go!" />
          </div>
          <div className="banner-nav">
          <ul>
            <li><Link to="/event" activeClassName="active">Events</Link></li>
            <li><Link to="/restaurant" activeClassName="active">Restaurants</Link></li>
            <li><Link to="/flight" activeClassName="active">Flights</Link></li>
            <li><Link to="/job" activeClassName="active">Jobs</Link></li>
            <li><Link to="/hotel" activeClassName="active">Hotels</Link></li>
          </ul>
          </div>
        </div>
      </div>

  );
}

export default Banner;
