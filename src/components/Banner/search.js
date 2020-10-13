import React, { useState } from 'react';
// import { Fragment } from 'react';
// import Form from '../Form/form';
import './search.css';
import { MdLocationOn, MdPerson } from 'react-icons/md';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Calendar from './calendar';

const Search = () => {
  const [city, setCity] = useState("Helsinky");

  const showCalendar = () => {
    return (
      <Calendar />
    );

  }

  const cityLocation = (e) => {
    return setCity(e.target.value)
  }

  return (
    <div className="container">
     <div className="search-events">
        <div className="search-event-params select-1">
      {/*TODO: reusable componemnt for each search field??*/}
            <div className="input-field-icon">
                <MdLocationOn className="search-icons" />
                <input className="search-event-input" type="text" placeholder="the place" onChange={cityLocation} value={city} />
                <FaChevronDown className="search-icons relative-right"/>
            </div>
        </div>
        <div className="search-event-params select-2">
            <div className="input-field-icon">
                <FaCalendarAlt className="search-icons" />
                <input id="start-date" className="search-event-input" type="text" placeholder="Starting date" />
                <FaChevronDown className="search-icons relative-right"/>
            </div>
        </div>
        <div className="search-event-params select-3">
            <div className="input-field-icon">
                <FaCalendarAlt className="search-icons" />
                <input id="end-date" className="search-event-input" type="text" placeholder="Ending date" />
                <FaChevronDown className="search-icons relative-right" />
            </div>
        </div>
        <div className="search-event-params select-4">
            <div className="input-field-icon">
                <MdPerson className="search-icons" />
                <input id="guest-number-2" className="search-event-input" type="text" placeholder="number guests" />
                <FaChevronDown className="search-icons relative-right" />
            </div>
        </div>
        <div className="lets-go-btn">
            <div>
                <p>Let’s go !</p>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Search;

