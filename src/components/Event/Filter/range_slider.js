import React from 'react';
import Option from '../option';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './filter.css';

const useStyles = makeStyles({
  root: {
    width: 300,
  },


});

function valuetext(value) {
  return `€${value[0]} - €${value[1]}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <p className="filter-left-subtitle">Price:</p>
        <div className="price-row">
          <Option className="price-range">Free</Option>
          <div className="amount">{valuetext(value)}</div>
        </div>
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>

        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
}
