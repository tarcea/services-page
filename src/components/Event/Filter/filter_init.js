import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Option from '../option';
import Search from '../../Banner/search';
import './filter.css';

const Filter = (props) => {
  return (
    <div className="filter-left">
      <p className="filter-left-title">Filtered by:</p>
      <div className="event-filter-row">
        <p className="filter-left-subtitle">Location:</p>
        {/*<Search value={props.city} />*/}
          <div className="input-field-icon">
              <MdLocationOn className="search-icons-selected" />
              <input id="location-input-1" className="search-event-input" type="text" placeholder="the place" defaultValue="Helsinky city center" />
              <FaChevronDown className="search-icons relative-right"/>
          </div>
          <p className="filter-left-subtitle">Event Date:</p>
          <div className="options">
            <div className="options-row">
              <Option className="event-date actived-event-date">Today</Option>
              <Option className="event-date">Tommorow</Option>
              <Option className="event-date">This week</Option>
            </div>
            <div className="event-more-date input-field-icon">
              <input type="text" placeholder="Choose your date" />
              <FaChevronDown className="search-icons"/>
            </div>
          </div>

          <p className="filter-left-subtitle">Event Categories:</p>
          <div className="options">
            <div className="options-row">
              <Option className="event-date actived-event-date">Design</Option>
              <Option className="event-date">Architecture</Option>
              <Option className="event-date">Music</Option>
              <Option className="event-date">Exhibitions</Option>
              <Option className="event-date">Figure Skating</Option>
              <Option className="event-date actived-event-date">Contemporary Dance</Option>

            </div>
          </div>
      </div>
    </div>
  );

}

export default Filter;
