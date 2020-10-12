import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './filter.css';

const Filter = () => {
  return (
    <div className="filter-left">
    <p className="filter-left-title">Filtered by:</p>
      <div className="event-filter-row">
      <p className="filter-left-subtitle">Location:</p>
        <div className="input-field-icon">
            <MdLocationOn className="search-icons-selected" />
            <input id="location-input-1" className="search-event-input" type="text" placeholder="the place" />
            <FaChevronDown className="search-icons relative-right"/>
        </div>
        <p className="filter-left-subtitle">Event Date:</p>
        <div class="options">
          <div class="options-row">
            <p class="actived-event-date">Today</p>
            <p>Tomorrow</p>
            <p>This week</p>
          </div>
          <div class="event-more-date">
            <input type="text" placeholder="Choose your date" />
            <FaChevronDown className="search-icons relative-right"/>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Filter;
