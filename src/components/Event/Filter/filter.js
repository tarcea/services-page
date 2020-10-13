import React from 'react';
import Search from '../../Banner/search';
import './filter.css';
import EventLocation from './event_location';
import EventDate from './event_date';
import EventCategory from './event_category';
import EventPrice from './event_price';
import Vimeo from './vimeo';

const Filter = () => {
  return (
    <div className="filter-left">
      <div className="event-filter-row">
      <p className="filter-left-title">Filtered by:</p>
        <div className="event-location">
          <EventLocation />
        </div>
        <div className="event-category">
          <EventDate />
        </div>
        <div className="event-category">
          <EventCategory />
        </div>
        <div className="event-price">
          <EventPrice />
        </div>
        <div className="event-vimeo">
          <Vimeo />
        </div>
      </div>
    </div>
  );

}

export default Filter;
