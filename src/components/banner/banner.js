import React from 'react';
import "./banner.css";
import Form from './form';


const Banner = () => {
  return (
    <div className="banner">
      <div className="b-center">
          <p>Plan everithing of your journey here!</p>
          <div><Form /></div>
      </div>
    </div>
  );
}

export default Banner;
