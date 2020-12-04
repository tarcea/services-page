import React, { useState } from 'react';
import search from './Search.module.css';
import { MdLocationOn, MdPerson } from 'react-icons/md';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

function Search()  {
  const [city, setCity] = useState("Helsinki");
  const { icons, rico, inputs, vertical } = search;
  const cityLocation = (e) => {
    return setCity(e.target.value)
  }

  const focusToggle = (e) => {
    e.target.classList.contains(inputs)
      && e.target.classList.toggle(search.selected)
  }

  return (
    <div className={search.container}>
      <form className={search.form}
            onClick={focusToggle}
            onBlur={focusToggle}
      >
       <div className={search.events}>
        <div className={icons}>
          <MdLocationOn className={rico} />
          <input className={inputs}
                 type="text"
                 placeholder="the place"
                 onChange={cityLocation}
                 value={city}
          />
          <div className={vertical}></div>
        </div>
        <div className={icons}>
          <FaCalendarAlt className={rico} />
          <input className={inputs}
                 type="text"
                 placeholder="Starting date"
          />
          <FaChevronDown className={[rico, search.down].join(' ')}/>
          <div className={vertical}></div>
        </div>
        <div className={icons}>
          <FaCalendarAlt className={rico} />
          <input className={inputs}
                 type="text"
                 placeholder="Ending date"
          />
          <FaChevronDown className={[rico, search.down].join(' ')} />
          <div className={vertical}></div>
        </div>
        <div className={icons}>
          <MdPerson className={rico} />
          <input className={inputs}
                 type="text"
                 placeholder="number guests"
          />
          <div className={vertical}></div>
        </div>
        <div className={search.btn}>
          <div>
              <p>Let’s go !</p>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Search;

