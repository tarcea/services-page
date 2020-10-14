import React from 'react';
import Option from '../option';
import RangeSlider from './range_slider';

const EventPrice = (props) => {
  console.log()
  return (
    <div>
      <p className="filter-left-subtitle">Price:</p>
      <div className="price-row">
        <Option className="price-range">Free</Option>
        €10 - €50
      </div>
      <div >
        <div >
          <RangeSlider className="slider-box" />

        {/*TODO:double thumb slider as a new component??*/}
        </div>
      </div>
    </div>
  );
}

export default EventPrice;
