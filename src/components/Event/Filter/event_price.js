import React from 'react';
import Option from '../option';

const EventPrice = () => {
  return (
    <div>
      <p className="filter-left-subtitle">Price:</p>
      <div className="price-row">
        <Option className="price-range">Free</Option>
        €10 - €50
      </div>
      <div className="slider-box">
        <div className="price-range">
          <input type="range" />
        {/*TODO:double thumb slider as a new component*/}
        </div>
      </div>
    </div>
  );
}

export default EventPrice;
