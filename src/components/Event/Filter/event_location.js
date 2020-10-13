import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const EventLocation = () => {
  return (
    <div>
      <p className="filter-left-subtitle">Location:</p>
      <div className="row-2 input-field-icon">
        <MdLocationOn className="search-icons-selected" />
        <input id="location-input-1" className="search-event-input" type="text" placeholder="the place" defaultValue="Helsinky city center" />
        <FaChevronDown className="search-icons relative-right"/>
      </div>
    </div>
  );
}

export default EventLocation;
