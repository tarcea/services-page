import React from 'react';
// import { Fragment } from 'react';
// import Form from '../Form/form';
import './searchBar.css';
import { MdLocationOn, MdPerson } from 'react-icons/md';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const SearchBar = () => {

  return (
    <div className="container">
      <div className="field-a">
        <input type="text" placeholder="location" class="field-aa" />

      </div>
      <div className="vertical-lineeee"></div>
      <div className="field-c">
        <input type="text" placeholder="checkin" className="field-cc" />
      </div>
      <div className="field-c">
        <input type="text" placeholder="checkout" className="field-cc" />
      </div>
      <div className="field-c">
        <input type="text" placeholder="number of persons" className="field-cc" />
      </div>
      <div className="field-b">
        <input type="submit" value="Let's go!" />
      </div>
    </div>
  );
}

export default SearchBar;


