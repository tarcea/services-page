import React from 'react';
import Option from '../option';

const EventCategory = () => {
  return (
    <div>
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
  );
}

export default EventCategory;
