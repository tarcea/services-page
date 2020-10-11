import React from 'react';
// import { Fragment } from 'react';
// import Form from '../Form/form';
import './search.css';
import { MdLocationOn, MdPerson } from 'react-icons/md';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const Search = () => {

  return (
    <div className="container">
     <div className="search-events">
        <div className="search-event-params select-1">
            <div className="input-field-icon">
                <MdLocationOn style={{color: "#000000", opacity: "38%", fontSize: "16px"}} />
                <input id="location-input-1" className="search-event-input" type="text" placeholder="the place" />

                <FaChevronDown style={{color: "#000000", opacity: "38%", fontSize: "16px", position: "relative", right:"25px"}} />
            </div>

        </div>
        <div className="search-event-params select-2">
            <div className="input-field-icon">
                <FaCalendarAlt style={{color: "#000000", opacity: "38%", fontSize: "16px"}} />
                <input id="start-date" className="search-event-input" type="text" placeholder="Starting date" />
                <FaChevronDown style={{color: "#000000", opacity: "38%", fontSize: "16px", position: "relative", right:"25px"}} />
            </div>
        </div>
        <div className="search-event-params select-3">
            <div className="input-field-icon">
                <FaCalendarAlt style={{color: "#000000", opacity: "38%", fontSize: "16px"}} className="icon-field" />
                <input id="end-date" className="search-event-input" type="text" placeholder="Ending date" />
                <FaChevronDown style={{color: "#000000", opacity: "38%", fontSize: "16px", position: "relative", right:"25px"}} />
            </div>
        </div>
        <div className="search-event-params select-4">
            <div className="input-field-icon">
                <MdPerson style={{color: "#000000", opacity: "38%", fontSize: "16px"}} />
                <input id="guest-number-2" className="search-event-input" type="text" placeholder="number guests" />
                <FaChevronDown style={{color: "#000000", opacity: "38%", fontSize: "16px", position: "relative", right:"25px"}} />
            </div>

        </div>
        <div className="lets-go-btn">
            <div>
                <p className="dute-n-centru">Let’s go !</p>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Search;

