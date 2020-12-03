import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Option from '../option';

const EventDate = () => {
  return (
    <div>
      <p className="filter-left-subtitle">Event Date:</p>
      <div className="options">
        <div className="options-row">
          <Option className="event-date actived-event-date">Today</Option>
          <Option className="event-date">Tommorow</Option>
          <Option className="event-date">This week</Option>

        <div className="event-more-date input-icon">
          <input type="text" placeholder="Choose your date" />
          <FaChevronDown className="search-icons down-date"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDate;
