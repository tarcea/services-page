import React, { useState } from 'react';
import search from './Search.module.css';
import { MdLocationOn, MdPerson } from 'react-icons/md';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Calendar from './calendar';

function Search()  {
  const [city, setCity] = useState("Helsinki");

  const showCalendar = () => {
    return (
      <Calendar />
    );
  }

  const cityLocation = (e) => {
    return setCity(e.target.value)
  }

  const lineSelected = (e) => {

      e.target.classList.toggle("search-event-input-selected")

  }

  return (
    <div className={search.container}>
     <div className={search.events}>
      <div className={search.icons}>
        <MdLocationOn className={search.rico} />
        <input className={search.inputs} type="text" placeholder="the place" onChange={cityLocation} value={city} onFocus={lineSelected} />
        <div className={search.vertical}></div>
      </div>
      <div className={search.icons}>
        <FaCalendarAlt className={search.rico} />
        <input className={search.inputs} type="text" placeholder="Starting date" onFocus={lineSelected}/>
        <FaChevronDown className={search.rico}/>
        <div className={search.vertical}></div>
      </div>
      <div className={search.icons}>
        <FaCalendarAlt className={search.rico} />
        <input className={search.inputs} type="text" placeholder="Ending date" />
        <FaChevronDown className={search.rico} />
        <div className={search.vertical}></div>
      </div>
      <div className={search.icons}>
        <MdPerson className={search.rico} />
        <input className={search.inputs} type="text" placeholder="number guests" />
        <div className={search.vertical}></div>
      </div>
      <div className={search.btn}>
        <div>
            <p>Let’s go !</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Search;

