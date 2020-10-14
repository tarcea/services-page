import React from 'react';
import { Link } from "react-router-dom";
// import Form from '../Form/form';
// import SearchBar from './searchBar';
import Search from './search';
import BannerNav from './banner_nav';
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
            <BannerNav />
          </div>
        </div>
      </div>
  );
}

export default Banner;
